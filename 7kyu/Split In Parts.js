//The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

//###### initial solution ###########
let splitInParts = function(s, partLength){
    const resultArr = []
    for (let i=0; i<s.length; i+=partLength) {
        let substring = s.slice(i,i+partLength)
        resultArr.push(substring)
    }
    return resultArr.join(" ")
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3))

//###### with splice ###########

let splitInParts = function(s, partLength) {
    let parts = []
    let array = s.split("")
    while(array.length) {
        parts.push(array.splice(0,partLength).join(""))
    }
    return parts.join(" ")
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3))