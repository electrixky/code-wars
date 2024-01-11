// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// ######## initial solution ########
function duplicateCount(text){
    let charCounterObj = {}
    let counter = 0
    const textArr = text.toLowerCase().split("")

    for (let i = 0; i < textArr.length; i++) {
        if (textArr[i] in charCounterObj) {
            charCounterObj[textArr[i]]++
        } else {
            charCounterObj[textArr[i]] = 1
        }
    }

    for (let prop in charCounterObj) {
        if(charCounterObj.hasOwnProperty(prop) && charCounterObj[prop]>=2) {
            counter++
        }
    }
    return counter
}

console.log(duplicateCount("Indivisibilities"))

// ####### using regEx #########

function duplicateCount(text){
    return (text.toLowerCase().split("").sort().join("").match(/([^])\1+/g) || []).length
}

console.log(duplicateCount("Indivisibilities"))

