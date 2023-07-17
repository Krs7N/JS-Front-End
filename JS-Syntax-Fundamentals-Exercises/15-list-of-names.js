`use strict`;

    function sortListOfNames(namesArr) {
        const sortedArray = namesArr.sort((a,b) => a.localeCompare(b, undefined, {
            sensitivity: `base`
        }));

        let rank = 1;
        for (let i = 0; i < sortedArray.length; i++) {
            console.log(`${rank++}.${sortedArray[i]}`);
        }
    }

sortListOfNames(["John", "bob", "Christina", "Ema"]);