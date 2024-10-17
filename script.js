const newReleases = [
    { id: 1, title: "Nikoderiko: The Magical World", description: "Įsigyk dabar!" , image: "releases/nikoderiko.webp" },
    { id: 2, title: "Neva", description: "Įsigyk dabar!", image: "releases/neva.webp" },
    { id: 3, title: "9 R.I.P.", description: "Įsigyk dabar!", image: "releases/9rip.webp" },
    { id: 4, title: "New World: Aeternum", description: "Įsigyk dabar!", image: "releases/newworld.webp" },
    { id: 5, title: "Just Dance 2025 Edition", description: "Įsigyk dabar!", image: "releases/justdance.webp" },
    { id: 6, title: "Undisputed", description: "Įsigyk dabar!", image: "releases/undisputed.webp" },
];

const upcomingGames = [
    { id: 7, title: "Super Mario Party Jamboree", description: "Išleidimo data: 2024-10-17", image: "upcoming/mario.webp" },
    { id: 8, title: "Call of Duty: Black Ops 6", description: "Išleidimo data: 2024-10-25", image: "upcoming/callofduty.webp" },
    { id: 9, title: "Sonic x Shadow Generations", description: "Išleidimo data: 2024-10-25", image: "upcoming/sonic.webp" },
];

function generateGameCards(gameList, sectionId) {
    const section = document.getElementById(sectionId);

    gameList.forEach(game => {
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

        const buyButton = document.createElement('button');

        if (game.id >= 7 && game.id <= 9) {
            buyButton.textContent = "Išankstinis užsakymas";
            buyButton.addEventListener('click', () => {
                alert(`Žaidimas "${game.title}" rezervuotas išankstiniam užsakymui!`);
            });
        } else {
            buyButton.textContent = "Pirkti";
            buyButton.addEventListener('click', () => {
                alert(`Žaidimas "${game.title}" įtrauktas į krepšelį!`);
            });
        }

        gameCard.appendChild(buyButton);
        section.appendChild(gameCard);
    });
}

window.onload = function() {
    generateGameCards(newReleases, 'new-releases');
    generateGameCards(upcomingGames, 'upcoming-games');
};
