/**
 * Filter array. Only numbers devided on 3,5 and 7 can be in result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

const advancedFilter = (input) => {
    if (!Array.isArray(input)) {
        throw new TypeError('invalid value');
    }
    var resultArr = [];

    function filterFun (element) {
        element = Math.abs(element);

        for (var a = element; a >= 0; a -= 5) {
            if (a === 0) {
                return true;
            }
        };
        for (var a = element; a >= 0; a -= 3) {
            if (a === 0) {
                return true;
            }
        };
        for (var a = element; a >= 0; a -= 7) {
            if (a === 0) {
                return true;
            }
        };
    }

    resultArr = input.filter(filterFun);

    return resultArr;
};

console.log(advancedFilter([6, 7, 20, 11, 5]));
module.exports = advancedFilter;
