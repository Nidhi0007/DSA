// recursive function of binary search

let arr = [1, 2, 3, 4, 5, 7, 8, 9, 11, 33, 44, 45] //sorted array
let target = 8
let start = 0
let end = arr.length - 1
let pos = undefined
function search(target, start, end) {
    let mid = Math.floor((start + end )/ 2)

    if (arr[mid] === target) {
        pos= mid
    } else if (arr[mid] > target) {
        end = mid
        search(target, start, end-1)
    } else if (arr[mid] < target) {
        start = mid
        search( target, start+1, end)
    } else {
        return "not found"
    }
}

console.log(search(target, start, end))
console.log(pos)