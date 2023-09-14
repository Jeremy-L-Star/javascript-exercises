
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

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
