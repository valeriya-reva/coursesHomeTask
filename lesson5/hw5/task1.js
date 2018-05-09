/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Encrypted string.
 */

 const encrypt = (text, n) => {
    let arrText = text.split('');
    let resuktOne;
    let resuktTwo;
    var result;

    if (typeof text !== 'string' && typeof n !== 'number') {
        throw new TypeError('invalid value');
    }

    const findOdd = (element, index) => {
         if (index % 2 !== 0) {
            return true;
        }
    }

    const findEven = (element, index) => {
        if (index % 2 === 0) {
           return true;
       }
    }

    const iteratArr = (x) => {
        resuktOne = x.filter(findOdd);
        resuktTwo = x.filter(findEven);
        return arrText = resuktOne.concat(resuktTwo);
    };


    for (var i = n + 1; i > 0; --i)  {
        iteratArr(arrText);
    };
    
     return arrText;
 };

/**
 * String encription
 * @param {string} text
 * @param {number} n
 * @returns {string} Returns Decrypted string.
 */
const decrypt = (encryptedText, n) => {

}

console.log(encrypt("This is a test!", 3));


module.exports = { encrypt , decrypt };
