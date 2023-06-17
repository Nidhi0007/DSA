function palindrome(str) {
    let val = str.toLowerCase()
    let arr = val.split("")
    for (let i = 0; i < (arr.length - 1) / 2; i++) {
        if (arr[i] !== arr[arr.length - i-1]) {
            return false
        }

    }
    return true
}

console.log(palindrome("mym"))