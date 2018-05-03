/**
 * Checks string is polindrome or not
 * @param {string} input
 * @returns {boolean} Returns is string polindroe or not.
 */

function isPolindrome(input) {
    if (typeof (input) !== 'string') {
        return;
    } else {
        var arrPolondrome = input.toLowerCase().split(' ').join('');

        for (var i = 0; i < arrPolondrome.length; i++) {
            if (arrPolondrome[i] !== arrPolondrome[arrPolondrome.length - i - 1]) {
                return false;
            }
        }
    }
    return true;
}

module.exports = isPolindrome;