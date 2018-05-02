/**
 * Filter negative numbers from array
 * @param {Array<number>} input
 * @returns {Array<number>} Returns array that contains positive numbers only.
 */

// В функцию передается массив с числами. Функция должна возвращать из него новый массив, 
// где останутся лежать только положительные числа. Создайте для этого вспомогательную функцию isPositive(), 
// которая параметром будет принимать число и возвращать true, если число положительное, и false если отрицательное.


function isPositive(num) {
    if (typeof(num) === 'number') {
        return num >=0;
    } else {
        return 'enter another value';
    }
}

function negativeFilter(input) {
    var arrPositiveNum = [];

    for (var i = 0; i < input.length; i++) {
        var testNum = isPositive(input[i]);
        
        if (testNum) {
            arrPositiveNum.push(input[i]);
        }
    }

    return arrPositiveNum;
}


module.exports = negativeFilter;
