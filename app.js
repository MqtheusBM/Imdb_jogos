// --- BANCO DE DADOS MOCK (Simulado) ---
const gameDatabase = {
    // --- NOVO: BATTLEFIELD 6 ---
    'battlefield-6': {
        title: 'Battlefield™ 6',
        developer: 'Battlefield Studios / EA',
        publisher: 'Electronic Arts',
        releaseDate: '10/10/2025', // Data baseada nos "vazamentos" e contexto futurista
        genre: 'FPS, Ação',
        rating: '9.0',
        imageUrl: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2807960/c12d12ce3c7d217398d3fcad77427bfc9d57c570/header.jpg?t=1764108244', // Placeholder visual ou arte conceitual
        synopsis: 'A experiência definitiva de guerra total está de volta. Battlefield 6 traz o retorno triunfante da campanha single-player, onde você se junta ao esquadrão de elite Dagger 13 contra a facção Pax Armata. No multiplayer, domine com o novo "Kinesthetic Combat System" e o modo Battle Royale gratuito "RedSec".',
        success: [
            'Retorno aclamado da Campanha Single-Player.',
            'Sistema de classes clássico está de volta (fim dos Especialistas).',
            'Modo "RedSec" (Battle Royale) gratuito atraiu milhões.',
            'Destruição de cenário em escala nunca vista (Levolution 2.0).'
        ],
        failure: [
            'Relatos de burnout e problemas culturais nos estúdios durante o desenvolvimento.',
            'Preço da "Phantom Edition" considerado abusivo por parte da comunidade.',
            'Bugs visuais menores no lançamento do modo RedSec.'
        ],
        popularity: {
            labels: ['Out 2025 (Lanç.)', 'Nov 2025', 'Dez 2025 (Est.)'],
            data: [2500000, 1800000, 2100000] // Números fictícios de "sucesso"
        }
    },
    'stardew-valley': {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        publisher: 'ConcernedApe',
        releaseDate: '26/02/2016',
        genre: 'Simulação, RPG',
        rating: '9.8',
        imageUrl: 'https://tm.ibxk.com.br/2024/11/04/04201322266001.jpg',
        synopsis: 'Você herdou a antiga fazenda do seu avô em Stardew Valley. Armado com ferramentas de segunda mão e algumas moedas, você parte para começar sua nova vida. Você consegue aprender a viver da terra e transformar esses campos cobertos de mato em um lar próspero?',
        success: [
            'Gameplay relaxante e viciante com centenas de horas.',
            'Desenvolvido por uma única pessoa, criando uma história inspiradora.',
            'Atualizações de conteúdo massivas e gratuitas por anos.',
            'Preço justo e sem microtransações.',
            'Comunidade forte e engajada.'
        ],
        failure: [
            'Gráficos em pixel art podem não agradar a todos.',
            'Ritmo inicial pode ser considerado lento por alguns jogadores.'
        ],
        popularity: {
            labels: ['2016', '2017', '2018', '2019', '2020 (Update)', '2021', '2022', '2023'],
            data: [45000, 60000, 55000, 70000, 95000, 90000, 85000, 92000]
        }
    },
    'cyberpunk-2077': {
        title: 'Cyberpunk 2077',
        developer: 'CD Projekt Red',
        publisher: 'CD Projekt Red',
        releaseDate: '10/12/2020',
        genre: 'RPG de Ação',
        rating: '7.2 (Lançamento) / 8.9 (Atual)',
        imageUrl: 'https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077UltimateEdition_CDPROJEKTRED_Editions_S1_2560x1440-b8bfbed19257188c717a26ee5bf79b41',
        synopsis: 'Cyberpunk 2077 é uma história de ação e aventura em mundo aberto ambientada em Night City, uma megalópole obcecada por poder, glamour e modificações corporais. Você joga como V, um mercenário fora da lei.',
        success: [
            'Mundo e direção de arte incrivelmente detalhados.',
            'Narrativa envolvente (após correções).',
            'Grande reviravolta com a expansão "Phantom Liberty" e o Update 2.0, que salvaram o jogo.'
        ],
        failure: [
            'Lançamento desastroso, cheio de bugs e problemas de performance, especialmente em consoles.',
            'Marketing enganoso e promessas não cumpridas no lançamento.',
            'Quebra de confiança massiva com a comunidade.',
            'IA e físicas do jogo muito abaixo do esperado inicialmente.'
        ],
        popularity: {
            labels: ['Dez 2020 (Lanç.)', 'Jan 2021', 'Fev 2021', '2022', 'Set 2023 (Update 2.0)'],
            data: [1051000, 250000, 80000, 50000, 270000]
        }
    },
    'marvels-avengers': {
        title: "Marvel's Avengers",
        developer: 'Crystal Dynamics',
        publisher: 'Square Enix',
        releaseDate: '04/09/2020',
        genre: 'Ação, Loot',
        rating: '6.1',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcOnevk3Z1mhWKMQBbCCsW1DJ_PNWthemxHA&s',
        synopsis: 'Marvel\'s Avengers é um jogo épico de ação e aventura em terceira pessoa que combina uma história cinematográfica original com jogabilidade individual e cooperativa.',
        success: [
            'Campanha single-player inicial foi bem recebida.',
            'Representação fiel e carismática dos personagens principais.',
            'Combate divertido em sua essência.'
        ],
        failure: [
            'Modelo "Jogo como Serviço" (GaaS) falho e mal implementado.',
            'Falta crônica de conteúdo endgame interessante.',
            'Monetização agressiva e cosméticos caros.',
            'Bugs persistentes e matchmaking problemático.',
            'Encerramento do suporte e remoção das lojas em 2023.'
        ],
        popularity: {
            labels: ['Set 2020 (Lanç.)', 'Out 2020', 'Dez 2020', '2021', '2022', '2023 (Fim)'],
            data: [31000, 9000, 5000, 2000, 1000, 0]
        }
    },
    'clash-royale': {
        title: "Clash Royale",
        developer: 'Supercell',
        publisher: 'Supercell',
        releaseDate: '02/03/2016',
        genre: 'Estratégia em Tempo Real, Tower Defense',
        rating: '9.2',
        imageUrl: 'https://images2.alphacoders.com/855/thumb-1920-855974.jpg',
        synopsis: 'Clash Royale é um jogo multijogador em tempo real estrelado pelos Royales, seus personagens favoritos do Clash e muito mais. Colete e atualize dezenas de cartas com as tropas, feitiços e defesas que você conhece e ama, além dos Royales: Príncipes, Cavaleiros, Bebês Dragões e muito mais.',
        success: [
            'Gameplay viciante com partidas rápidas de 3 minutos.',
            'Mistura perfeita de estratégia (deck building) e ação rápida.',
            'Atualizações constantes com novas cartas e balanceamento.',
            'Forte apelo competitivo e cenário de e-sports.',
            'Uso brilhante da propriedade intelectual de "Clash of Clans".'
        ],
        failure: [
            'Modelo de progressão criticado como "Pay-to-Win" (Pagar para Vencer).',
            'Matchmaking pode ser frustrante contra oponentes com cartas de nível superior.',
            'Algumas atualizações (como a "Guerra de Clãs 2") foram mal recebidas pela comunidade.'
        ],
        popularity: {
            labels: ['2016 (Lanç.)', '2017 (Pico)', '2018', '2019', '2020 (CW2)', '2021', '2022', '2023 (Nível 15)'],
            data: [100000, 150000, 120000, 110000, 90000, 100000, 95000, 115000]
        }
    },
    // NOVO JOGO ADICIONADO PARA MAIS GÊNEROS
    'botw': {
        title: 'Breath of the Wild',
        developer: 'Nintendo EPD',
        publisher: 'Nintendo',
        releaseDate: '03/03/2017',
        genre: 'Aventura, RPG de Ação',
        rating: '9.7',
        imageUrl: 'https://theinnergamer.net/wp-content/uploads/2017/03/breath-of-the-wild-header.jpg',
        synopsis: 'Esqueça tudo o que sabe sobre os jogos The Legend of Zelda. Entre em um mundo de descoberta, exploração e aventura em The Legend of Zelda: Breath of the Wild, um novo jogo que quebra barreiras na aclamada série.',
        success: [
            'Mundo aberto massivo e que recompensa a exploração.',
            'Física e sistemas de jogo emergentes (química, clima).',
            'Recepção crítica universalmente aclamada.',
            'Revolucionou o gênero de mundo aberto.'
        ],
        failure: [
            'Problemas de performance no lançamento (especialmente no Switch).',
            'Durabilidade das armas é um ponto de discórdia.'
        ],
        popularity: {
            labels: ['2017 (Lanç.)', '2018', '2019', '2020', '2021', '2022', '2023'],
            data: [150000, 100000, 90000, 110000, 130000, 120000, 115000]
        }
    },
    // NOVO JOGO DE LUTA
    'street-fighter-6': {
        title: 'Street Fighter 6',
        developer: 'Capcom',
        publisher: 'Capcom',
        releaseDate: '02/06/2023',
        genre: 'Luta',
        rating: '9.2',
        imageUrl: 'https://salaodejogos.net/wp-content/uploads/2023/06/SF6-Official-Key-Art.jpg',
        synopsis: 'Street Fighter 6 é a mais nova entrada na icônica série de jogos de luta, trazendo gráficos impressionantes, novos modos de jogo inovadores e mecânicas de combate modernizadas para veteranos e novatos.',
        success: [
            'Gráficos estilizados e modernos.',
            'Excelente netcode para partidas online.',
            'Modo "World Tour" inovador para um jogo de luta.',
            'Mecânicas de "Drive System" adicionam profundidade estratégica.'
        ],
        failure: [
            'Monetização de passes de batalha pode ser controversa.',
            'Curva de aprendizado inicial para novos jogadores.'
        ],
        popularity: {
            labels: ['Jun 2023 (Lanç.)', 'Jul 2023', 'Ago 2023', 'Set 2023'],
            data: [70500, 45000, 30000, 25000]
        }
    },
    // NOVO JOGO DE TERROR
    're4-remake': {
        title: 'Resident Evil 4 (Remake)',
        developer: 'Capcom',
        publisher: 'Capcom',
        releaseDate: '24/03/2023',
        genre: 'Terror, Ação', // Gênero simplificado para o filtro
        rating: '9.8',
        imageUrl: 'https://images.alphacoders.com/130/1308576.jpeg',
        synopsis: 'Seis anos se passaram desde o desastre biológico em Raccoon City. Leon S. Kennedy, um dos sobreviventes, foi recrutado como agente subordinado ao presidente. Com a experiência de múltiplas missões, Leon é enviado para resgatar a filha sequestrada do presidente dos Estados Unidos.',
        success: [
            'Remake fiel que moderniza um clássico sem perder a essência.',
            'Gráficos e atmosfera de terror incrivelmente imersivos.',
            'Jogabilidade de ação refinada e satisfatória.',
            'Alta rejogabilidade com novos modos e desafios.'
        ],
        failure: [
            'Alguns cortes de conteúdo do jogo original (restaurados depois em DLCs).',
            'Performance em alguns consoles no lançamento.'
        ],
        popularity: {
            labels: ['Mar 2023 (Lanç.)', 'Abr 2023', 'Mai 2023', 'Jun 2023'],
            data: [168000, 90000, 60000, 45000]
        }
    }
};

// --- VARIÁVEIS GLOBAIS ---
let popularityChartInstance = null; // Para guardar a instância do gráfico

// --- FUNÇÕES DE NAVEGAÇÃO ---
function showPage(pageId) {
    // Esconde todas as páginas
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    // Mostra a página desejada
    const newPage = document.getElementById(pageId);
    if (newPage) {
        newPage.classList.add('active');
    }
    
    // Rola para o topo
    window.scrollTo(0, 0);

    // Se for a página de gêneros, chama a função que está em genres.js
    if (pageId === 'page-genres' && typeof renderGenresPage === 'function') {
        renderGenresPage();
    }
}

// Reseta a home page para a visão padrão
function showPageAndResetHome() {
    // Reseta o título
    const homeTitle = document.getElementById('home-title');
    if (homeTitle) {
        homeTitle.innerText = 'Jogos em Destaque';
    }
    // Limpa a busca
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    
    // --- CONFIGURAÇÃO DOS DESTAQUES ---
    // Escolha aqui quais jogos (IDs) aparecem na tela inicial.
    // Os IDs devem ser iguais às chaves do objeto 'gameDatabase' lá em cima.
    const highlights = [
        'street-fighter-6', 
        'cyberpunk-2077', 
        'clash-royale', 
        're4-remake'
    ];
    
    // Renderiza apenas os destaques escolhidos
    renderGameList(highlights);
    
    // Mostra a página inicial
    showPage('page-home');
}


// --- FUNÇÕES DE RENDERIZAÇÃO ---

// Renderiza a lista de jogos na home
function renderGameList(gameIds) {
    const gameListContainer = document.getElementById('game-list');
    if (!gameListContainer) return;
    gameListContainer.innerHTML = ''; // Limpa a lista

    if (gameIds.length === 0) {
        gameListContainer.innerHTML = '<p class="text-gray-400 col-span-full">Nenhum jogo encontrado para este filtro.</p>';
        return;
    }

    gameIds.forEach(gameId => {
        const game = gameDatabase[gameId];
        if (!game) return;

        const card = `
            <div class="game-card bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:bg-gray-700 cursor-pointer" 
                 data-title="${game.title.toLowerCase()}"
                 onclick="showGameDetail('${gameId}')">
                <img src="${game.imageUrl}" alt="Capa do ${game.title}" class="w-full h-64 object-cover">
                <div class="p-4">
                    <h3 class="text-xl font-semibold mb-1">${game.title}</h3>
                    <p class="text-sm text-gray-400">${game.developer}</p>
                </div>
            </div>
        `;
        gameListContainer.innerHTML += card;
    });
}

// Mostra a página de detalhes de um jogo específico
function showGameDetail(gameId) {
    const game = gameDatabase[gameId];
    if (!game) return;

    // Preenche informações básicas
    document.getElementById('game-detail-image').src = game.imageUrl;
    document.getElementById('game-detail-title').innerText = game.title;
    document.getElementById('game-detail-dev').innerText = `Por ${game.developer}`;
    document.getElementById('game-detail-rating').innerText = game.rating;
    document.getElementById('game-detail-publisher').innerText = game.publisher;
    document.getElementById('game-detail-release').innerText = game.releaseDate;
    document.getElementById('game-detail-genre').innerText = game.genre;
    document.getElementById('game-detail-synopsis').innerText = game.synopsis;

    // Preenche lista de SUCESSO
    const successList = document.getElementById('game-detail-success');
    successList.innerHTML = '';
    game.success.forEach(item => {
        successList.innerHTML += `
            <li class="flex items-start space-x-2">
                <svg class="icon-check flex-shrink-0 text-green-400 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span class="text-gray-300">${item}</span>
            </li>
        `;
    });

    // Preenche lista de FRACASSO
    const failureList = document.getElementById('game-detail-failure');
    failureList.innerHTML = '';
    game.failure.forEach(item => {
        failureList.innerHTML += `
            <li class="flex items-start space-x-2">
                <svg class="icon-x flex-shrink-0 text-red-400 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span class="text-gray-300">${item}</span>
            </li>
        `;
    });

    // Preenche TABELA de popularidade
    const tableBody = document.getElementById('popularity-table-body');
    tableBody.innerHTML = '';
    game.popularity.labels.forEach((label, index) => {
        const data = game.popularity.data[index].toLocaleString('pt-BR');
        tableBody.innerHTML += `
            <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">${label}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">${data}</td>
            </tr>
        `;
    });

    // Renderiza o GRÁFICO
    if (typeof Chart !== 'undefined') {
        renderPopularityChart(game.popularity);
    } else {
        console.error('Chart.js não foi carregado.');
    }

    // Mostra a página de detalhes
    showPage('page-detail');
}

// Renderiza o gráfico de popularidade
function renderPopularityChart(popularityData) {
    const ctx = document.getElementById('popularityChart').getContext('2d');
    
    if (popularityChartInstance) {
        popularityChartInstance.destroy();
    }

    popularityChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: popularityData.labels,
            datasets: [{
                label: 'Pico de Jogadores (Estimado)',
                data: popularityData.data,
                backgroundColor: 'rgba(59, 130, 246, 0.2)',
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 2,
                tension: 0.1,
                pointBackgroundColor: 'rgba(59, 130, 246, 1)'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { color: '#d1d5db' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                },
                x: {
                    ticks: { color: '#d1d5db' },
                    grid: { color: 'rgba(255, 255, 255, 0.1)' }
                }
            },
            plugins: {
                legend: {
                    labels: { color: '#d1d5db' }
                }
            }
        }
    });
}

// --- FUNÇÃO DE BUSCA (MODIFICADA) ---
// Agora busca em TODO o banco de dados, não só nos elementos visíveis
function filterGames() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    // Se a busca estiver vazia, restaura os 4 destaques iniciais
    if (!query) {
        showPageAndResetHome();
        return;
    }

    // Filtra diretamente do objeto de dados
    const allGameIds = Object.keys(gameDatabase);
    const filteredIds = allGameIds.filter(id => {
        const game = gameDatabase[id];
        return game.title.toLowerCase().includes(query);
    });

    // Renderiza os resultados (pode ser mais de 4, o que é o esperado numa busca)
    renderGameList(filteredIds);
    
    // Garante que a página home está visível para mostrar os resultados
    const homePage = document.getElementById('page-home');
    if (!homePage.classList.contains('active')) {
        showPage('page-home');
    }

    // Opcional: Atualiza o título para dar feedback
    const homeTitle = document.getElementById('home-title');
    if (homeTitle) {
        homeTitle.innerText = `Resultados para "${query}"`;
    }
}

// --- FUNÇÕES DO MENU MOBILE ---
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const iconHamburger = document.getElementById('icon-hamburger');
    const iconX = document.getElementById('icon-x');

    if (menu && iconHamburger && iconX) {
        menu.classList.toggle('hidden');
        iconHamburger.classList.toggle('hidden');
        iconHamburger.classList.toggle('block');
        iconX.classList.toggle('hidden');
        iconX.classList.toggle('block');
    }
}

function handleMobileLinkClick(navigationFunction) {
    if (typeof navigationFunction === 'function') {
        navigationFunction();
    }
    toggleMobileMenu(); 
}

// --- INICIALIZAÇÃO ---
document.addEventListener('DOMContentLoaded', () => {
    // Carrega os destaques iniciais
    showPageAndResetHome();
});