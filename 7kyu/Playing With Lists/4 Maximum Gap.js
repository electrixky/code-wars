//Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.

//##### initial solution ######
function maxGap (numbers){
    let maxGap = 0
    const sortedArr = numbers.sort((a, b) => a-b)
    for (let i = 0; i < sortedArr.length-1; i++) {
        if(sortedArr[i+1]-sortedArr[i]>maxGap) {
            maxGap=sortedArr[i+1]-sortedArr[i]
        }
    }
    return maxGap
}

console.log(maxGap([-7,-42,-809,-14,-12]))