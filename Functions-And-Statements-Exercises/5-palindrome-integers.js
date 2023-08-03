`use strict`;

function isNumberPalindrome(arr) {
    for (let i = 0; i < arr.length; i++) {
        const originalNum = arr[i];
        let comparisonNum = 0;

        while (arr[i] > 0) 
        {
            comparisonNum = comparisonNum * 10 + arr[i] % 10;
            arr[i] = Math.trunc(arr[i] / 10);
        }

        if (comparisonNum == originalNum) { 
            console.log(true); 
        } else {
            console.log(false);
        }
    }
}

isNumberPalindrome([123,323,421,121]);