`use strict`;

function printMultiplicationTableWithNumber(number) {
    for (let times = 1; times <= 10; times++) {
        console.log(`${number} X ${times} = ${number * times}`);
    }
}

printMultiplicationTableWithNumber(5);