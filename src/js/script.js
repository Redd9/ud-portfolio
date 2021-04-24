const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    close = document.querySelector('.menu__close');
    overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

close.addEventListener('click', () => {
    menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counter = document.querySelectorAll('.counter'),
    lines = document.querySelectorAll('.skills__ratings-line span')

counter.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
}) 