"use strict";
{ //
    const removeDuplicates = (numbers) => {
        let uniqueNumbers = [];
        let seenNumbers = {};
        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            if (!seenNumbers[num]) {
                uniqueNumbers.push(num);
                seenNumbers[num] = true;
            }
        }
        return uniqueNumbers;
    };
    const inputArray = [1, 2, 2, 3, 4, 4, 5];
    console.log(removeDuplicates(inputArray));
    //
}
