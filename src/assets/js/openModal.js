/**
 * Script dedicated to opening and closing the modal
 */

const btnModal = document.querySelector('#openModal');
const modalClose = document.querySelector('#modalClose');
const modal = document.querySelector('#modalRegister');
const succesModal = document.querySelector('#succes-btn');

/**
 * Opening the modal
 */
const openModal = () => {
    modal.style.display = "block";
};
btnModal.addEventListener('click', openModal);

/**
 * Closing the modal
 */
const closeModal = () => {
    modal.style.display = "none";
};
modalClose.addEventListener('click', closeModal);
succesModal.addEventListener('click', closeModal);

/**
 * Clicking outside the modal, close it 
 */
window.addEventListener('click', event => {
    if (event.target == modal) {
        closeModal();
    };
});