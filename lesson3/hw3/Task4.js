// Шифровка по методу Штирлица. Есть строка "Буря мглою недо кроет, вихри снежные крутя, то как зверь оа завоет то заплачет как дитя". 
// Написать две функции - первая будет кодировать строку и возвращать массив номеров букв. 
// Пробел тоже символ. Принимает функция первым параметром строку для кодирования, 
// вторым фразу ключ. Сделать возмоность передачи фразы по умлчанию. фраза по умолчанию 
// "абвгдеёжзийклмнопрстуфхцчшщъыьэюя ". Буква может иметь несколько значений - например
//  буква у может быть представлена как 2 и 40. разделения на большие и малые буквы нет. 
//  Вторая функция принимает массив чисел и возвращает строку.

/**
 * Encode string into number array by Stirlitz method
 * @param {string} input string for encoding
 * @param {string} key key for encoding
 * @returns {Array<number>} Returns encoded array of numbers.
 */
function encode(input, key) {
    return;
}

/**
 * Decode array of numbers to string by Stirlitz method
 * @param {Array<number>} input Array of numbers
 * @param {string} key key for decoding
 * @returns {string} Returns decoded string.
 */
function decode(input, key) {
    return;
}

module.exports = {
    encode,
    decode,
};
