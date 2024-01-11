// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.
//
// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// ####### initial solution #######
function toJadenCase(string) {
    const words = string.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1)
    }
    return words.join(" ")
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))

// ####### using map #######

function toJadenCase(string) {
    const words = string.split(" ")

    return words.map(word => {
        return word[0].toUpperCase() + word.substring(1)
    }).join(" ")
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))

// ###### using regEx ########

function toJadenCase(string) {
    return string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase())
}

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"))
