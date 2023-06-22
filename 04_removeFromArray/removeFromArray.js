// first version, just remove a single value


const removeFromArray = function(ary, ...removeValues) {
    // let removeValueIndex = ary.findIndex((n) => n === removeValue);
    // ary.splice(removeValueIndex, 1);
    // return ary;

    // return only the elements that we are NOT removing from the array
    return ary.filter((value) => !removeValues.includes(value));
};

// later version: using spread operator, filter() the input Array `ary`.
// We want to run filter with this callback fn:
/*
function notInArgs(value, args) {
    return !args.includes(value);
}

const removeFromArray(ary, ...argsToRemove) {
    return ary.filter(notInArgs)
}

Will be filled out and tested next week
*/

// Do not edit below this line
module.exports = removeFromArray;

