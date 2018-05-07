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
        
    }

    input.filter(filtered);

    return resultArr;
};

console.log(advancedFilter([1, 3, 5, 7, 14]));
module.exports = advancedFilter;
