/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */


function encode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    var arrEncodeResult = [];
    var arrKey = key.toLowerCase().split('');
    var arrForEncode = input.toLowerCase().split('');

    if (typeof (key) !== 'string' && typeof (input) !== 'string') {
        throw new TypeError('invalid value');
    }
    arrForEncode.forEach(function (item, i) {
        arrEncodeResult.push(arrKey.indexOf(item, i) + 1);
    });
    return arrEncodeResult;
}

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */

function decode(input, key = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя ') {
    var strKey = key.toLowerCase();
    var strDecodeResult = '';

    if (typeof (key) !== 'string' && !Array.isArray(input)) {
        throw new TypeError('invalid value');
    }
    input.forEach(function (item, i) {
        for (var j = 0; j < strKey.length; j += 1) {
            if (item === j) {
                strDecodeResult += strKey[j - 1];
            }
        }
    });
    return strDecodeResult;
}


module.exports = {
    encode,
    decode,
};
