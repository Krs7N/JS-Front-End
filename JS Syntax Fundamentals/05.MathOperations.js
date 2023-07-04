function solve(firstNum, secondNum, operation) {
    switch (operation) {
        case `+`:
            console.log(firstNum + secondNum)
            break;
        case `-`:
            console.log(firstNum - secondNum)
            break;
        case `*`:
            console.log(firstNum * secondNum)
            break;
        case `/`:
            console.log(firstNum / secondNum)
            break;
        case `%`:
            console.log(firstNum % secondNum)
            break;
        case `**`:
            console.log(firstNum ** secondNum)
            break;
    }
}

solve(5, 2, `+`);