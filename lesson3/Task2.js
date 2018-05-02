/**
 * Filter array. Only numbers that greater than 0 and less then 10 pass to result.
 * @param {Array<number>} input
 * @returns {Array<number>} Returns filtered array.
 */

// В функцию передается массив с числами. 
// Функция должна возвращать массив который содержит только те числа, 
// которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную 
// функцию isNumberInRange, которая проверяет, что оно больше нуля и меньше 10. 
// Если это так - функция возвращает true, если не так - false.

function isNumberInRange (num) {
    if (typeof(num) === 'number') {
        return num > 0 && num < 10;
    } else {
        return 'enter another value';
    }
}

function advancedFilter(input) {
    var arrResult = [];

    for (var i = 0; i < input.length; i++) {
        var testNum = isNumberInRange (input[i]);

        if (testNum) {
            arrResult.push(input[i]);
        }
    }

    return arrResult;
}


module.exports = advancedFilter;
