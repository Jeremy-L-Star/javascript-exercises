const sumAll = function(first, second) {
    let start = first;
    let end = second;
    let sum = 0;

    if(typeof first !== 'number' || typeof second !== 'number' ||
    first < 0 || second < 0) {
      return 'ERROR';
  }

    // may be able to rewrite this with destructuring?
    if (first > second) {
        start = second;
        end = first;
    }

    for(let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
