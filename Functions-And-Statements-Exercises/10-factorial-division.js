`use strict`;

function getFactorialDivision(firstNumber, secondNumber) {
    let firstFactorial = 1;
    let secondFactorial = 1;

    for (let i = firstNumber; i > 1; i--) {
        firstFactorial *= i;
    }

    for (let i = secondNumber; i > 1; i--) {
        secondFactorial *= i;
    }

    console.log((firstFactorial / secondFactorial).toFixed(2));
}

getFactorialDivision(2,5);