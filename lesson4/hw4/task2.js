/**
 * Calculates Lowest Common Multiple
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns the Lowest Common Multiple.
 */

const lowestMultiple = (num1, num2) => {
    let arrNum = [num1, num2];
    let gcd = Math.abs(arrNum[0]);
    let lcm = Math.abs(arrNum[0]);

    if (typeof num1 && typeof num2 !== 'number') {
        throw new TypeError('invalid value');
    }

    for (let i = 1; i < arrNum.length; i += 1) { 
        let b = Math.abs(arrNum[i]);
        let c = lcm;

       while (lcm && b){
            lcm > b ? lcm %= b : b %= lcm;
        }

        lcm = Math.abs(c*arrNum[i])/(lcm+b);
     }

    return lcm;
}

console.log(lowestMultiple(102, 100));

module.exports = lowestMultiple;