/**
 * @fileOverview 
 * Contient la configuration de validation pour les champs de formulaire, utilisée dans l'application.
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
 * Configuration de validation pour différents champs de formulaire. Chaque champ a une règle et un message d'erreur associés.
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
            const regexDate = /^(19|20)\d\d-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
            const userBirthday = new Date(value);
            const minAgeDate = getDate18YearsAgo();
            return regexDate.test(value) && userBirthday <= minAgeDate;
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