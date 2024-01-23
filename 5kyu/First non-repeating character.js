//Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
//###### initial solution #######

function firstNonRepeatingLetter(str) {
    const letters = {}

    for (const char of str) {
        const lowerChar = char.toLowerCase()

        letters.hasOwnProperty(lowerChar) ? letters[lowerChar]++ : letters[lowerChar] = {count: 1, originalCase: char}
    }
    for (const char in letters) {
        if(letters[char].count === 1) {
            return letters[char].originalCase
        }
    }

    return ''
}

console.log(firstNonRepeatingLetter('sTreSS'))