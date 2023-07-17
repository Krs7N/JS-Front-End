`use strict`;

function printWordsWihoutHashtag(text) {
    const regex = new RegExp("#[A-Za-z]+", "g");
    const wordsArr = [...text.matchAll(regex)].map(w => {
        return w[0];
    });

    for (const word of wordsArr) {
        console.log(word.slice(1, word.length));
    }
}

printWordsWihoutHashtag(`Nowadays everyone uses # to tag a #special word in #socialMedia`);