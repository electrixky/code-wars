//Given an array/list [] of integers, Find the product of the k maximal numbers.

// ##### initial solution #####
function maxProduct(numbers, size) {
    return numbers.sort((a, b) => b - a).slice(0, size).reduce((acc, curr) => acc * curr, 1)
}

console.log(maxProduct([10, 8, 7, 9], 3))
