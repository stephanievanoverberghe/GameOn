/**
 * @file
 * Script dédié à l'ouverture et à la fermeture du menu pour les versions tablette et mobile.
 * 
 * Ce script gère l'affichage et le masquage du menu lorsque l'utilisateur clique sur le bouton du menu (burger icon).
 * Il inclut également une logique pour fermer le menu lorsqu'un clic est détecté en dehors du menu, et lorsque la fenêtre est redimensionnée au-delà d'une certaine largeur.
 * 
 * @version 1.0.0
 * 
 * @see style.css
 * @see index.html
 * 
 * @autor Stéphanie Vanoverberghe
 */

const menu = document.querySelector('#menu');
const menuTrigger = document.querySelector('#menuTrigger');
const menuTriggerIcons = menuTrigger.querySelectorAll('.menu__icon');

/**
 * Bascule entre l'ouverture et la fermeture du menu.
 * @returns {void}
 */
const toggleMenu = () => {
    menu.style.display === 'block' ? closeMenu() : openMenu();
};

/**
 * Ouvre le menu en cliquant sur l'icône du burger menu.
 * @returns {void}
 */
const openMenu = () => {
    menu.style.display = 'block';
    toggleMenuIcons(true);
};

/**
 * Ferme le menu en cliquant sur l'icône du burger menu.
 * @returns {void}
 */
const closeMenu = () => {
    menu.style.display = 'none';
    toggleMenuIcons(false);
};

/**
 * Bascule les icônes du menu burger entre l'ouverture et la fermeture.
 * @param {boolean} isOpen - Indique si le menu est ouvert ou non.
 * @returns {void}
 */
const toggleMenuIcons = (isOpen) => {
    menuTriggerIcons[0].classList.toggle('icon__hidden', isOpen);
    menuTriggerIcons[1].classList.toggle('icon__hidden', !isOpen);
};

/**
 * Ferme le menu si l'utilisateur clique en dehors.
 * @param {Event} event - L'événement de clic détecté sur la fenêtre.
 * @returns {void}
 */
const closeMenuOnClickOutside = (event) => {
    if (!menu.contains(event.target) && !menuTrigger.contains(event.target)) {
        closeMenu();
    }
};

/**
 * Ferme le menu lors du redimensionnement de la fenêtre au-delà d'une certaine largeur.
 * @returns {void}
 */
const closeMenuOnResize = () => {
    if (window.innerWidth > 1050) {
        closeMenu();
    }
};

// Ajoute les écouteurs d'événements
menuTrigger.addEventListener('click', toggleMenu);
window.addEventListener('click', closeMenuOnClickOutside);
window.addEventListener('resize', closeMenuOnResize);
