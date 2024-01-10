// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//######### initial solution ###########
function spinWords(string){

    const splitStr = string.split(" ")
    let newArr = []

    splitStr.map(word => {
        if (word.length < 5) {
            newArr.push(word)
        } else {
            newArr.push(word.split("").reverse().join(""))
        }
    })

    return newArr.join(" ")
}

console.log(spinWords("Hey fellow warriors"))