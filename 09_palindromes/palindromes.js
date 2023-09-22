// compare index 0 and noWs.length, index 1 and (noWs.length - 1) etc until all checked.
// 2 cases: odd string length (eg 3) - compare 0 and 2, then 1 and 1. 3/2 = 1, so it will compare index 1 with itself.
// other case: even string length (eg 4) - compare 0 and 3, then 1 and 2. compare 2 and 1 on last iteration.

/**
 *  Determine if a string is a palindrome, excluding whitespace and punctuation.
 * @param {String} input 
 * @returns Boolean true if the String is a palindrome, false if it is not a palindrome.
 */

const palindromes = function (input) {
    const letterStr = /\w/g; // only match words, not whitespace
    let noWs = input.match(letterStr);
    
    const halfStringLength = noWs.length / 2;
    const lastChar = noWs.length - 1; // index of last char in the string

    // variables are hoisted to the top of the scope.
    // variables should be declared at the top of the function.
    let curCharLeft;
    let curCharRight;

    for(let i = 0; i < halfStringLength; i++) {
        // convert the current character from the left and right side of the string to lowercase. The function needs to be case-insensitive.
        curCharLeft = noWs[i].toLowerCase();
        curCharRight = noWs[lastChar - i].toLowerCase();
        console.log(`iteration ${i}: ${curCharLeft} ${curCharRight}`);
        if(curCharLeft !== curCharRight) return false;
    };
    return true;
}

// Do not edit below this line
module.exports = palindromes;
