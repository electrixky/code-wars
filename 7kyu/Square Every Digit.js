// Square Every Digit

// ##### initial solution ######
function squareDigits(num){
    return +(String(num).split('').reduce((a, c) => {
        return a + Math.pow(Number(c), 2)
    }, ''))
}

console.log(squareDigits(9119))

//##### using map ######

function squareDigits(num){
    return num.toString().split('').map(i => i*i).join('')
}

console.log(squareDigits(9119))