// Day 1

// Q1. Given an array of integer nums and integer target, return indices of the two number such that they add up to target.

// eg: target =3 arr=[1,2,3,4,5,6,7]
function twoSum(arr, target) {

    let sum = 0
    for (i = 0; i < arr.length - 1; i++) {
        let firstElement = arr[i]
        for (j = 1; j < arr.length; j++) {
            sum = firstElement + arr[j]
            if (sum === target) {
                return { first: i, second: j }
            }
        }

    }
}
const target = 13
const arr = [1, 2, 3, 4, 5, 6, 7]
console.log(twoSum(arr, target))