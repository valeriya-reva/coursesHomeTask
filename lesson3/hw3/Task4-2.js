/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */

// Шифровка по методу Штирлица. Есть строка "Буря мглою недо кроет, вихри снежные крутя, то как зверь оа завоет то заплачет как дитя". 
// Написать две функции - первая будет кодировать строку и возвращать массив номеров букв. Пробел тоже символ. 
// Принимает функция первым параметром строку для кодирования, вторым фразу ключ. Сделать возмоность передачи фразы по умлчанию. 
// фраза по умолчанию "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ". Буква может иметь несколько значений - 
// например буква у может быть представлена как 2 и 40. разделения на большие и малые буквы нет. 
// Вторая функция принимает массив чисел и возвращает строку.

Object.defineProperties(Array.prototype, {
    count: {
        value: function(query) {
            /* 
               Counts number of occurrences of query in array, an integer >= 0 
               Uses the javascript == notion of equality.
            */
            var count = 0;
            for(let i=0; i<this.length; i++)
                if (this[i]==query)
                    count++;
            return count;
        }
    }
});

function encode(input, key = "абвгдеуёжзийклмнопрстуфхцчшщъыьэюя") {
    var arrEncodeResult = [];
    var arrKey = key.toLowerCase().split('');
    var arrForEncode = input.toLowerCase().split('');

    if (typeof (key) === 'string' && typeof (input) === 'string') {

        for (var i = 0; arrForEncode.length > i; i++) {

            var lettreEncode = arrForEncode[i];

            // var a = arrKey.count(lettreEncode);

            // console.log(a);

            // arrKey.lastIndexOf(lettreEncode, i);

            // arrEncodeResult.push(i);

            var a;

            

        }

    } else {
        return 'enter another value';
    }
    
    return arrEncodeResult;
}

console.log(encode("Буууря уу"));



/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */

function decode(input, key = "абвгдеуёжзийклмнопрстуфхцчшщъыьэюя") {
    var arrKey = key.toLowerCase().split('');
    var arrDecode = [];

    for (var i = 0; input.length > i; i++) {

        for (var j = 0; arrKey.length > j; j++) {

            if (j === input[i]) {

                arrDecode.push(arrKey[j]);
            }
        }
    }


    return arrDecode;
}

console.log(decode([ 1, 6, 21, 6, 21, 18, 33, 14, 3, 13, 16, 32 ]));

module.exports = {
    encode,
    decode,
};
