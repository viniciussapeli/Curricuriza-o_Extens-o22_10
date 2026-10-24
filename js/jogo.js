let currentQuestionsList = [];
let currentQuestionIndex = 0;
let score = 0;

// ==========================================
// TELA INICIAL (index.html)
// ==========================================
function setDifficulty(diff) {
    // 1. Salva a escolha na "memória" do navegador para o quiz.html poder ler depois
    localStorage.setItem('quiz_difficulty', diff);

    document.querySelectorAll('.diff-btn').forEach(btn => {
        btn.className = 'diff-btn bg-gray-200 text-gray-700 font-game py-2 rounded-xl border-2 border-gray-300 shadow';
    });

    const activeBtn = document.getElementById(`diff-${diff}`);
    if (activeBtn) {
        activeBtn.className = 'diff-btn bg-emerald-500 text-white font-game py-2 rounded-xl border-2 border-emerald-600 shadow';
    }
}

// ==========================================
// TELA DO QUIZ (quiz.html)
// ==========================================
function startQuizMode() {
    // Lê a dificuldade salva. Se não achar, usa 'facil' como padrão.
    let difficulty = localStorage.getItem('quiz_difficulty') || 'facil';

    currentQuestionsList = questionsDatabase.filter(q => q.difficulty === difficulty);

    if (currentQuestionsList.length === 0) {
        alert('Não existem perguntas para essa dificuldade.');
        window.location.href = 'index.html';
        return;
    }

    currentQuestionsList.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    score = 0;

    renderQuestion();
}

function renderQuestion() {
    const q = currentQuestionsList[currentQuestionIndex];
    if (!q) {
        endGame();
        return;
    }

    const progressBar = document.getElementById('header-progress-bar');
    if (progressBar) {
        const progressPercent = (currentQuestionIndex / currentQuestionsList.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

    document.getElementById('question-level-badge').textContent = `Questão nível ${q.difficulty.toUpperCase()}`;
    document.getElementById('question-counter').textContent = `Pergunta ${currentQuestionIndex + 1} de ${currentQuestionsList.length}`;
    document.getElementById('question-text').textContent = q.title;

    const mediaBox = document.getElementById('question-media-container');
    if (q.mediaHtml) {
        mediaBox.innerHTML = q.mediaHtml;
    } else {
        mediaBox.innerHTML = '<div class="text-6xl animate-bounce-gentle">⭐</div>';
    }

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'card-option bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 active:border-amber-500 rounded-2xl p-4 text-left font-bold text-gray-800 shadow flex items-center gap-3 transition';
        btn.innerHTML = `
            <span class="w-8 h-8 rounded-full bg-amber-400 text-amber-900 font-game flex items-center justify-center text-sm shadow">${opt.label}</span>
            <span class="text-base font-semibold flex-1">${opt.text}</span>
        `;
        btn.onclick = () => handleAnswer(opt.correct);
        container.appendChild(btn);
    });
}

function handleAnswer(isCorrect) {
    if (isCorrect) {
        score++;
        document.getElementById('modal-correct').classList.remove('hidden');
    } else {
        document.getElementById('modal-incorrect').classList.remove('hidden');
    }
}

function nextQuestion() {
    document.getElementById('modal-correct').classList.add('hidden');
    document.getElementById('modal-incorrect').classList.add('hidden');
    currentQuestionIndex++;
    renderQuestion();
}

function endGame() {
    const total = currentQuestionsList.length;
    
    // 2. Salva a pontuação final para as telas de sucesso/falha conseguirem ler
    localStorage.setItem('quiz_score', score);
    localStorage.setItem('quiz_total', total);

    const percentage = (score / total) * 100;

    // Redireciona para o arquivo correto dependendo da nota
    if (percentage >= 60) {
        window.location.href = 'sucesso.html';
    } else {
        window.location.href = 'falha.html';
    }
}

// ==========================================
// TELAS DE RESULTADO (sucesso.html / falha.html)
// ==========================================
function loadResults() {
    // Lê a pontuação que foi salva no fim do quiz
    const finalScore = localStorage.getItem('quiz_score') || 0;
    const totalQs = localStorage.getItem('quiz_total') || 0;

    // Procura os elementos na tela (eles existem dependendo de qual arquivo HTML está aberto)
    const successScoreEl = document.getElementById('success-score');
    const successTotalEl = document.getElementById('success-total');
    
    const failScoreEl = document.getElementById('fail-score');
    const failTotalEl = document.getElementById('fail-total');

    // Atualiza os textos
    if (successScoreEl) successScoreEl.textContent = finalScore;
    if (successTotalEl) successTotalEl.textContent = `de ${totalQs} perguntas!`;

    if (failScoreEl) failScoreEl.textContent = finalScore;
    if (failTotalEl) failTotalEl.textContent = `de ${totalQs} perguntas.`;
}

// ==========================================
// INICIALIZAÇÃO INTELIGENTE
// ==========================================
// Quando qualquer página HTML carregar, o JS vai descobrir em qual página ele está e rodar só o que precisa
window.addEventListener('load', () => {
    const pageUrl = window.location.pathname;

    if (pageUrl.includes('quiz.html')) {
        startQuizMode();
    } else if (pageUrl.includes('sucesso.html') || pageUrl.includes('falha.html')) {
        loadResults();
    } else {
        // Se estiver no index.html, força o botão "fácil" a vir marcado por padrão
        localStorage.setItem('quiz_difficulty', 'facil');
        const diffFacil = document.getElementById('diff-facil');
        if(diffFacil) setDifficulty('facil');
    }
});