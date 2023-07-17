`use strict`;

function rotateArray(arr, numberOfRotations) {
    for (let i = 0; i < numberOfRotations; i++) {
        let element = arr.shift();
        arr.push(element);
    }

    console.log(arr.join(` `));
}

rotateArray([2, 4, 15, 31], 5);