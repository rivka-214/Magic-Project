const images = ["🍉", "🍒", "🍎", "🍊", "🍋", "🍇", "🍓", "🍍"];
const gameBoard = document.querySelector('.game-board');
let flippedCards = [];
let matchedCards = [];
let canFlip = true;

const createCard = (image) => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card', 'hidden');
    cardElement.style.backgroundImage = `url('images/${image}')`;
    gameBoard.appendChild(cardElement);

    cardElement.addEventListener('click', () => {
        if (!canFlip || flippedCards.length === 2 || matchedCards.includes(cardElement)) {
            return;
        }

        cardElement.classList.remove('hidden');
        flippedCards.push(cardElement);

        if (flippedCards.length === 2) {
            canFlip = false;
            setTimeout(checkMatch, 1000);
        }
    });
};

const checkMatch = () => {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.style.backgroundImage === secondCard.style.backgroundImage) {
        matchedCards.push(firstCard, secondCard);
        if (matchedCards.length === images.length * 2) {
            alert('Congratulations! You have matched all the cards.');
        }
    } else {
        setTimeout(() => {
            flippedCards.forEach(card => {
                card.classList.add('hidden');
            });
            canFlip = true;
        }, 1000);
    }

    flippedCards = [];
};

// Duplicate images for pairs
const allImages = [...images, ...images];
allImages.sort(() => 0.5 - Math.random());

// Create card elements for the game board
const createGameBoard = () => {
    gameBoard.innerHTML = '';
    allImages.forEach(image => {
        createCard(image);
    });
};


const startGameButton = document.getElementById('start-game');
startGameButton.addEventListener('click', () => {
    startGameButton.disabled = true;
    createGameBoard();
});

// Reset the game when all cards are matched
const resetGame = () => {
    matchedCards = [];
    startGameButton.disabled = false;
};
// Event listener for the Reset Game button
const resetGameButton = document.getElementById('reset-game');
resetGameButton.addEventListener('click', () => {
    gameBoard.innerHTML = '';
    resetGame();
});

// Initialize the game
resetGame();
