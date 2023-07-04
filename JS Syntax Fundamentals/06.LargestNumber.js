function findLargestNumber(firstNum, secondNum, thirdNum) {
    let largestNum;

    if (firstNum > secondNum && firstNum > thirdNum) {
        largestNum = firstNum;
    }
    else if (secondNum > firstNum && secondNum > thirdNum) {
        largestNum = secondNum;
    }
    else if (thirdNum > firstNum && thirdNum > secondNum) {
        largestNum = thirdNum;
    }

    console.log(`The largest number is ${largestNum}.`);
}

findLargestNumber(1, 2, 3)