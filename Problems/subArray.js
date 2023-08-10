// Question 1: Maximum Subarray Sum Write a function that takes an array of integers as input and returns the maximum sum of a subarray within the array. The subarray must consist of consecutive elements from the original array.


// javascript program to print largest
// contiguous array sum
function maxSubArraySum(a, size) {
    var max_so_far = Number.MIN_VALUE, max_ending_here = 0, start = 0, end = 0, s = 0;
    console.log(max_so_far)
    for (i = 0; i < size; i++) {
        max_ending_here += a[i];

        if (max_so_far < max_ending_here) {
            max_so_far = max_ending_here;
            start = s;
            end = i;
        }

        if (max_ending_here < 0) {
            max_ending_here = 0;
            s = i + 1;
        }
    }
    return max_so_far
}

// Driver code

var a =  [-2, 1, -3, 4, -1, 2, 1, -5, 4];
var n = a.length;
console.log(maxSubArraySum(a, n));


