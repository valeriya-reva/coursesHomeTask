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
    var arrNum = [num1, num2];
    var gcd = Math.abs(arrNum[0]);

    arrNum.forEach(function (item, i) {
      var counterNum = Math.abs(item);

      while (gcd && counterNum){
        gcd > counterNum ? gcd %= counterNum : counterNum %= gcd;
      }

      gcd += counterNum;
    });

    return gcd;
 }; 

console.log(commonDevisor(102, 100));

module.exports = commonDevisor;

// http://mathhelpplanet.com/static.php?p=javascript-nod-i-nok
// http://math-prosto.ru/?page=pages/find_nod_and_nok/find_nod.php