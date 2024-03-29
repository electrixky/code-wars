//Return the number (count) of vowels in the given string.

//##### initial solution #######
function getCount(str) {
    const vowels = ["a", "e", "i", "o", "u"]
    let counter = 0
    for (const char of str) {
        if (vowels.includes(char.toLowerCase())) {
            counter++
        }
    }
    return counter
}

console.log(getCount("abracadabra"))

//###### using regEx ##########
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length
}

console.log(getCount("abracadabra"))

//###### using filter() ########
function getCount(str) {
    return str.split("").filter(x => "aeiouAEIOU".includes(x)).length
}

console.log(getCount("abracadabra"))