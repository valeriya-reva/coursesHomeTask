/**
 * Calculates Сommon Divisor 
 * @param {number} num1
 * @param {number} num2
 * @returns {number} Returns Сommon Divisor.
 */

 const commonDevisor = (num1, num2) => {
    if (typeof num1 && typeof num2 !== 'number') {
        throw new TypeError('invalid value');
    }
    var A = [num1, num2];
    var arr1 = [];
    var arr2 = [];
    var gcd;
    var arrNumPositive = [];

    // for (k = num1; k > 0; k -= 1) {
    //     if (num1 % k) {
    //         arr1.push(k);
    //     }
    // };
    // for (i = num2; i > 0; i -= 1) {
    //     if (num2 % i) {
    //         arr2.push(i);
    //     }
    // };

    var n = A.length, x = Math.abs(A[0]);
    for (var i = 1; i < n; i++)
     { var y = Math.abs(A[i]);
       while (x && y){ x > y ? x %= y : y %= x; }
       x += y;
     }
    return x;
    
 };

console.log(commonDevisor(102, 100));

module.exports = commonDevisor;

// http://mathhelpplanet.com/static.php?p=javascript-nod-i-nok
// http://math-prosto.ru/?page=pages/find_nod_and_nok/find_nod.php