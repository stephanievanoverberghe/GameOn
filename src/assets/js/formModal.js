const form = document.querySelector('.form');

const getDate18YearsAgo = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    return today;
};

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
        rule: value => parseInt(value, 10) >= 0,
        errorMessage: 'Le nombre de participations n\'est pas valide.'
    },
    location: {
        rule: value => value !== '',
        errorMessage: 'Veuillez sélectionner un tournoi.'
    },
    conditions: {
        rule: value => value === true,
        errorMessage: 'Vous devez accepter les conditions d’utilisation.'
    }
};

/**
 * Sert à vérifier si les données saisies dans le formulaire respectent les règles spécifiées pour chaque champ.
 * 
 * @param {object} formData // Contient toutes les données saisies dans le formulaire
 * @param {object} config // Contient la configuration de validation pour chaque champ du formulaire : rules et errorMessage
 * @returns 
 */
const validateForm = (formData, config) => {
    // Permet de voir si toutes les données sont valides
    let isValid = true;
    /**
     * Object.entries() créer un tableau des entrée de l'objet config où chaque entrée est un tableau [clé, valeur].
     * fieldname représente la clé, le nom du champ
     * {rule, errorMessage} déstructure l'objet de configuration pour ce champ.
     */
    Object.entries(config).forEach(([fieldName, { rule, errorMessage }]) => {
        // Sélectionne l'élément du formulaire basé sur son attribut "name" qui correspond au "fieldname"
        const inputElement = form.querySelector(`[name="${fieldName}"]`);
        // Récupère la valeur du champ. 
        // Si le type de l'élément est une case à cocher, il récupère la propriété "checked"
        // Sinon il récupère la valeur du champ à partir de l'objet "formData"
        const value = inputElement.type === 'checkbox' ? inputElement.checked : formData.get(fieldName);
        const errorElement = inputElement.closest('.form__data').querySelector('.data__error');

        console.log(`Validating ${fieldName}:`, value);

        // Teste si la valeur du champ respecte la règle de validation.
        if (!rule(value)) {
            errorElement.textContent = errorMessage;
            isValid = false;

            console.log(`${fieldName} error: ${errorMessage}`);

        } else {
            errorElement.textContent = '';
        }
    });
    return isValid;
};

const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(form);
    const isValid = validateForm(formData, validationConfig);

    if (isValid) {
        console.log('Toutes les données sont valides !');
    } else {
        console.log('Validation échouée, le formulaire n\'est pas envoyé !');
    }
}

form.addEventListener('submit', handleSubmit);
