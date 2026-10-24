function startGame() {
    // Apenas leva para a página do quiz. O arquivo jogo.js vai cuidar do resto.
    window.location.href = 'quiz.html';
}

function showHomeScreen() {
    window.location.href = 'index.html';
}

function confirmGoHome() {
    if (confirm("Você tem certeza que deseja voltar ao Início? Seu progresso será perdido.")) {
        window.location.href = 'index.html';
    }
}