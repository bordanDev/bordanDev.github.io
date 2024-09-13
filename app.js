const cards = Array.from(document.querySelectorAll('.header-section'))
cards.slice(1).forEach(x => x.classList.add('disabled'))
let currentCard = 0;

const btnUp = document.querySelector('#up');
const btnDown = document.querySelector('#down');


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
        btnUp.style.bottom = '140px';
    } else {
        btnDown.style.display = 'unset';
        btnUp.style.bottom = '72px';
        btnUp.classList.remove('up-downer');
    }

    if (cards[currentCard - 1]) {
        btnUp.style.display = 'unset';
    } else {
        btnUp.classList.add('up-downer');
        btnUp.style.bottom = '72px';

    }
}

const updateScrollbar = () => {
    scrollItem.forEach((item, index) => {
        item.classList.toggle('active', index === currentCard);
    });

    // if (window.innerWidth <= 479) {
    //     if (cards[2].classList[2] !== 'disabled') {
    //         scrollItem[2].innerHTML = '<div class="sub-active"></div>'
    //         if (scrollItem[2].innerHTML === '<div class="scroll sub-active"></div>') {
    //             const innerSubScroll = scrollItem[2].innerHTML
    //             innerSubScroll.style.height = '50%'
    //             innerSubScroll.style.backgroundcolor = '$gray-900 !important'
    //             innerSubScroll.style.borderRadius = '20px'
    //         }
    //     }
    // }
}


const listOfWorkpattern = Array.from(document.querySelectorAll('.workpattern-text'))


const firstWorkpattern = listOfWorkpattern.slice(0, 4)

const secondWorkpattern = listOfWorkpattern.slice(4, 8)

// secondWorkpattern.forEach((element) => element.style.display = 'none')

secondWorkpattern.forEach((element) => element)

listOfWorkpattern.forEach(x => x.innerHTML)

function menuOpener() {
    if (mobileMenu.style.left == '-100vw') {
        mobileMenu.style.left = '0vw'
        cards.slice(0).forEach(x => x.style.pointerEvents = 'none')
        return
    }

    mobileMenu.style.left = '-100vw'
    cards.slice(0).forEach(x => x.style.pointerEvents = 'auto')
}

const scrollbar = document.querySelector('.scrollbar');

const scrollItem = Array.from(document.querySelectorAll('.scroll'))

btnUp.addEventListener('click', () => previousSection());
btnDown.addEventListener('click', () => nextSection());


const handleScroll = (event) => {
    if (event.deltaY < 0) {
        previousSection();
    } else if (event.deltaY > 0) {
        nextSection();
    }
};

document.addEventListener('wheel', handleScroll);

validateButtons();


const btnMenu = document.querySelector('.header-btn-mobile-menu')
const mobileMenu = document.querySelector('.header-mobile-menu')

btnMenu.addEventListener('click', () => menuOpener())


// const listWorkpattern = document.querySelector('workpattern-list')
// const itemWorkpattern = document.querySelectorAll('workpattern-text')

// const points = Array.from(itemWorkpattern)

// points.forEach(x => x.classList.add('disabled'))

// itemWorkpattern.forEach(x => )


// scrollItem[2].innerHTML = '<div class="sub-active"></div>'
// const innerBlock = scrollItem[2].parentElement
// scrollItem[2].style.backgroundColor = '#EBEBEB !important'
// document.querySelector('sub-active').