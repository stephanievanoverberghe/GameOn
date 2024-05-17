/**
 * @file
 * Configuration de validation formulaire
 */

export const form = document.querySelector('.form');

/**
 * Donne la date du jour moins 18 ans
 * @returns {Date}
 */
export const getDate18YearsAgo = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    return today;
};

/**
 * Valide les données du formulaire
 * @param {FormData} formData - Les données extraites du formulaire.
 * @param {Object} config - Les règles de validation pour chaque champ du formulaire.
 * @returns {boolean} Retourne true si tous les champs sont valides, sinon false.
 */
export const validateForm = (formData, config) => {
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
 * Définit ou efface les messages d'erreur du formulaire
 * @param {HTMLElement} inputElement - L'élément input du formulaire concerné.
 * @param {boolean} isValid - Indique si le champ est valide.
 * @param {string} errorMessage - Le message d'erreur à afficher si le champ n'est pas valide.
 */
export const setFieldError = (inputElement, isValid, errorMessage) => {
    const errorElement = inputElement.closest('.form__data').querySelector('.data__error');
    errorElement.textContent = isValid ? '' : errorMessage;
};