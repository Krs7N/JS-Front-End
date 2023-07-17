`use strict`;

function isWordPresentInString(wordPattern, text) {
    const wordPatternLowerCase = wordPattern.toLowerCase();
    const textLowerCaseArr = text.toLowerCase().split(` `);

    for (const word of textLowerCaseArr) {
        if (word === wordPatternLowerCase) {
            return console.log(wordPattern);
        }
    }

    console.log(`${wordPattern} not found!`);
}

isWordPresentInString('javascript', 'JavaScript is the best programming language');