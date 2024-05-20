/**
 * @file
 * Gère l'ouverture et la fermeture de la modale
 */

import { resetFormAndModal, toggleVisibility } from './formModal.js';

document.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('#modalRegister');
    const modalDialog = document.querySelector('.modal__dialog');
    const modalBody = document.querySelector('.modal__body');
    const modalSuccess = document.querySelector('.modal__success');

    /**
     * Gère l'ouverture et la fermeture de la modale avec animation.
     * @param {boolean} isOpen - Indique si la modale doit être ouverte ou fermée.
     */
    const toggleModal = (isOpen) => {
        if (isOpen) {
            modal.style.display = 'block';
            modalDialog.classList.remove('fadeOutUp');
            modalDialog.classList.add('fadeInDown');
            toggleVisibility(modalBody, true);
            toggleVisibility(modalSuccess, false);
        } else {
            modalDialog.classList.remove('fadeInDown');
            modalDialog.classList.add('fadeOutUp');
            modalDialog.addEventListener('animationend', () => {
                modal.style.display = 'none';
            }, { once: true });
        }
    };

    document.querySelector('#openModal').addEventListener('click', () => toggleModal(true));
    document.querySelector('#modalClose').addEventListener('click', () => toggleModal(false));
    document.querySelector('#success-btn').addEventListener('click', () => {
        toggleVisibility(modalBody, true);
        toggleVisibility(modalSuccess, false);
        toggleModal(false);
        resetFormAndModal();
    });

    window.addEventListener('click', event => {
        if (event.target === modal) {
            toggleModal(false);
        }
    });
});
