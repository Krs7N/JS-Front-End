`use strict`;

function performOperations(numberAsString, ...operations) {
    let number = Number(numberAsString);

    for (let i = 0; i < operations.length; i++) {
        const operation = operations[i];

        switch (operation) {
            case `chop`:
                number /= 2;
                break;
            case `dice`:
                number = Math.sqrt(number);
                break;
            case `spice`:
                number += 1;
                break;
            case `bake`:
                number *= 3;
                break;
            case `fillet`:
                number *= 0.8;
                break;
        }

        console.log(number);
    }
}

performOperations('9', 'dice', 'spice', 'chop', 'bake', 'fillet');