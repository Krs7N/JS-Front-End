`use strict`;

function printSum(startNum, endNum) {
    let sum = 0;
    const numArr = [];

    for (let i = startNum; i <= endNum; i++) {
        numArr.push(i);
        sum += i;
    }

    console.log(numArr.join(` `));
    console.log(`Sum: ${sum}`);
}

printSum(5, 10);