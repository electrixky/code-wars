// Square Every Digit

// ##### initial solution ######
function squareDigits(num){
    return +(String(num).split('').reduce((a, c) => {
        return a + Math.pow(Number(c), 2)
    }, ''))
}

console.log(squareDigits(9119))