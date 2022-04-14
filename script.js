const { body } = document;
const hamburger = document.querySelector('.navbar__hamburger');
const menu = document.querySelector('.navbar__links');
const closeMenu = document.querySelector('.navbar__close');
const menuLinks = document.querySelectorAll('.navbar__link');

const toggleMenu = () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  closeMenu.classList.toggle('active');
  body.classList.toggle('noScroll');
};

const linkClicked = () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
  closeMenu.classList.remove('active');
  body.classList.remove('noScroll');
};

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);
menuLinks.forEach((link) => link.addEventListener('click', linkClicked));
