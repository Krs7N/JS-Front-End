`use strict`;

function findDigitsSumOfNum(num) {
    const stringNum = String(num);

    let sum = 0;

    for (let i = 0; i < stringNum.length; i++) {
        sum += Number(stringNum[i]);
    }

    console.log(sum);
}

findDigitsSumOfNum(5)