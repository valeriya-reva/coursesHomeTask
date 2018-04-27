Задание 1. Функция принимает число n(проверить что n является числом в противном случае завершить работу функции).
 Функция возвращает строку чисел от 1 до n через разделитель ','. Если число меньше 1 то выдается 
 строка (например n = -2 строка должна быть '1,0,-1,-2').

 /**
 * Build string from numbers from 1 to n
 * @param {number} input
 * @returns {string} Returns the string from 1 to input.
 */


function stringBuilder(input) {
    var stringAllNum;

    if (!isNaN(parseFloat(input)) && isFinite(input)){
        if(input < 0){
            for (var i = 1; i >= input; i--) {
                stringAllNum += (i + ",");
            }
        } else{
            for (var i = 1; i <= input; i++) {
                stringAllNum += (i + ",");
            }
        };
    };
    console.log (stringAllNum);
    // return stringAllNum;
};

module.exports = stringBuilder(2);