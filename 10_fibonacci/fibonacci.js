// 1,1,2,3,5,8,13,21,34,55,89,144,233...
// the spec omits 0, since they consider the 6th fibonacci number to be 8.

// 1st num is just 1. // 2nd num is also just 1
// 3rd = 1st + 2nd. 4th = 3rd + 2nd. 5th = 4th + 3rd, etc

/**
 * Return the n-th Fibonacci number.
 * Note that the spec doesn't count 0 as a fibonacci number.
 * If it did, the 6th fibonacci number would be 5 (NOT 8).
 * I have added 0 to the base case to prevent a stack overflow,
 * even though it will never be used.
 * @param {Number | String} input
 * return Number the n-th Fibonacci number.
 */
const fibonacci = function (input) {
    const n = Number(input);

    if (n <= -1) return('OOPS');
    if (n === 0 || n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
