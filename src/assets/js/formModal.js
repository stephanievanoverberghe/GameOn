/**
 * @fileOverview 
 * Script principal pour la gestion des formulaires de réservation avec validation dynamique et manipulation de modales.
 * Il inclut l'importation des configurations de validation, l'affichage et le masquage des éléments de l'interface utilisateur en réponse à la validation.
 */

import { validationConfig } from './validationConfig.js';

/**
 * Sélectionne les éléments du DOM nécessaires à la manipulation des modales.
 */
const form = document.querySelector('.form');
const modalBody = document.querySelector('.modal__body');
const modalSuccess = document.querySelector('.modal__success');

/**
 * Définit ou efface les messages d'erreur sur les champs du formulaire en fonction de leur validité.
 * @param {HTMLElement} inputElement - L'élément input du formulaire concerné.
 * @param {boolean} isValid - Indique si le champ est valide.
 * @param {string} errorMessage - Le message d'erreur à afficher si le champ n'est pas valide.
 */
const setFieldError = (inputElement, isValid, errorMessage) => {
    const errorElement = inputElement.closest('.form__data').querySelector('.data__error');
    errorElement.textContent = isValid ? '' : errorMessage;
};

/**
 * Valide les données du formulaire en utilisant la configuration de validation spécifiée.
 * @param {FormData} formData - Les données extraites du formulaire.
 * @param {Object} config - Les règles de validation pour chaque champ du formulaire.
 * @returns {boolean} Retourne true si tous les champs sont valides, sinon false.
 */
const validateForm = (formData, config) => {
    return Object.entries(config)
        .reduce((isValid, [fieldName, { rule, errorMessage }]) => {
            const inputElement = form.querySelector(`[name="${fieldName}"]`);
            const value = inputElement.type === 'checkbox' ? inputElement.checked : formData.get(fieldName);
            const isFieldValid = rule(value);
            setFieldError(inputElement, isFieldValid, errorMessage);
            return isValid && isFieldValid;
        }, true);
}

/**
 * Affiche un élément DOM.
 * @param {HTMLElement} element - L'élément à rendre visible.
 */
const showElement = element => {
    element.classList.remove('hidden');
    element.classList.add('visible');
}

/**
 * Cache un élément DOM.
 * @param {HTMLElement} element - L'élément à cacher.
 */
const hideElement = element => {
    element.classList.add('hidden');
    element.classList.remove('visible');
}

/**
 * Bascule la visibilité des modales en fonction de la validité du formulaire.
 * @param {boolean} showSuccess - Détermine quelle modale montrer basée sur si le formulaire est validé ou non.
 */
const toggleModalVisibility = showSuccess => {
    if (showSuccess) {
        hideElement(modalBody);
        showElement(modalSuccess);
    } else {
        showElement(modalBody);
        hideElement(modalSuccess);
    }
}

/**
 * Réinitialise le formulaire et les modales après une soumission réussie.
 * Cette fonction est appelée après un délai pour permettre à l'utilisateur de lire le message de succès.
 */
const resetFormAndModal = () => {
    form.reset(); // Réinitialise les champs du formulaire
    Array.from(form.elements).forEach(element => {
        if (element.type !== 'submit') {
            setFieldError(element, true, ''); // Efface les messages d'erreur
        }
    });
    hideElement(modalSuccess);
    showElement(modalBody);
}

/**
 * Gère la soumission du formulaire. Empêche le rechargement de la page, valide les entrées,
 * et bascule la visibilité des modales selon le résultat.
 * @param {Event} e - L'événement de soumission du formulaire.
 */
const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(form);
    const isValid = validateForm(formData, validationConfig);

    toggleModalVisibility(isValid);

    console.log(isValid ? 'Toutes les données sont valides !' : 'Validation échouée, le formulaire n\'est pas envoyé !');
    if (isValid) {
        setTimeout(resetFormAndModal, 5000);
    }
}

// Ajoute l'écouteur d'événements pour gérer la soumission du formulaire.
form.addEventListener('submit', handleSubmit);