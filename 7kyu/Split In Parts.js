//The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)

//###### initial solution ###########
var splitInParts = function(s, partLength){
    const resultArr = []
    for (let i=0; i<s.length; i+=partLength) {
        let substring = s.slice(i,i+partLength)
        resultArr.push(substring)
    }
    return resultArr.join(" ")
}

console.log(splitInParts("supercalifragilisticexpialidocious", 3))