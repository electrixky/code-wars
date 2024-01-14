// Your task is to find the nearest square number. For example, if n = 111, then nearest_sq(n) (nearestSq(n)) equals 121, since 111 is closer to 121, the square of 11, than 100, the square of 10.

function nearestSq(n){
    //return (Number((Math.sqrt(n)).toFixed()))**2
    //return Math.pow(Math.round(Math.sqrt(n)), 2);
    return Math.round(Math.sqrt(n))**2
}

console.log(nearestSq(120))