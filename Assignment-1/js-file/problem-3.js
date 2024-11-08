"use strict";
{
    function countWordOccurrences(sentence, word) {
        let count = 0;
        let words = sentence.toLowerCase().split(" ");
        let targetWord = word.toLowerCase();
        for (let i = 0; i < words.length; i++) {
            if (words[i] === targetWord) {
                count++;
            }
        }
        return count;
    }
    console.log(countWordOccurrences("I love typescript", "typescript"));
}
