/**
 * @file
 * Gère l'ouverture et la fermeture des modales pour l'inscription à un événement.
 * Ce script inclut des fonctions pour afficher et masquer les modales en réponse aux actions de l'utilisateur,
 * ainsi que pour gérer les clics en dehors des modales pour les fermer.
 * 
 * @version 1.0.0
 * @see validationConfig.js
 * 
 * @autor Stéphanie Vanoverberghe
 */

const btnModal = document.querySelector('#openModal');
const modalClose = document.querySelector('#modalClose');
const modal = document.querySelector('#modalRegister');
const successModal = document.querySelector('#success-btn');

/**
 * Ouvre la modale d'inscription en modifiant son style d'affichage.
 * @returns {void}
 */
const openModal = () => {
    modal.style.display = "block";
};
btnModal.addEventListener('click', openModal);

/**
 * Ferme la modale d'inscription en modifiant son style d'affichage.
 * @returns {void}
 */
const closeModal = () => {
    modal.style.display = "none";
};
modalClose.addEventListener('click', closeModal);
successModal.addEventListener('click', closeModal);

/**
 * Ferme la modale si un clic est détecté en dehors de celle-ci.
 * @param {Event} event - L'événement de clic survenant sur la fenêtre.
 * @returns {void}
 */
window.addEventListener('click', event => {
    if (event.target == modal) {
        closeModal();
    };
});