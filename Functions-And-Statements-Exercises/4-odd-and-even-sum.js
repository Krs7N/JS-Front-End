`use strict`;

function sum(number) {
    let oddSum = 0;
    let evenSum = 0;

    while (number > 0) {
        let digit = number % 10;
        number = Math.trunc(number/10);
        
        if (digit % 2 == 0) {
            evenSum += digit;
        } else {
            oddSum += digit;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

sum(1000435);