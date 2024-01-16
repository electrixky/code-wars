//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//###### initial solution ##########
function solution(str) {
    let newArr = []

    for (let i = 0; i < str.length; i += 2) {
        newArr.push(str.slice(i, i + 2))
    }
    if (newArr.length > 0 && newArr[newArr.length - 1].length === 1) {
        newArr[newArr.length - 1] += '_'
    }
    return newArr

}

console.log(solution("abcdefg"))
console.log(solution(""))

//###### using regEx ########
function solution(str) {
    return (str+"_").match(/.{2}/g)||[]
}

console.log(solution("abcdefg"))
console.log(solution(""))



