/**
 * Script dedicated to form management
 */

// Selecting form and error messages
const form = document.querySelector('form');
const errorMessage = document.querySelectorAll('.form__error');

// Selecting form inputs
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const birthday = document.querySelector('#birthday');
const concoursParticipate = document.querySelector('#numberParticipate');
const boutonsRadios = document.querySelectorAll('input[name="location"]');
const conditionForm = document.getElementById('checkbox1');

// Succès send form
const formSucces = document.querySelector('.succes__submit');
const modalBody = document.querySelector('.modal__body');

// REGEX for validation
const regexName = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/;
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regexDate = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
const regexConcours = /^(?:[0-9]|[1-9][0-9])$/;

/**
 * Function to toggle error messages based on validation
 * * @param {object} params
 * * @param {number} params.index
 * * @param {boolean} params.validate
 * 
 */
const validateForm = ({ index, validate }) => {
    if (validate) {
        errorMessage[index].style.display = "none";
    } else {
        errorMessage[index].style.display = "block";
    }
};

/**
 * Functions to validate each form field
 */
const validateFirstname = () => {
    validateForm({ index: 0, validate: regexName.test(firstname.value) });
};

const validateLastname = () => {
    validateForm({ index: 1, validate: regexName.test(lastname.value) });
};

const validateMail = () => {
    validateForm({ index: 2, validate: regexEmail.test(email.value) });
};

const validateBirthday = () => {
    const userBirthday = new Date(birthday.value);
    const minAgeDate = getDate18YearsAgo();
    if (regexDate.test(birthday.value) && userBirthday <= minAgeDate) {
        validateForm({ index: 3, validate: true });
    } else {
        validateForm({ index: 3, validate: false });
    }
};

const getDate18YearsAgo = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    return today;
};

const validateConcoursParticipate = () => {
    if (regexConcours.test(concoursParticipate.value)) {
        validateForm({ index: 4, validate: true });
    } else {
        validateForm({ index: 4, validate: false });
    }
};

const validateLocation = () => {
    let checked = false;
    boutonsRadios.forEach(radio => {
        if (radio.checked) {
            checked = true;
        }
    });
    validateForm({ index: 5, validate: checked });
};

const validateCondition = () => {
    validateForm({ index: 6, validate: conditionForm.checked });
};

/**
 * Function to check if the entire form is valid
 * @returns {boolean}
 */
const isFormValid = () => {
    let isValid = true;
    errorMessage.forEach(error => {
        if (error.style.display !== "none") {
            isValid = false;
        }
    });
    return isValid;
};

// Event listeners for input validation
firstname.addEventListener('input', validateFirstname);
lastname.addEventListener('input', validateLastname);
email.addEventListener('input', validateMail);
birthday.addEventListener('input', validateBirthday);
concoursParticipate.addEventListener('input', validateConcoursParticipate);
boutonsRadios.forEach(radio => {
    radio.addEventListener('change', validateLocation);
});
conditionForm.addEventListener("change", validateCondition);

/**
 * Event handler to prevent form submission if invalid
 * @param {SubmitEvent} e 
 */
const handleForm = e => {
    if (isFormValid()) {
        // Si le formulaire est valide, affichez le modal de succès
        modalSucces.style.display = "block";
        // Masquez le formulaire en lui retirant la classe modal__body
        modalBody.classList.remove("modal__body");
        // Ajoutez une classe pour masquer le formulaire (si nécessaire)
        modalBody.classList.add("hidden");
        // Empêchez la soumission du formulaire
        e.preventDefault();
    }
};
form.addEventListener('submit', handleForm);
