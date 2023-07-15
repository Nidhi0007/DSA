let arr3 = []
let d1 = 0
let d2 = 0
let d3 = 0
function mergeArray(arr1, arr2) {
    while (d1 <= arr1.length && d2 <= arr2.length) {
        if (arr1[d1] <= arr2[d2]) {
            arr3[d3] = arr1[d1]
            d1++
        } else {
            arr3[d3] = arr2[d2]
            d2++
        }
        d3++
    }
    return arr3

}
let arr1 = [1, 2, 4, 5, 6, 7]
let arr2 = [3, 23, 233, 234, 2345]

console.log(mergeArray(arr1, arr2))
