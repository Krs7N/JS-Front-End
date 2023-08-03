`use strict`;

function matrixCreator(dimensions) {
    let matrix = [];

    for (let row = 0; row < dimensions; row++) {
        for (let col = 0; col < dimensions; col++) {
            matrix.push(dimensions);
        }
        console.log(matrix.join(' '));
        matrix = [];
    }
}

matrixCreator(7);