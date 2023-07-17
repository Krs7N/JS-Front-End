`use strict`;

function revealWord(wordsToReplace, text) {
    const neededWords = wordsToReplace.split(`, `);
    const textArr = text.split(` `);

    const replacedArray = textArr.map(w => {
        if (w.startsWith(`*`)) {
            const matchingWord = neededWords.find(nw => nw.length === w.length);

            return w.replace(`*`.repeat(w.length), matchingWord);
        } else {
            return w;
        }
    });

    const replacedText = replacedArray.join(` `);

    console.log(replacedText);
}

revealWord('great, learning', 'softuni is ***** place for ******** new programming languages');