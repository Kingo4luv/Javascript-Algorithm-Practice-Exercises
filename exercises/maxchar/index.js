// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const strObj = {};
    let maxNum = 0;
    let maxChar;

    str.split("").forEach(char => {

        strObj[char] = strObj[char] + 1 || 1;
    });

    for (const char in strObj) {
        if (strObj[char] > maxNum) {
            maxNum = strObj[char];
            maxChar = char
        }
    }

    return maxChar;


}

module.exports = maxChar;