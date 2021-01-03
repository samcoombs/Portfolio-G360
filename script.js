const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal')
const html = document.querySelector('html');

const navAbout = document.querySelector('.navigation__link--about');
const navDestinations = document.querySelector('.navigation__link--destinations')
const secAbout = document.getElementById('about');
const secDestinations = document.getElementById('destinations')

const burgerButton = document.querySelector('.burger-nav__button');
const burgerIcon = document.querySelector('.scroll');
const header = document.querySelector('.header');


// OFFERS MODAL WINDOWS
const closeModal = function(e) {
    e.preventDefault();
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    html.classList.remove('static');
}
const openModal = function(e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    html.classList.add('static');
}

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function(e) {

    if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// SMOOTH SCROLLING

navAbout.addEventListener('click', function(e) {
    e.preventDefault();

    secAbout.scrollIntoView({ behavior: 'smooth' })
});

navDestinations.addEventListener('click', function(e) {
    e.preventDefault() ;
    secDestinations.scrollIntoView({ behavior: 'smooth'})
});

// BURGER NAV CHANGE

// document.addEventListener('scroll', function() {
// burgerButton.style.backgroundColor = "green";
// })

const burgerHeight = burgerButton.getBoundingClientRect().height;


const changeBurger = function (entries) {
    const [entry] = entries;
    
    if(!entry.isIntersecting) {
        // burgerButton.style.backgroundColor = 'white';
        burgerButton.classList.add('btn-scroll');
        burgerIcon.classList.add('scroll');
    }
    else {
        // burgerButton.style.backgroundColor = 'transparent';
        burgerButton.classList.remove('btn-scroll');
        burgerIcon.classList.remove('scroll')
    }
}

const headerObserver = new IntersectionObserver(changeBurger, {
    root: null,
    threshold: 0,
    rootMargin: `-${burgerHeight}px`
});
headerObserver.observe(header);






