/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */

function isPolindrome(input) {
    var arrPolondrome = input.toLowerCase().split(' ').join('');

    if (typeof (input) !== 'string') {
        return;
    }
    for (var i = 0; i < arrPolondrome.length; i += 1) {
        if (arrPolondrome[i] !== arrPolondrome[arrPolondrome.length - i - 1]) {
            return false;
        }
    }
    return true;
}

module.exports = isPolindrome;
