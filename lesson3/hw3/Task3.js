/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */

// В википедии прочитать что такое полиндромы. 
// Функция должна принимать строку и выдавать true если строка является полндромом 
// и false если она таковой не является. Игнорировать большие и малые буквы.


function isPolindrome(input) {
    var arrTest = input.split().reverse().join('');

    console.log(arrTest);
    return;
}

isPolindrome('топот');

module.exports = isPolindrome;
