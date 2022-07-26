"use strict"

const headerBurger = document.querySelector(".header__burger");
const body = document.querySelector("body");
const headerContent = document.querySelector(".header__content");
const mobMenuClose = document.querySelector(".mob-menu-close");

headerBurger.addEventListener('click', () => {
	if (window.innerWidth < 992) {
		body.classList.add('lock');
		headerContent.classList.add('open');
	}
})
mobMenuClose.addEventListener('click', () => {
	body.classList.remove('lock');
	headerContent.classList.remove('open');
})