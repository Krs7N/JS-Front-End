`use strict`;

function findSmallestNumber(firstNum, secondNum, thirdNum) {
    if (firstNum < secondNum && firstNum < thirdNum) {
        console.log(firstNum)
    } else if (secondNum < firstNum && secondNum < thirdNum) {
        console.log(secondNum);
    } else {
        console.log(thirdNum);
    }
}

findSmallestNumber(2, 2, 2);