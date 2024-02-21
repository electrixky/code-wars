//Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .
//##### initial approach #######

// function minimumNumber(numbers) {
//     const sum = numbers.reduce((acc, x) => x + acc, 0)
//     if(!isPrime(sum)) {
//         for (let i = 1; i < sum; i++) {
//             if (isPrime(sum+i))
//                 return i
//         }
//     }
//     return 0
// }
//
// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0)
//             return false
//     }
//     return true
// }

//##### using while loop #######

function minimumNumber(numbers) {
    let sum = numbers.reduce((acc, x) => acc + x, 0);
    let i = 0;
    while (!isPrime(sum + i)) i++;
    return i;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(minimumNumber([2,12,8,4,6]))