//Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
//##### initial solution ######
function productArray(numbers){
    let newArr = []
    for (let i = 0; i < numbers.length; i++) {
        let prod = 1
        for (let j = 0; j < numbers.length; j++) {
            if(j===i) continue
            prod*=numbers[j]
        }
        newArr.push(prod)
    }
    return newArr
}

console.log(productArray([3,27,4,2]))

