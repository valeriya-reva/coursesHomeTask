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



function isPalindrome(input) {

    var startArr  = input.split('');
    var firstLetter = startArr.shift();
    var lastLetter  = startArr.pop();

    if (firstLetter !== lastLetter) {
        return false;
    } else if (startArr.length < 2) {
        return true;
    }

    return isPalindrome(startArr.join(''));

}

console.log(isPalindrome('vereberev'));