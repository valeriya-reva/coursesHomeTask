/**
 * Filter array. Move zeros in the end of string.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */
const moveZeros = function (arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError('invalid value');
    }

    arr.forEach(function (item, i) {
        if (item === 0) {
            arr.splice(i, 1);
            arr.push(item);
        }
    });

    return arr;
}

console.log(moveZeros([0, 1, 7, 0, 3, 0, 7, 0]));

module.exports = moveZeros;
