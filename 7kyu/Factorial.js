// Write a function to calculate factorial for a given input.  If input is below 0 or above 12 throw an exception of type "RangeError"

//#### initial solution #####

// function factorial(n) {
//     if (n >= 0 && n <= 12) {
//         let factorial = 1
//         for (let i = n; i > 0; i--) {
//             factorial *= i
//         }
//
//         return factorial
//     } else {
//         throw new RangeError("Out of range");
//     }
// }
//
// console.log(factorial(5))


//##### recursion ######

function factorial(n) {
    if (n < 0 || n > 12)
        throw new RangeError()
    return n <= 1 ? 1 : n * factorial(n-1)
}

console.log(factorial(5))