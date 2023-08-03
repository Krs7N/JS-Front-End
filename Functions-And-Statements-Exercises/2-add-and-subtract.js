`use strict`;

function solve(firstNum, secondNum, thirdNum) {
    function sum() {
        return firstNum + secondNum;
    }

    function subtract() {
        return sum() - thirdNum;
    }

    console.log(subtract());
}

solve(23, 6, 10);