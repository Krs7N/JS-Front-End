`use strict`;

function validatePassword(password) {

    function isPasswordWrongLength() {
        return password.length < 6 || password.length > 10 
    }

    function isPasswordOnlyLettersAndDigits() {
        return /^[A-Za-z0-9]*$/.test(password);
    }

    function hasTwoDigits() {
        return /[0-9]{2}/.test(password);
    }

    const validationErrors = [];

    if (isPasswordWrongLength()) {
        validationErrors.push('Password must be between 6 and 10 characters');
    }

    if (!isPasswordOnlyLettersAndDigits()) {
        validationErrors.push('Password must consist only of letters and digits');
    }

    if (!hasTwoDigits()) {
        validationErrors.push('Password must have at least 2 digits')
    }

    if (validationErrors.length === 0) {
        console.log('Password is valid');
    } else {
        console.log(validationErrors.join('\n'));
    }
}

validatePassword('Pa$s$s');