/**
 * @file
 * Gestion du formulaire ok
 */

import { validateForm, setFieldError, getDate18YearsAgo, form } from './validationConfig.js';

const modalBody = document.querySelector('.modal__body');
const modalSuccess = document.querySelector('.modal__success');

/**
 * @type {validationConfig}
 */
const validationConfig = {
    firstname: {
        rule: value => /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/.test(value),
        errorMessage: 'Le prénom doit contenir au moins 2 caractères.'
    },
    lastname: {
        rule: value => /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/.test(value),
        errorMessage: 'Le nom doit contenir au moins 2 caractères.'
    },
    email: {
        rule: value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(value),
        errorMessage: 'Email non valide.'
    },
    birthday: {
        rule: value => {
            const userBirthday = new Date(value);
            const minAgeDate = getDate18YearsAgo();
            return userBirthday <= minAgeDate;
        },
        errorMessage: 'Vous devez être âgé de plus de 18 ans.'
    },
    participation: {
        rule: value => /^\d+$/.test(value),
        errorMessage: 'Le nombre de participations n\'est pas valide.'
    },
    location: {
        rule: value => value && value.trim() !== '',
        errorMessage: 'Veuillez sélectionner un tournoi.'
    },
    conditions: {
        rule: value => value === true,
        errorMessage: 'Vous devez accepter les conditions d’utilisation.'
    }
};



/**
 * Modifie la visibilité d'un élément DOM.
 * @param {HTMLElement} element - L'élément à modifier.
 * @param {boolean} show - Si vrai, montre l'élément; sinon, le cache.
 */
export const toggleVisibility = (element, show) => {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('visible', show);
};

/**
 * Réinitialise le formulaire et les modales après une soumission réussie.
 */
export const resetFormAndModal = () => {
    form.reset();
    Array.from(form.elements).forEach(element => {
        if (element.type !== 'submit') {
            setFieldError(element, true, '');
        }
    });
    toggleVisibility(modalSuccess, true);
    toggleVisibility(modalBody, false);
}

/**
 * Gère la soumission du formulaire
 * @param {Event} e - L'événement de soumission du formulaire.
 */
const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(form);
    const isValid = validateForm(formData, validationConfig);

    toggleVisibility(modalBody, !isValid);
    toggleVisibility(modalSuccess, isValid);

    console.log(isValid ? 'Toutes les données sont valides !' : 'Validation échouée, le formulaire n\'est pas envoyé !');

    if (isValid) {
        resetFormAndModal();
    }
}

form.addEventListener('submit', handleSubmit);