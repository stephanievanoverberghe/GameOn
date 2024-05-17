/**
 * @file
 * Gère l'ouverture et la fermeture da la modale
 */

const modal = document.querySelector('#modalRegister');
const modalDialog = document.querySelector('.modal__dialog');

/**
 * Gère l'ouverture et la fermeture de la modale avec animation.
 * @param {boolean} isOpen - Indique si la modale doit être ouverte ou fermée.
 */
export const toggleModal = (isOpen) => {
    if (isOpen) {
        modal.style.display = 'block';
        modalDialog.classList.remove('fadeOutUp');
        modalDialog.classList.add('fadeInDown');
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
document.querySelector('#success-btn').addEventListener('click', () => toggleModal(false));

window.addEventListener('click', event => {
    if (event.target === modal) {
        toggleModal(false);
    }
});
