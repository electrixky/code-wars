//Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

//##### initial solution ######
// function maxGap (numbers){
//     let maxGap = 0
//     const sortedArr = numbers.sort((a, b) => a-b)
//     for (let i = 0; i < sortedArr.length-1; i++) {
//         if(sortedArr[i+1]-sortedArr[i]>maxGap) {
//             maxGap=sortedArr[i+1]-sortedArr[i]
//         }
//     }
//     return maxGap
// }
//
// console.log(maxGap([-7,-42,-809,-14,-12]))

//##### using reduce() #######

function maxGap(numbers) {
    return numbers
        .sort((a, b) => a - b)
        .reduce((max, n, i) => {
            let gap = numbers[i + 1] - n
            if (max < gap) {
                max = gap
            }
            return max
        }, 0);
}

console.log(maxGap([-7, -42, -809, -14, -12]))