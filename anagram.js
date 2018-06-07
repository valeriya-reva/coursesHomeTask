// Есть массив строк
// ['aba','baa','zaz','pipa','iapp']
// Должно быть.Пример ниже. так как в словах одинаковые буквы используются.. 
// А если нет похожих то тоже должны сохраняться в отдельный массив(zaz).Количество слов и букв и порядок может быть разным
// [['aba','baa'],['zaz'],['pipa','iapp']]

function anagram (arr) {
    var organized = {};
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        var word = arr[i].split('').sort().join('');

        if (!organized.hasOwnProperty(word)) {
            organized[word] = [];
        }

        organized[word].push(arr[i]);
    }

    for (var key in organized) {
        result.push(organized[key]);
    }

    return result;
}


console.log(anagram(['aba','baa','aab', 'zaz','pipa','iapp']));

