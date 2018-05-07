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

    function filtered (x) {
        for (var a = x; a >= 5; a - 5) {
            console.log (a);
            if (a === 0) {
                resultArr.push(x);
            };
            return resultArr;
        }
    }

    input.filter(filtered);

    return resultArr;
};

console.log(advancedFilter([ 5]));
module.exports = advancedFilter;
