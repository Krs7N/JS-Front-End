function censoredWords(text, word) {
    const censorshipWord = `*`.repeat(word.length);

    while (text.includes(word)) {
        text = text.replace(word, censorshipWord);
    }

    console.log(text);
}

censoredWords('A small sentence with some small words', 'small');