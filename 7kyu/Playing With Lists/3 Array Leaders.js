//Given an array/list [] of integers , Find all the LEADERS in the array. An element is leader if it is greater than The Sum all the elements to its right side.
// #### initial solution #####
function arrayLeaders(numbers) {
    const leaders = [];

    for (let i = 0; i < numbers.length; i++) {
        const rightSum = numbers.slice(i + 1).reduce((acc, curr) => acc + curr, 0)

        if (numbers[i] > rightSum) {
            leaders.push(numbers[i]);
        }
    }

    return leaders;
}


console.log(arrayLeaders([0, -1, -29, 3, 2]))