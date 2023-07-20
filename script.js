const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.navigation-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

