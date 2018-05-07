/**
 * Return the highest number if second paraameter is true and the lowest number if parameter is false.
 * @param {Array<number>} input
 * @param {boolean} order
 * @returns {number} Returns filtered array.
 */

// Функция принимает массив чисел и булево значение - 
// вернуть наибольшее число если булево значение равно true и наименьшее если булевое значение равно false.


const maxMin = (input, order = true) => {
    var result;

    if (!Array.isArray(input)) {
        throw new TypeError('invalid value');
    }

    if (order) {
        result = Math.max.apply( Math, input );
    } else {
        result = Math.min.apply( Math, input );
    }

    return result;
};

console.log (maxMin([1,2,3]));

module.exports = maxMin;
