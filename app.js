const previousSection = () => {
    const current = cards[currentCard];
    const previous = cards[currentCard - 1];
    validateButtons();

    if (!previous) {
        return;
    }

    current.classList.toggle('disabled', true);
    previous.classList.toggle('disabled', false);

    currentCard--;
    validateButtons();
}

const nextSection = () => {
    const current = cards[currentCard];
    const next = cards[currentCard + 1];
    validateButtons();


    if (!next) {
        return;
    }

    current.classList.toggle('disabled', true);
    next.classList.toggle('disabled', false);

    currentCard++;
    validateButtons();
}

const validateButtons = () => {
    if (cards[currentCard + 1]) {
        btnDown.style.display = 'unset';
    } else {
        btnDown.style.display = 'none';
    }

    if (cards[currentCard - 1]) {
        btnUp.style.display = 'unset';
    } else {
        btnUp.style.display = 'none';
    }
}


const cards = Array.from(document.querySelectorAll('.header-section'))
cards.slice(1).forEach(x => x.classList.add('disabled'))
let currentCard = 0;

const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');

btnUp.addEventListener('click', () => previousSection());
btnDown.addEventListener('click', () => nextSection());

validateButtons();
