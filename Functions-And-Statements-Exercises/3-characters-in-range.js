`use strict`;

function solve(startChar, endChar) {
    const arr = [];

    let firstChar = startChar.charCodeAt(0);
    let secondChar = endChar.charCodeAt(0);

    if (firstChar > secondChar) {
        [firstChar, secondChar] = [secondChar, firstChar];
    }

    for (let i = firstChar + 1; i < secondChar; i++) {
        arr.push(String.fromCharCode(i));
    }

    console.log(arr.join(' '));
}

solve('#', ':');