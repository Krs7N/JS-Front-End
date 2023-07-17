`use strict`;

function splitPascalCaseText(text) {
    const splitText = text.split(/(?=[A-Z])/);

    console.log(splitText.join(`, `));
}

splitPascalCaseText('SplitMeIfYouCanHaHaYouCantOrYouCan');