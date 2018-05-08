/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    if (typeof num1 && typeof num2 !== 'number') {
        throw new TypeError('invalid value');
    }
    var arrNum = [num1, num2];
    var gcd = Math.abs(arrNum[0]);
    var lcm = Math.abs(arrNum[0]);

    for (var i = 1; i < arrNum.length; i++){ 
        var b = Math.abs(arrNum[i]),
        c = lcm;
       while (lcm && b){
        lcm > b ? lcm %= b : b %= lcm;
        } 
        lcm = Math.abs(c*arrNum[i])/(lcm+b);
     }

    return lcm;
}

console.log(lowestMultiple(102, 100));

module.exports = lowestMultiple;