/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

function isNumberInRange(num) {
    return num > 0 && num < 10;
}

function advancedFilter(input) {
    var arrResult = [];

    if (!Array.isArray(input)) {
        throw new TypeError('invalid value');
    } else {
        for (var i = 0; i < input.length; i += 1) {
            if (isNumberInRange(input[i]) && typeof (input[i]) === 'number') {
                 arrResult.push(input[i]);
            }
        }
    }
    return arrResult;
}

module.exports = advancedFilter;

