const btnModal = document.querySelector('#openModal');
const modalClose = document.querySelector('#modalClose');
const modal = document.querySelector('#modalRegister');

// FUNCTIONS
const openModal = () => {
    modal.style.display = "block";
}

const closeModal = () => {
    modal.style.display = "none";
}

// ADDEVENTLISTENER
btnModal.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);

window.addEventListener('click', event => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})