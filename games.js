const games = [
    { id: 1, title: "Cyberpunk 2077", description: "Futuristinis atviro pasaulio žaidimas.", image: "img/cyberpunk.jpg", rating: 0 },
    { id: 2, title: "The Witcher 3", description: "Populiarus veiksmo RPG žaidimas.", image: "img/thewitcher.jpg", rating: 0 },
    { id: 3, title: "Minecraft", description: "Kūrybingumo ir išgyvenimo žaidimas.", image: "img/minecraft.jpg", rating: 0 },
    { id: 4, title: "Counter-Strike 2 (CS2)", description: "Naujausia CS serijos versija su moderniais atnaujinimais.", image: "img/csgo.png", rating: 0 },
    { id: 5, title: "League of Legends", description: "Vienas populiariausių MOBA žanro žaidimų pasaulyje.", image: "img/lol.jpg", rating: 0 },
    { id: 6, title: "Old School RuneScape (OSRS)", description: "Klasikinis MMORPG su nostalgija senosios versijos žaidėjams.", image: "img/osrs.jpg", rating: 0 },
    { id: 7, title: "Fortnite", description: "Battle Royale žaidimas su statybos ir kova elementais.", image: "img/fortnite.jpg", rating: 0 },
    { id: 8, title: "Dota 2", description: "Populiarus MOBA žaidimas, kuriame dvi komandos kovoja dėl pergalės.", image: "img/dota.png", rating: 0 },
    { id: 9, title: "Lost Ark", description: "Veiksmo RPG žaidimas su dideliu pasauliu ir daugybe veiksmų.", image: "img/lostark.jpg", rating: 0 },

];

function generateGameCards() {
    const gameList = document.getElementById('game-list');

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');

        const gameImage = document.createElement('img');
        gameImage.src = game.image;
        gameCard.appendChild(gameImage);

        const gameTitle = document.createElement('h3');
        gameTitle.textContent = game.title;
        gameCard.appendChild(gameTitle);

        const gameDescription = document.createElement('p');
        gameDescription.textContent = game.description;
        gameCard.appendChild(gameDescription);

        const ratingDiv = document.createElement('div');
        ratingDiv.classList.add('rating');
        ratingDiv.textContent = `Įvertinimas: ${getRating(game.id)} žvaigždės`;
        gameCard.appendChild(ratingDiv);

        const rateButton = document.createElement('button');
        rateButton.textContent = "Įvertinti";
        rateButton.addEventListener('click', () => {
            rateGame(game.id);
        });
        gameCard.appendChild(rateButton);

        gameList.appendChild(gameCard);
    });
}

function getRating(gameId) {
    return localStorage.getItem(`rating-${gameId}`) || 0;
}

function rateGame(gameId) {
    const currentRating = getRating(gameId);
    const newRating = prompt(`Įveskite įvertinimą (1-5) šiam žaidimui. Dabartinis įvertinimas: ${currentRating}`);
    if (newRating >= 1 && newRating <= 5) {
        localStorage.setItem(`rating-${gameId}`, newRating);
        alert("Įvertinimas atnaujintas!");
        location.reload(); 
    } else {
        alert("Prašome įvesti įvertinimą tarp 1 ir 5.");
    }
}

window.onload = generateGameCards;
