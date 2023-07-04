function reverseAndPrintArrayElements(elements,inputArr) {
    let newArr = [];

    for (let i = 0; i < elements; i++) {
        newArr.push(inputArr[i]);
    }

    let output = ``;
    for (let i = newArr.length - 1; i >= 0; i--) {
        output += `${newArr[i]} `;
    }

    console.log(output);
}

reverseAndPrintArrayElements(3, [10, 20, 30, 40, 50]);