const isNumber = (num) => typeof(num) === "number";
const sum = (a, b) => {
    if (isNumber(a) && isNumber(b)) {
        return a + b;
    } else {
        throw new TypeError();
    }
};

module.exports = sum;
