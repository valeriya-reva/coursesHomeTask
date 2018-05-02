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

function encode(input, key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя") {
    var arrEncodeResult = [];
    var arrKey = key.toLowerCase().split('');
    var arrForEncode = input.toLowerCase().split('');

    if (typeof (key) === 'string' && typeof (input) === 'string') {

        for (var i = 0; arrForEncode.length > i; i++) {

            var lettreEncode = arrForEncode[i];

            console.log(lettreEncode);
        }

        for (var j = 0; arrKey.length > j; j++) {

            if (arrKey[j] === lettreEncode) {
                
            }
        }

    } else {
        return 'enter another value';
    }
    
    return arrEncodeResult;
}

console.log(encode("Буря мглою"));


/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя") {


    return;
}

module.exports = {
    encode,
    decode,
};
