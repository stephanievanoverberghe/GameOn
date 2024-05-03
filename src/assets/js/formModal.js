/**
 * Script dedicated to form management
 */

const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const errorMessage = document.querySelectorAll('.form__error');
const firstname = document.querySelector('#firstname');
const lastname = document.querySelector('#lastname');
const email = document.querySelector('#email');
const birthday = document.querySelector('#birthday');

console.log(form);
console.log(inputs);
console.log(errorMessage);

const validateFirstname = () => {
    if (firstname.value.length >= 2 || firstname.value.length != "") {
        formValidate({ index: 0, validate: true });
    } else {
        formValidate({ index: 0, validate: false });
    }
}

const validateLastname = () => {
    if (lastname.value.length >= 2 || lastname.value.length != "") {
        formValidate({ index: 1, validate: true });
    } else {
        formValidate({ index: 1, validate: false });
    }
}

const validateMail = () => {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regexEmail.test(email.value)) {
        formValidate({ index: 2, validate: true });
    } else {
        formValidate({ index: 2, validate: false });
    }
}

const beMajor = () => {
    const today = new Date();
    today.setFullYear(today.getFullYear() - 18);
    return today;
}

const validateBirthday = () => {
    const userBirthday = new Date();
    if (userBirthday <= beMajor()) {
        formValidate({ index: 3, validate: true });
    } else {
        formValidate({ index: 3, validate: false });
    }
}

const formValidate = ({ index, validate }) => {
    if (validate) {
        errorMessage[index].style.display = "none";
    } else {
        errorMessage[index].style.display = "block";
    }
}


firstname.addEventListener('input', validateFirstname);
lastname.addEventListener('input', validateLastname);
email.addEventListener('input', validateMail);
birthday.addEventListener('input', validateBirthday);


const handleForm = e => {
    e.preventDefault();
};
form.addEventListener('submit', handleForm);