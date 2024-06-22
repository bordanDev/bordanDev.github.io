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
    updateScrollbar();
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
    updateScrollbar();
    validateButtons();
}

const validateButtons = () => {
    if (cards[currentCard + 1]) {
        btnDown.style.display = 'unset';
        btnUp.style.bottom = '161px';
    } else {
        btnDown.style.display = 'none';
        btnUp.style.bottom = '72px';
    }

    if (cards[currentCard - 1]) {
        btnUp.style.display = 'unset';
    } else {
        btnUp.style.display = 'none';

    }
}

const updateScrollbar = () => {
    scrollItem.forEach((item, index) => {
        item.classList.toggle('active', index === currentCard);
    });
}

const cards = Array.from(document.querySelectorAll('.header-section'))
cards.slice(1).forEach(x => x.classList.add('disabled'))
let currentCard = 0;

const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');

const scrollbar = document.querySelector('.scrollbar');


const scrollItem = Array.from(document.querySelectorAll('.scroll'))
// scrollItem.slice(1).forEach(x => x.classList.add(''))



btnUp.addEventListener('click', () => previousSection());
btnDown.addEventListener('click', () => nextSection());

validateButtons();


