`use strict`;

function printNthElementFromArray(arr, step) {
    const outputArr = [];

    for (let i = 0; i < arr.length; i+=step) {
        outputArr.push(arr[i]);
    }

    return outputArr;
}

printNthElementFromArray(['dsa', 'asd', 'test', 'tset'], 2);