/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

function isPositive(num) {
    return num >= 0;
}

function negativeFilter(input) {
    var arrPositiveNum = [];

    if (!Array.isArray(input)) {
        throw new TypeError('invalid value');
    }

    input.forEach(function (item, i) {
        if (isPositive(item)) {
            arrPositiveNum.push(item);
        }
    });

    return arrPositiveNum;
}

module.exports = negativeFilter;
