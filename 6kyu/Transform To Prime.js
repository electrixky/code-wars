//Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .
//##### initial approach #######

function minimumNumber(numbers) {
    const sum = numbers.reduce((acc, x) => x + acc, 0)
    if(!isPrime(sum)) {
        for (let i = 1; i < sum; i++) {
            if (isPrime(sum+i))
                return i
        }
    }
    return 0
}

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0)
            return false
    }
    return true
}

console.log(minimumNumber([50,39,49,6,17,28]))