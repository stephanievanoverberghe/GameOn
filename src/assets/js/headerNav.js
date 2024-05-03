/**
 * Script dedicated to opening and closing the tablet and mobile version menu
 */

const menu = document.querySelector('#menu');
const menuTrigger = document.querySelector('#menuTrigger');
const menuTriggerIcons = menuTrigger.querySelectorAll('.menu__icon');

/**
 * Switch between the opening and closing menu 
 */
const toggleMenu = () => {
    if (menu.style.display === 'block') {
        closeMenu();
    } else {
        openMenu();
    }
};

/**
 * Opening the menu by clicking on the burger menu
 */
const openMenu = () => {
    menu.style.display = 'block';
    menuTriggerIcons[0].classList.add('icon__hidden');
    menuTriggerIcons[1].classList.remove('icon__hidden');
};

/**
 * Closing the menu by clicking on the burger menu
 */
const closeMenu = () => {
    menu.style.display = 'none';
    menuTriggerIcons[0].classList.remove('icon__hidden');
    menuTriggerIcons[1].classList.add('icon__hidden');
};

menuTrigger.addEventListener('click', toggleMenu);

/**
 * Checks if the clicked item is neither the menu nor a descendant of menu
 * Closing the menu if you clicked outside
 */
window.addEventListener('click', event => {
    if (!menu.contains(event.target) && !menuTrigger.contains(event.target)) {
        closeMenu();
    };
});

/**
 *  Disappearance of the menu when switching to an LG screen size
 */
window.addEventListener('resize', () => {
    if (window.innerWidth > 1050) {
        menu.style.display = 'none';
        menuTriggerIcons[0].classList.remove('icon__hidden');
        menuTriggerIcons[1].classList.add('icon__hidden');
    };
});