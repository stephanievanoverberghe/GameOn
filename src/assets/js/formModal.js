/**
 * @file
 * Script principal pour la gestion des formulaires de réservation avec validation dynamique 
 * et manipulation de modales.
 * 
 * Il inclut l'importation des configurations de validation, l'affichage et le masquage des éléments 
 * de l'interface utilisateur en réponse à la validation.
 * 
 * @version 1.0.0
 * @requires validationConfig.js
 * 
 * @author Stéphanie Vanoverberghe <orangestreet@live.fr>
 */

import { validationConfig } from './validationConfig.js';

/**
 * Sélectionne les éléments du DOM nécessaires à la manipulation des modales.
 * @constant {HTMLElement} form - L'élément de formulaire.
 * @constant {HTMLElement} modalBody - Le corps de la modale de formulaire.
 * @constant {HTMLElement} modalSuccess - La modale de succès.
 */
const form = document.querySelector('.form');
const modalBody = document.querySelector('.modal__body');
const modalSuccess = document.querySelector('.modal__success');

/**
 * Définit ou efface les messages d'erreur sur les champs du formulaire en fonction de leur validité.
 * @param {HTMLElement} inputElement - L'élément input du formulaire concerné.
 * @param {boolean} isValid - Indique si le champ est valide.
 * @param {string} errorMessage - Le message d'erreur à afficher si le champ n'est pas valide.
 * @returns {void}
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
 * Modifie la visibilité d'un élément DOM.
 * @param {HTMLElement} element - L'élément à modifier.
 * @param {boolean} show - Si vrai, montre l'élément; sinon, le cache.
 * @returns {void}
 */
const toggleVisibility = (element, show) => {
    element.classList.toggle('hidden', !show);
    element.classList.toggle('visible', show);
};

/**
 * Réinitialise le formulaire et les modales après une soumission réussie.
 * Cette fonction est appelée après un délai pour permettre à l'utilisateur de lire le message de succès.
 * @returns {void}
 */
const resetFormAndModal = () => {
    form.reset(); // Réinitialise les champs du formulaire
    Array.from(form.elements).forEach(element => {
        if (element.type !== 'submit') {
            setFieldError(element, true, ''); // Efface les messages d'erreur
        }
    });
    toggleVisibility(modalSuccess, false);
    toggleVisibility(modalBody, true);
}

/**
 * Gère la soumission du formulaire. Empêche le rechargement de la page, valide les entrées,
 * et bascule la visibilité des modales selon le résultat.
 * @param {Event} e - L'événement de soumission du formulaire.
 * @returns {void}
 */
const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(form);
    const isValid = validateForm(formData, validationConfig);

    toggleVisibility(modalBody, !isValid);
    toggleVisibility(modalSuccess, isValid);

    console.log(isValid ? 'Toutes les données sont valides !' : 'Validation échouée, le formulaire n\'est pas envoyé !');
    if (isValid) {
        setTimeout(resetFormAndModal, 5000);
    }
}

// Ajoute l'écouteur d'événements pour gérer la soumission du formulaire.
form.addEventListener('submit', handleSubmit);