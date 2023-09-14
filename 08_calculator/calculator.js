
const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(values) {
	return values.reduce((totalSum, value) => {
    return totalSum + value;
  }, 0);
};

const multiply = function(...args) {
	return args.reduce((totalSum, value) => {
    // console.log(`totalSum, value: ${totalSum}, ${value}`);
    return totalSum * value;
  });
};

const power = function(value, power) {
  let total = value;
  // first 'iteration' is setting the initial value of the total.
  for (let i = 1; i <= (power - 1); i++) {
    total *= value;
  }
  return total;
	// multiply x by itself (y - 1) times
  // eg 4^3 = 64, 4 * 4 * 4 : 4 multiplied by itself (3-1) times.
};

const factorial = function(num){
  if (num === 0) return 1;
  return factorialHelper(1, num);
};

const factorialHelper = function(total, currentValue) {
    if (currentValue === 1) return total;
    return factorialHelper((total * currentValue), currentValue - 1);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
