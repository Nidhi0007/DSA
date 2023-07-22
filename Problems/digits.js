// 1. Find the total no of digit in a given range of number.
// Ex -- input 7
// Output 7
// Explanation -- All 9 numbers are made up of one digit. So 7*1 = 7

// Input 13
// Output 17
// Explanation -- 1 to 9 is of single digit so total digit = 9 , And 10 to 13, are made of 2 digit. So 4*2=8
// So toal digit = 9+8=17

// function findDigits(n) {
//     let count = 0
//     for (let i = 1; i <= n; i++) {
//         let digits = String(i).split("")

//         for (let j = 1; j <= digits.length; j++) {
//             count++
//         }
//     }
//     return count

// }
// console.log(findDigits(13))
function findDigits(n) {
    // Helper function to count the digits in a number
    console.log(Math.log10(100))
    function countDigits(num) {
        return num === 0 ? 1 : Math.floor(Math.log10(num)) + 1;
    }

    let count = 0;

    for (let i = 1; i <= n; i++) {
        count += countDigits(i);
    }

    return count;
}

console.log(findDigits(13));

