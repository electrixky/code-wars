//A variation of determining leap years, assuming only integers are used and years can be negative and positive.
//#### initial solution ######

// function yearDays(year) {
//     const LEAP_YEAR = 366
//     const NON_LEAP_YEAR = 365
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//             return `${year} has ${LEAP_YEAR} days`
//     }
//     return `${year} has ${NON_LEAP_YEAR} days`
// }
//
// console.log(yearDays(300))

//#### solution 2 ######
function yearDays(year) {
    return year + " has " + (!(year % 100) && year % 400 || year % 4 ? "365" : "366") + " days"
}

console.log(yearDays(-400))