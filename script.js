const cards = [
    {
        "color": "color-2",
        "number": 1,
    },
    {
        "color": "color-1",
        "number": 2,
    },
    {
        "color": "color-4",
        "number": 3,
    },
    {
        "color": "color-1",
        "number": 4,
    },
    {
        "color": "color-4",
        "number": 5,
    },
    {
        "color": "color-3",
        "number": 6,
    },
    {
        "color": "color-3",
        "number": 7,
    },
    {
        "color": "color-2",
        "number": 8,
    },
    {
        "color": "color-4",
        "number": 9,
    },
]

const authorName = 'Elder Santos'; 

init();

function init() {
    document.getElementById('author-name').innerHTML = authorName;
    generateBoard();
}

function sort() {
    cards.sort(function(cardA, cardB) {
        if (cardA.number < cardB.number) {
          return -1;
        }
        if (cardA.number > cardB.number) {
          return 1;
        }
    });
    generateBoard();
}

function shuffle() {
    cards.sort(() => Math.random() - 0.5);
    generateBoard();
}

function generateBoard() {
    let container = document.getElementById('card-board');
    container.innerHTML = '';

    cards.forEach(function (card) {
        let cardButton = document.createElement('button');
        container.appendChild(cardButton);
        cardButton.innerHTML += card.number;
        cardButton.classList.add(card.color)
    });
}

