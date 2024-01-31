//Find the minimum sum which is obtained from summing each Two integers product . For example, minSum([12,6,10,26,3,24]) returns 342 because  26*3 + 24*6 + 12*10 = 342
//###### initial solution #######
function minSum(arr) {
    const sortedArr = arr.sort((a,b)=> a-b)
    let sum = 0
    for (let i = 0; i < sortedArr.length/2; i++) {
        sum += sortedArr[i] * sortedArr[sortedArr.length-i-1]
    }
    return sum
}

console.log(minSum([9,2,8,7,5,4,0,6]))

//###### using reduce #######
function minSum(arr) {
    return arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);
}

console.log(minSum([12,6,10,26,3,24]))

//##### pop() and shift() #######

function minSum(arr) {
    arr.sort((a, b) => a - b)
    let sum = 0

    while (arr.length) {
        sum += arr.pop() * arr.shift()
    }

    return sum
}

console.log(minSum([12, 6, 10, 26, 3, 24]))