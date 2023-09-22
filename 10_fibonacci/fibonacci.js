// 1,1,2,3,5,8,13,21,34,55,89,144,233...
// the spec omits 0, sice they consider the 6th fibonacci number to be 8.

// 1st num is just 1. // 2nd num is also just 1
// 3rd = 1st + 2nd. 4th = 3rd + 2nd. 5th = 4th + 3rd, etc

/**
 * Return the nth Fibonacci number.
 * @param {Number} n
 * return Number the n-th Fibonacci number.
 */
const fibonacci = function (n) {
    if (n === 1 || n === 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;
