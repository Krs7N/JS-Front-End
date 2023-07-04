function printSubstring(text, startIndex, count) {
    let result;
    
    result = text.substring(startIndex, count+startIndex);

    console.log(result);
}

printSubstring(`SkipWord`, 4, 7);