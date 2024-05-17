/**
 * @file
 * Script dédié à l'ouverture et à la fermeture du menu pour les versions tablette et mobile.
 */

const menu = document.querySelector('#menu');
const menuTrigger = document.querySelector('#menuTrigger');
const menuTriggerIcons = menuTrigger.querySelectorAll('.menu__icon');

/**
 * Bascule entre l'ouverture et la fermeture du menu.
 */
const toggleMenu = () => {
    menu.style.display === 'block' ? closeMenu() : openMenu();
};

/**
 * Ouvre le menu.
 */
const openMenu = () => {
    menu.style.display = 'block';
    toggleMenuIcons(true);
};

/**
 * Ferme le menu.
 */
const closeMenu = () => {
    menu.style.display = 'none';
    toggleMenuIcons(false);
};

/**
 * Bascule les icônes du menu burger.
 * @param {boolean} isOpen - Indique si le menu est ouvert.
 */
const toggleMenuIcons = (isOpen) => {
    menuTriggerIcons[0].classList.toggle('icon__hidden', isOpen);
    menuTriggerIcons[1].classList.toggle('icon__hidden', !isOpen);
};

/**
 * Ferme le menu si clique en dehors.
 * @param {Event} event - L'événement de clic
 */
const closeMenuOnClickOutside = (event) => {
    if (!menu.contains(event.target) && !menuTrigger.contains(event.target)) {
        closeMenu();
    }
};

/**
 * Ferme le menu lors du redimensionnement de la fenêtre.
 */
const closeMenuOnResize = () => {
    if (window.innerWidth > 1050) {
        closeMenu();
    }
};

menuTrigger.addEventListener('click', toggleMenu);
window.addEventListener('click', closeMenuOnClickOutside);
window.addEventListener('resize', closeMenuOnResize);
