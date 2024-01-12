// Given an integral number, determine if it's a square number:

// ######## initial solution ########
var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n))
}

console.log(isSquare(4))

// ######## using modulus #########

var isSquare = function(n){
    return Math.sqrt(n)%1 === 0
}

console.log(isSquare(25))

// ####### checking integers #########
var isSquare = function(n) {
    for (let i = 0; i * i <= n; i++) {
        if (i*i === n) {
            return true
        }
    }
    return false
}

console.log(isSquare(23))