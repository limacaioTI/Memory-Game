const grid = document.querySelector('.grid');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
];

const createElement = (tag, className) =>{
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

const createCard = (character) =>{
    const card = createElement('div', 'card'); //criar uma tag(para nao criar no proprio html)
    const front = createElement('div', 'face front');
    const back = createElement('div', 'face back');

    front.style.backgroundImage = `url('../images/${character}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

const loadGame = () =>{

    const duplicateCharacters = [ ... characters, ... characters ];

    duplicateCharacters.forEach((character)=>{
        const card = createCard(character);
        grid.appendChild(card);
    });
}
loadGame();