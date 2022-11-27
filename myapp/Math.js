let sum = (a, b) => {
    if (typeof a != "number" || typeof b != "number") {
        return "please enter number"
    } else {
        return a + b;
    }
}

let square = (a) => {
    if (a = 0) {
        return 0;
    } else if (a < 0) {
        return a * a;
    } else if (typeof a != "number") {
        return "Please enter a number";
    } else if (a) {
        return Infinity;
    } else {
        return a * a;
    };
};
let Math = {
    sum,
    square
};
module.exports = Math;