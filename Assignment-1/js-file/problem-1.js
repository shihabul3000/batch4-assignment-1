"use strict";
{
    // 
    function sumArray(numbers) {
        let sum = 0;
        for (let i = 0; i < numbers.length; i++) {
            const num = numbers[i];
            sum += num;
        }
        return sum;
    }
    const numbersArray = [1, 2, 3, 4, 5];
    console.log('Total sum of array is: ', sumArray(numbersArray));
    //
}
