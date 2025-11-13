// --- FUNÇÕES DE GÊNERO ---
// Este arquivo depende de app.js ter sido carregado primeiro,
// pois usa gameDatabase, renderGameList, e showPage.

// Renderiza os cards na página de Gêneros
function renderGenresPage() {
    const genreListContainer = document.getElementById('genre-list');
    if (!genreListContainer) return;
    
    genreListContainer.innerHTML = ''; // Limpa
    // Define os gêneros que queremos mostrar
    // ATUALIZADO: Adicionado 'Luta' e 'Terror'
    const genres = ['RPG', 'Ação', 'Aventura', 'Simulação', 'Estratégia', 'Luta', 'Terror'];

    genres.forEach(genre => {
        // Encontra a imagem do primeiro jogo que corresponde ao gênero
        const imageUrl = findGameImageByGenre(genre);
        
        const card = `
            <div class="h-48 rounded-lg shadow-lg overflow-hidden relative cursor-pointer group" 
                 onclick="showGamesByGenre('${genre}')">
                <!-- Imagem de fundo -->
                <img src="${imageUrl}" alt="${genre}" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
                <!-- Overlay escuro -->
                <div class="absolute inset-0 bg-black bg-opacity-60 group-hover:bg-opacity-50 transition-all duration-300"></div>
                <!-- Título do Gênero -->
                <h3 class="absolute bottom-4 left-4 text-3xl font-bold text-white">${genre}</h3>
            </div>
        `;
        genreListContainer.innerHTML += card;
    });
}

// Encontra a URL da imagem do primeiro jogo que corresponde a um gênero
function findGameImageByGenre(genreName) {
    const lowerGenre = genreName.toLowerCase();
    // Itera por todo o banco de dados (acessando a variável global de app.js)
    for (const gameId in gameDatabase) {
        const game = gameDatabase[gameId];
        // Se o campo 'genre' do jogo (em minúsculas) incluir o nome do gênero (em minúsculas)
        if (game.genre.toLowerCase().includes(lowerGenre)) {
            return game.imageUrl; // Retorna a imagem e para
        }
    }
    // Se nenhum jogo for encontrado, retorna uma imagem padrão
    return 'https://placehold.co/600x400/4a5568/ffffff?text=Gênero';
}

// Filtra e mostra os jogos de um gênero específico na página inicial
function showGamesByGenre(genreName) {
    const lowerGenre = genreName.toLowerCase();
    
    // Filtra os IDs dos jogos (acessando a variável global de app.js)
    const filteredGameIds = Object.keys(gameDatabase).filter(gameId => {
        const game = gameDatabase[gameId];
        return game.genre.toLowerCase().includes(lowerGenre);
    });
    
    // Renderiza a lista filtrada (usando a função global de app.js)
    renderGameList(filteredGameIds);
    // Mostra a página inicial (usando a função global de app.js)
    showPage('page-home');
    
    // Atualiza o título da home para refletir o filtro
    const homeTitle = document.getElementById('home-title');
    if (homeTitle) {
        homeTitle.innerText = `Jogos de ${genreName}`;
    }
}