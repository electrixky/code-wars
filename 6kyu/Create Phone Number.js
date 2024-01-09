// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
//     Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// initial solution
const isInTheRange = (currentValue) => currentValue >= 0 && currentValue < 10;

function createPhoneNumber(numbers) {
    if (numbers.length === 10 && numbers.every(isInTheRange)) {
        let firstPart = numbers.slice(0, 3).join('');
        let secondPart = numbers.slice(3, 6).join('');
        let thirdPart = numbers.slice(6).join('');
        return `(${firstPart}) ${secondPart}-${thirdPart}`;
    }
    return "Invalid input";
}

createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

// using replace()
