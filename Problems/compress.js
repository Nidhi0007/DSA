// Input: chars = ["a","a","b","b","c","c","c"]
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
// Explanation: The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let counter = 1
    for (let i = 1; i <= chars.length; i++) {
        if (chars[i - 1] == chars[i]) {
            while (chars[i - 1] == chars[i]) {
                chars.splice(i - 1, 1)
                counter++
            }
            String(counter).split("").reverse().forEach(e => {
                chars.splice(i, 0, e)
            })
            i++
            counter = 1
        }

    }
  
};
chars = ["a", "a", "b", "b", "c", "c", "c"]
console.log(compress(chars))