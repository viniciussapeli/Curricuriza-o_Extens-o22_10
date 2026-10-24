const questionsDatabase = [
    // ----- GRANDEZAS E COMPARAÇÕES -----
    {
        //1
        category: 'grandezas',
        difficulty: 'facil',
        title: 'Qual é o maior veículo?',
        type: 'options',
        mediaHtml: '<div class="flex items-end justify-center gap-6 text-5xl"><span class="text-4xl">🏍️</span><span class="text-6xl">🚌</span><span class="text-5xl">🚗</span><span class="text-3xl">🚲</span></div>',
        options: [
            { label: 'A', text: 'Moto 🏍️', correct: false },
            { label: 'B', text: 'Ônibus 🚌', correct: true },
            { label: 'C', text: 'Carro 🚗', correct: false },
            { label: 'D', text: 'Bicicleta 🚲', correct: false }
        ]
    },
    {
        //2
        category: 'grandezas',
        difficulty: 'facil',
        title: 'Qual construção é a mais alta?',
        type: 'options',
        mediaHtml: '<div class="flex items-end justify-center gap-6 text-5xl"><span class="text-5xl">🏡</span><span class="text-7xl">🏢</span><span class="text-3xl">🐶</span><span class="text-4xl">⛺</span></div>',
        options: [
            { label: 'A', text: 'Casa de 🏡', correct: false },
            { label: 'B', text: 'Prédio 🏢', correct: true },
            { label: 'C', text: 'Casinha de cachorro 🐶', correct: false },
            { label: 'D', text: 'Tenda de praia ⛺', correct: false }
        ]
    },
    {
        //3
        category: 'grandezas',
        difficulty: 'facil',
        title: 'Compare o tamanho dos animais (qual é o MAIOR ?):',
        type: 'options',
        mediaHtml: '<div class="flex items-end justify-center gap-4 text-5xl"><span class="text-2xl">🐭</span><span class="text-4xl">🐶</span><span class="text-7xl">🐘</span></div>',
        options: [
            { label: 'A', text: 'Rato 🐭', correct: false },
            { label: 'B', text: 'Cachorro 🐶', correct: false },
            { label: 'C', text: 'Elefante 🐘', correct: true },
            { label: 'D', text: 'Todos iguais', correct: false }
        ]
    },
    {
        //4
        category: 'grandezas',
        difficulty: 'facil',
        title: 'Qual objeto é o mais pesado?',
        type: 'options',
        mediaHtml: '<div class="flex items-center justify-center gap-6 text-6xl">🪶 🍃 🪨 ☁️</div>',
        options: [
            { label: 'A', text: 'Pena 🪶', correct: false },
            { label: 'B', text: 'Folha 🍃', correct: false },
            { label: 'C', text: 'Pedra grande 🪨', correct: true },
            { label: 'D', text: 'Algodão ☁️', correct: false }
        ]
    },
    {
        //5
        category: 'grandezas',
        difficulty: 'facil',
        title: 'Qual dos copos d\'água está CHEIO?',
        type: 'options',
        mediaHtml: `
            <div class="flex gap-6 justify-center items-center">
                <div class="text-center"><div class="w-12 h-20 border-2 border-sky-400 rounded-b-lg relative overflow-hidden bg-white"><div class="absolute bottom-0 w-full h-full bg-sky-400"></div></div><span class="font-bold text-xs">Copo 1</span></div>
                <div class="text-center"><div class="w-12 h-20 border-2 border-sky-400 rounded-b-lg relative overflow-hidden bg-white"><div class="absolute bottom-0 w-full h-1/2 bg-sky-400"></div></div><span class="font-bold text-xs">Copo 2</span></div>
                <div class="text-center"><div class="w-12 h-20 border-2 border-sky-400 rounded-b-lg relative overflow-hidden bg-white"></div><span class="font-bold text-xs">Copo 3</span></div>
            </div>`,
        options: [
            { label: 'A', text: 'Copo 1', correct: true },
            { label: 'B', text: 'Copo 2', correct: false },
            { label: 'C', text: 'Copo 3', correct: false },
            { label: 'D', text: 'Nenhum', correct: false }
        ]
    },
    {
        //6
        category: 'grandezas',
        difficulty: 'medio',
        title: 'Qual a distância que Maria deve percorrer para ir do ponto A ao E?',
        mediaHtml: '<div class="font-bold text-sky-800 bg-white p-3 rounded-xl shadow border">A ── (3km) ── B ── (4km) ── C ── (5km) ── D ── (4km) ── E</div>',
        type: 'options',
        options: [
            { label: 'A', text: '7 Km', correct: false },
            { label: 'B', text: '15 Km', correct: false },
            { label: 'C', text: '16 Km', correct: true },
            { label: 'D', text: '9 Km', correct: false }
        ]
    },
    {
        //7
        category: 'grandezas',
        difficulty: 'medio',
        title: 'João tem 1,75 m de altura e Mateus tem 1,68 m. Quem é mais alto?',
        type: 'options',
        mediaHtml: '<div class="flex items-end justify-center gap-8"><div class="flex flex-col items-center"><span class="text-6xl">🧍‍♂️</span><span class="text-sm font-bold">1,75m</span></div><div class="flex flex-col items-center"><span class="text-5xl">🧍‍♂️</span><span class="text-sm font-bold">1,68m</span></div></div>',
        options: [
            { label: 'A', text: 'Mateus', correct: false },
            { label: 'B', text: 'João', correct: true },
            { label: 'C', text: 'Os dois têm a mesma altura', correct: false },
            { label: 'D', text: 'Nenhuma das acima', correct: false }
        ]
    },
    {
        //8
        category: 'grandezas',
        difficulty: 'medio',
        title: 'Qual unidade pode ser usada para medir a quantidade de água em uma garrafa?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center text-6xl text-sky-500">💧 🍾</div>',
        options: [
            { label: 'A', text: 'Quilogramas - Kg', correct: false },
            { label: 'B', text: 'Metros - m', correct: false },
            { label: 'C', text: 'Mililitros - mL', correct: true },
            { label: 'D', text: 'Centímetros - cm', correct: false }
        ]
    },
    {
        //9
        category: 'grandezas',
        difficulty: 'medio',
        title: 'As aulas iniciaram às 7:30 e encerraram às 11:00. Qual a duração?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center gap-4 text-4xl items-center">🕖 <span class="text-xl">➡️</span> 🕚</div>',
        options: [
            { label: 'A', text: '3 horas', correct: false },
            { label: 'B', text: '2 horas e 25 minutos', correct: false },
            { label: 'C', text: '4 horas', correct: false },
            { label: 'D', text: '3 horas e 30 minutos', correct: true }
        ]
    },
    {
        //10
        category: 'grandezas',
        difficulty: 'medio',
        title: 'É correto afirmar que 30 centímetros é maior que 1 metro?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center items-center gap-4"><div class="bg-blue-200 h-2 w-12 rounded"></div> <span class="font-bold">vs</span> <div class="bg-blue-500 h-2 w-32 rounded"></div></div>',
        options: [
            { label: 'A', text: 'Sim', correct: false },
            { label: 'B', text: 'Não', correct: true }
        ]
    },
    {
        //11
        category: 'grandezas',
        difficulty: 'dificil',
        title: 'Júlia leva 1 hora e meia para produção de uma mesa e 35 min para produção de uma cadeira. Quanto tempo Júlia ira levar para produzir 2 mesas e 1 cadeira',
        type: 'options',
        mediaHtml: '<div class="flex justify-center text-4xl gap-2">🪵 🔨 🪑</div>',
        options: [
            { label: 'A', text: '3 horas e 35 minutos', correct: true },
            { label: 'B', text: '4 horas', correct: false },
            { label: 'C', text: '1 hora e 10 minutos', correct: false },
            { label: 'D', text: '4 horas e 35 minutos', correct: false }
        ]
    },
    {
        //12
        category: 'grandezas',
        difficulty: 'dificil',
        title: 'Selecione a ordem correta, do MENOR para o MAIOR:',
        type: 'options',
        mediaHtml: '<div class="flex justify-center text-5xl">📏 📐</div>',
        options: [
            { label: 'A', text: 'Km -> m -> cm -> mm', correct: false },
            { label: 'B', text: 'm -> Km -> cm -> mm', correct: false },
            { label: 'C', text: 'mm -> cm -> m -> Km', correct: true }
        ]
    },
    {
        //13
        category: 'grandezas',
        difficulty: 'dificil',
        title: 'Maria gostaria de converter o peso de uma bola (Kg) para litros, é possível?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center items-center gap-4 text-4xl">⚖️ ⚽ ➡️ 💧 📏</div>',
        options: [
            { label: 'A', text: 'SIM', correct: false },
            { label: 'B', text: 'NÃO', correct: true }
        ]
    },

    // ----- ANIMAIS E SEUS HABITATS -----
    {
        //14
        category: 'habitats',
        difficulty: 'facil',
        title: 'Qual animal combina com o habitat MAR 🌊?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center text-6xl text-blue-500">🌊 🏝️ 🐚</div>',
        options: [
            { label: 'A', text: 'Baleia 🐋', correct: true },
            { label: 'B', text: 'Cavalo 🐎', correct: false },
            { label: 'C', text: 'Camelo 🐪', correct: false },
            { label: 'D', text: 'Galinha 🐔', correct: false }
        ]
    },
    {
        //15
        category: 'habitats',
        difficulty: 'facil',
        title: 'Qual destes lugares úmidos é adequado para os sapos viverem?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center text-6xl">🐸 🌿 💧</div>',
        options: [
            { label: 'A', text: 'Deserto', correct: false },
            { label: 'B', text: 'Caatinga', correct: false },
            { label: 'C', text: 'Oceano Profundo', correct: false },
            { label: 'D', text: 'Lagoa', correct: true }
        ]
    },
    {
        //16
        category: 'habitats',
        difficulty: 'facil',
        title: 'Onde vive o peixe 🐟?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center gap-4 text-6xl">🌳 🧊 🌾 🌊</div>',
        options: [
            { label: 'A', text: 'Floresta 🌳', correct: false },
            { label: 'B', text: 'Iceberg 🧊', correct: false },
            { label: 'C', text: 'Pasto 🌾', correct: false },
            { label: 'D', text: 'Oceano 🌊', correct: true }
        ]
    },
    {
        //17
        category: 'habitats',
        difficulty: 'facil',
        title: 'Que animal é esse? 🦇',
        type: 'options',
        mediaHtml: '<div class="flex justify-center text-6xl bg-gray-800 p-4 rounded-xl shadow-inner">🦇 🌕</div>',
        options: [
            { label: 'A', text: 'Camelo', correct: false },
            { label: 'B', text: 'Morcego', correct: true },
            { label: 'C', text: 'Rato', correct: false },
            { label: 'D', text: 'Pássaro', correct: false }
        ]
    },
    {
        //18
        category: 'habitats',
        difficulty: 'facil',
        title: 'Qual animal vive em lugares muito frios, como o Polo Sul?',
        mediaHtml: '<div class="flex justify-center text-6xl">❄️ 🐧 🧊</div>',
        type: 'options',
        options: [
            { label: 'A', text: 'Pinguim 🐧', correct: true },
            { label: 'B', text: 'Galinha 🐔', correct: false },
            { label: 'C', text: 'Macaco 🐒', correct: false },
            { label: 'D', text: 'Mico Leão 🦁', correct: false }
        ]
    },
    {
        //19
        category: 'habitats',
        difficulty: 'medio',
        title: 'Qual destes animais NÃO pertence ao grupo dos terrestres?',
        mediaHtml: '<div class="flex justify-center gap-4 text-5xl bg-amber-50 p-4 rounded-xl border">🐶 🐱 🐎 🐟</div>',
        type: 'options',
        options: [
            { label: 'A', text: 'Cachorro 🐶', correct: false },
            { label: 'B', text: 'Gato 🐱', correct: false },
            { label: 'C', text: 'Peixe 🐟', correct: true },
            { label: 'D', text: 'Cavalo 🐎', correct: false }
        ]
    },
    {
        //20
        category: 'habitats',
        difficulty: 'medio',
        title: 'Que ave imponente das florestas é essa? 🦅',
        type: 'options',
        mediaHtml: '<div class="flex justify-center text-7xl">🦅 🌲</div>',
        options: [
            { label: 'A', text: 'Vaca', correct: false },
            { label: 'B', text: 'Gavião', correct: true },
            { label: 'C', text: 'Polvo', correct: false },
            { label: 'D', text: 'Peixe', correct: false }
        ]
    },
    {
        //21
        category: 'habitats',
        difficulty: 'dificil',
        title: 'Você pode chegar perto e acariciar este animal selvagem (Leão 🦁)?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center text-7xl">🦁 🤚 ❌</div>',
        options: [
            { label: 'A', text: 'Sim', correct: false },
            { label: 'B', text: 'Não', correct: true }
        ]
    },
    {
        //22
        category: 'habitats',
        difficulty: 'dificil',
        title: 'Qual animal consegue passar por pequenos espaços nas pedras no fundo do mar?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center text-7xl text-blue-800">🪸 🐙 🪨</div>',
        options: [
            { label: 'A', text: 'Tartaruga 🐢', correct: false },
            { label: 'B', text: 'Polvo 🐙', correct: true },
            { label: 'C', text: 'Cavalo Marinho 🐎', correct: false },
            { label: 'D', text: 'Água viva 🪼', correct: false }
        ]
    },

    // ----- PERCEPÇÃO VISUAL -----
    {
        //23
        category: 'percepcao',
        difficulty: 'facil',
        title: 'Qual desenho é o DIFERENTE do grupo?',
        mediaHtml: '<div class="flex justify-center gap-4 text-6xl">🐶 🐶 🐱 🐶</div>',
        type: 'options',
        options: [
            { label: 'A', text: 'Primeiro', correct: false },
            { label: 'B', text: 'Segundo', correct: false },
            { label: 'C', text: 'Terceiro', correct: true },
            { label: 'D', text: 'Quarto', correct: false }
        ]
    },
    {
        //24
        category: 'percepcao',
        difficulty: 'facil',
        title: 'Qual figura é IGUAL ao modelo? Modelo: 🐰',
        type: 'options',
        mediaHtml: '<div class="flex justify-center gap-8 text-5xl items-center"><div class="border-r-4 pr-6">🐰</div><div>🐻 🐰 🐱 🦊</div></div>',
        options: [
            { label: 'A', text: 'Urso 🐻', correct: false },
            { label: 'B', text: 'Coelho 🐰', correct: true },
            { label: 'C', text: 'Gato 🐱', correct: false },
            { label: 'D', text: 'Raposa 🦊', correct: false }
        ]
    },
    {
        //25
        category: 'percepcao',
        difficulty: 'facil',
        title: 'Qual figura NÃO pertence ao grupo da natureza terrestre?',
        mediaHtml: '<div class="flex justify-center gap-6 text-6xl bg-green-50 p-4 rounded-xl border border-green-200">🌱 🌸 🌙 🌲</div>',
        type: 'options',
        options: [
            { label: 'A', text: 'Planta 🌱', correct: false },
            { label: 'B', text: 'Flor 🌸', correct: false },
            { label: 'C', text: 'Lua 🌙', correct: true },
            { label: 'D', text: 'Árvore 🌲', correct: false }
        ]
    },
    {
        //26
        category: 'percepcao',
        difficulty: 'medio',
        title: 'Qual figura completa a sequência lógica? 🔴 🔵 🔴 🔵 ___',
        type: 'options',
        mediaHtml: '<div class="flex justify-center gap-2 text-6xl">🔴 🔵 🔴 🔵 <span class="border-b-4 border-dashed border-gray-400 w-12 ml-2"></span></div>',
        options: [
            { label: 'A', text: '🔴 (Círculo Vermelho)', correct: true },
            { label: 'B', text: '🟢 (Círculo Verde)', correct: false },
            { label: 'C', text: '🟡 (Círculo Amarelo)', correct: false }
        ]
    },
    {
        //27
        category: 'percepcao',
        difficulty: 'dificil',
        title: 'Qual sequência está FORA do padrão?',
        mediaHtml: `
            <div class="text-center text-3xl space-y-3 bg-white p-6 rounded-xl border w-full max-w-sm mx-auto shadow-sm">
                <div>A) 🔴 🔵 🔴</div>
                <div>B) 🔴 🔵 🔴</div>
                <div>C) 🔴 🔵 🔴</div>
                <div class="bg-red-50 rounded-lg">D) 🔴 🔵 🟣</div>
            </div>`,
        type: 'options',
        options: [
            { label: 'A', text: 'Sequência A', correct: false },
            { label: 'B', text: 'Sequência B', correct: false },
            { label: 'C', text: 'Sequência C', correct: false },
            { label: 'D', text: 'Sequência D', correct: true }
        ]
    },

    // ----- CONTAGEM E QUANTIDADE -----
    {
        //28
        category: 'contagem',
        difficulty: 'facil',
        title: 'Conte as estrelas. Quantas estrelas aparecem?',
        mediaHtml: '<div class="flex justify-center gap-2 text-6xl text-amber-400 drop-shadow-md p-4">⭐ ⭐ ⭐ ⭐ ⭐</div>',
        type: 'options',
        options: [
            { label: 'A', text: '3 estrelas', correct: false },
            { label: 'B', text: '4 estrelas', correct: false },
            { label: 'C', text: '5 estrelas', correct: true },
            { label: 'D', text: '6 estrelas', correct: false }
        ]
    },
    {
        //29
        category: 'contagem',
        difficulty: 'facil',
        title: 'Quantos cachorros estão na imagem?',
        mediaHtml: '<div class="flex justify-center gap-4 text-7xl p-4">🐶 🐶 🐶</div>',
        type: 'options',
        options: [
            { label: 'A', text: '2 cachorros', correct: false },
            { label: 'B', text: '3 cachorros', correct: true },
            { label: 'C', text: '4 cachorros', correct: false }
        ]
    },
    {
        //30
        category: 'contagem',
        difficulty: 'facil',
        title: 'Qual grupo tem MENOS frutas?',
        mediaHtml: '<div class="flex flex-col items-center gap-4 text-4xl bg-white p-4 rounded-xl border"><div class="flex items-center gap-4"><span class="font-bold text-lg w-20">Grupo 1:</span> 🍎🍎🍎🍎</div><div class="flex items-center gap-4"><span class="font-bold text-lg w-20">Grupo 2:</span> 🍎🍎</div></div>',
        type: 'options',
        options: [
            { label: 'A', text: 'Grupo 1', correct: false },
            { label: 'B', text: 'Grupo 2', correct: true }
        ]
    },
    {
        //31
        category: 'contagem',
        difficulty: 'facil',
        title: 'Se temos 3 carrinhos 🚗🚗🚗 e ganhamos mais 1 🚗, quantos teremos?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center items-center gap-4 text-5xl">🚗🚗🚗 <span class="text-3xl text-green-500 font-black">➕</span> 🚗</div>',
        options: [
            { label: 'A', text: '3 carrinhos', correct: false },
            { label: 'B', text: '4 carrinhos', correct: true },
            { label: 'C', text: '5 carrinhos', correct: false }
        ]
    },
    {
        //32
        category: 'contagem',
        difficulty: 'medio',
        title: 'Havia 4 passarinhos na árvore. Mais 3 chegaram. Quantos há agora?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center items-center gap-4 text-5xl">🐦🐦🐦🐦 <span class="text-3xl font-black">➕</span> 🐦🐦🐦</div>',
        options: [
            { label: 'A', text: '6 passarinhos', correct: false },
            { label: 'B', text: '7 passarinhos', correct: true },
            { label: 'C', text: '8 passarinhos', correct: false }
        ]
    },
    {
        //33
        category: 'contagem',
        difficulty: 'medio',
        title: 'A coelhinha tinha 7 cenouras e comeu 2. Quantas sobraram?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center items-center gap-4 text-5xl">🥕🥕🥕🥕🥕🥕🥕 <span class="text-3xl text-red-500 font-black">➖</span> 🥕🥕</div>',
        options: [
            { label: 'A', text: '4 cenouras', correct: false },
            { label: 'B', text: '5 cenouras', correct: true },
            { label: 'C', text: '6 cenouras', correct: false }
        ]
    },
    {
        //34
        category: 'contagem',
        difficulty: 'dificil',
        title: 'O coelho tinha 8 cenouras e ganhou mais 4. Quantas tem agora?',
        type: 'options',
        mediaHtml: '<div class="flex flex-col items-center gap-2"><div class="text-4xl">🥕🥕🥕🥕🥕🥕🥕🥕</div><div class="text-3xl font-black">➕</div><div class="text-4xl">🥕🥕🥕🥕</div></div>',
        options: [
            { label: 'A', text: '10 cenouras', correct: false },
            { label: 'B', text: '11 cenouras', correct: false },
            { label: 'C', text: '12 cenouras', correct: true },
            { label: 'D', text: '13 cenouras', correct: false }
        ]
    },
    {
        //35
        category: 'contagem',
        difficulty: 'dificil',
        title: 'No aquário havia 10 peixes. 3 saíram e 2 novos chegaram. Quantos ficaram?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center items-center gap-4 text-4xl bg-cyan-50 p-4 rounded-xl border-cyan-200 border-2">🐟x10 <span class="text-red-500 font-bold">-3</span> <span class="text-green-500 font-bold">+2</span></div>',
        options: [
            { label: 'A', text: '8 peixes', correct: false },
            { label: 'B', text: '9 peixes', correct: true },
            { label: 'C', text: '10 peixes', correct: false },
            { label: 'D', text: '11 peixes', correct: false }
        ]
    },

    // ----- CONSCIÊNCIA SILÁBICA -----
    {
        //36
        category: 'silabas',
        difficulty: 'facil',
        title: 'Qual palavra tem 2 sílabas?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center gap-8 text-6xl">☀️ 🏡 🌻 🌊</div>',
        options: [
            { label: 'A', text: 'Sol', correct: false },
            { label: 'B', text: 'Casa', correct: true },
            { label: 'C', text: 'Flor', correct: false },
            { label: 'D', text: 'Mar', correct: false }
        ]
    },
    {
        //37
        category: 'silabas',
        difficulty: 'facil',
        title: 'Quantas sílabas tem a palavra "BOLA" ?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center text-7xl">⚽</div>',
        options: [
            { label: 'A', text: '1 sílaba', correct: false },
            { label: 'B', text: '2 sílabas', correct: true },
            { label: 'C', text: '3 sílabas', correct: false },
            { label: 'D', text: '4 sílabas', correct: false }
        ]
    },
    {
        //38
        category: 'silabas',
        difficulty: 'facil',
        title: 'Qual palavra começa com a sílaba "CA"?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center items-center gap-6 text-6xl bg-white p-4 rounded-xl shadow-sm"><span class="font-bold text-4xl mr-4 text-blue-600">CA +</span>🛏️ ⚽ 🦆 🐸</div>',
        options: [
            { label: 'A', text: 'CAMA 🛏️', correct: true },
            { label: 'B', text: 'BOLA ⚽', correct: false },
            { label: 'C', text: 'PATO 🦆', correct: false },
            { label: 'D', text: 'SAPO 🐸', correct: false }
        ]
    },
    {
        //39
        category: 'silabas',
        difficulty: 'medio',
        title: 'Quantas sílabas tem "BANANA" ?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center text-7xl">🍌</div>',
        options: [
            { label: 'A', text: '2 sílabas', correct: false },
            { label: 'B', text: '3 sílabas', correct: true },
            { label: 'C', text: '4 sílabas', correct: false }
        ]
    },
    {
        //40
        category: 'silabas',
        difficulty: 'medio',
        title: 'Qual é a ÚLTIMA sílaba de (CA - VA - ...)?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center items-center text-6xl gap-4">🐎 <span class="font-bold text-3xl">CA - VA - ❓</span></div>',
        options: [
            { label: 'A', text: 'CA', correct: false },
            { label: 'B', text: 'VA', correct: false },
            { label: 'C', text: 'LO', correct: true }
        ]
    },
    {
        //41
        category: 'silabas',
        difficulty: 'dificil',
        title: 'Qual palavra tem 4 sílabas?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center text-6xl gap-6">🏡 😁 ☎️ ⚽</div>',
        options: [
            { label: 'A', text: 'Casa', correct: false },
            { label: 'B', text: 'Felicidade', correct: false },
            { label: 'C', text: 'Telefone', correct: true },
            { label: 'D', text: 'Bola', correct: false }
        ]
    },
    {
        //42
        category: 'silabas',
        difficulty: 'dificil',
        title: 'Se juntarmos "CA" + "DER" + "NO", qual palavra formamos?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center items-center text-3xl font-black gap-2 text-indigo-700 bg-indigo-50 p-4 rounded-xl">CA <span class="text-gray-400">+</span> DER <span class="text-gray-400">+</span> NO <span class="text-gray-400">=</span> ❓</div>',
        options: [
            { label: 'A', text: 'Caderno', correct: true },
            { label: 'B', text: 'Caneta', correct: false },
            { label: 'C', text: 'Carro', correct: false },
            { label: 'D', text: 'Cadeado', correct: false }
        ]
    },
    {
        //43
        category: 'silabas',
        difficulty: 'dificil',
        title: 'Qual opção separa corretamente a palavra "COMPUTADOR" em sílabas?',
        type: 'options',
        mediaHtml: '<div class="flex justify-center text-7xl text-gray-700">💻</div>',
        options: [
            { label: 'A', text: 'COM - PU - TA - DOR', correct: true },
            { label: 'B', text: 'CO - MPU - TA - DOR', correct: false },
            { label: 'C', text: 'COM - PUT - A - DOR', correct: false }
        ]
    }     
];