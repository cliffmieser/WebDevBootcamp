const add  =  (x, y) => x + y;

const subtract = (x, y) => x - y;

const multiply = (x, y) => x * y;

const divide = (x, y) => x / y;

const PI = 3.14159;

const square = x => x * x;

const math = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    PI: PI,
    square: square,
}


module.exports = math;
// module.exports.add = add;
// module.exports.PI = PI;
// module.exports.square = square;