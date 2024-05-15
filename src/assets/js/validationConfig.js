/**
 * @file
 * Contient la configuration de validation pour les champs de formulaire, utilisée dans l'application.
 * 
 * Ce fichier inclut des règles de validation pour chaque champ de formulaire et les messages d'erreur associés.
 * Il fournit également une fonction utilitaire pour calculer la date correspondant à un âge minimum de 18 ans.
 * 
 * @version 1.0.0
 * @module validationConfig
 * 
 * @author Stéphanie Vanoverberghe
 */

/**
 * Calcule la date d'il y a 18 ans par rapport à aujourd'hui.
 * @returns {Date} La date représentant aujourd'hui moins 18 ans.
 */
const getDate18YearsAgo = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    return today;
};

/**
 * Configuration de validation pour différents champs de formulaire.
 * Chaque champ a une règle de validation et un message d'erreur associés.
 * @typedef {Object} ValidationConfig
 * @property {Object} firstname - Validation du prénom.
 * @property {function(string): boolean} firstname.rule - Règle de validation pour le prénom.
 * @property {string} firstname.errorMessage - Message d'erreur pour le prénom.
 * @property {Object} lastname - Validation du nom de famille.
 * @property {function(string): boolean} lastname.rule - Règle de validation pour le nom de famille.
 * @property {string} lastname.errorMessage - Message d'erreur pour le nom de famille.
 * @property {Object} email - Validation de l'adresse email.
 * @property {function(string): boolean} email.rule - Règle de validation pour l'adresse email.
 * @property {string} email.errorMessage - Message d'erreur pour l'adresse email.
 * @property {Object} birthday - Validation de la date de naissance.
 * @property {function(string): boolean} birthday.rule - Règle de validation pour la date de naissance.
 * @property {string} birthday.errorMessage - Message d'erreur pour la date de naissance.
 * @property {Object} participation - Validation du nombre de participations.
 * @property {function(string): boolean} participation.rule - Règle de validation pour le nombre de participations.
 * @property {string} participation.errorMessage - Message d'erreur pour le nombre de participations.
 * @property {Object} location - Validation de la localisation du tournoi.
 * @property {function(string): boolean} location.rule - Règle de validation pour la localisation du tournoi.
 * @property {string} location.errorMessage - Message d'erreur pour la localisation du tournoi.
 * @property {Object} conditions - Validation des conditions d'utilisation.
 * @property {function(boolean): boolean} conditions.rule - Règle de validation pour les conditions d'utilisation.
 * @property {string} conditions.errorMessage - Message d'erreur pour les conditions d'utilisation.
 */

/**
 * @type {ValidationConfig}
 */
export const validationConfig = {
    firstname: {
        rule: value => /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/.test(value),
        errorMessage: 'Le prénom doit contenir au moins 2 caractères.'
    },
    lastname: {
        rule: value => /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/.test(value),
        errorMessage: 'Le nom doit contenir au moins 2 caractères.'
    },
    email: {
        rule: value => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value),
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