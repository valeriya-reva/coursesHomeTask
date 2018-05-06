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
    } else {
        for (var i = 0; i < input.length; i += 1) {
            if (isPositive(input[i]) && typeof (input[i]) === 'number') {
                arrPositiveNum.push(input[i]);
            }
        }
    }

    return arrPositiveNum;
}

module.exports = negativeFilter;
