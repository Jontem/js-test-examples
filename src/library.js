function add(a, b) {
    return a + b;
}

function even(numbers) {
    return numbers.filter(n => n % 2 > 0);
}

function squareOf(number) {
    return number * number;
}

var lib = {
    add: add,
    even: even,
    squareOf: squareOf
};



module.exports = lib;
