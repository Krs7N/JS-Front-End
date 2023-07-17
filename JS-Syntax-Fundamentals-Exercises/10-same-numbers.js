`use strict`;

function isNumberWithSameDigits(number) {
    const numAsString = String(number);
    let sum = 0;
    let isNumSame = true;

    for (let i = 0; i < numAsString.length - 1; i++) {
        if (numAsString[i] !== numAsString[i + 1]) {
            isNumSame = false;
            break;
        }
    }

    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i]);
    }

    console.log(isNumSame ? true : false);
    console.log(sum);
}

isNumberWithSameDigits(222222);