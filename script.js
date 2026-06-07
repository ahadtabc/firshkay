let menu = document.querySelector('nav ul');
let openBtn = document.querySelector('.menu-open');
let closeBtn = document.querySelector('.menu-close');

openBtn.addEventListener('click', () => {
    menu.classList.add('open')
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('open')
})