/*
1.ФУНКЦИЯ 
функция объект, 
можно передать как переменную, 
декларация о намерении

2. function declaration

именованая функция,
объявляются вначале (тоже хостинг),
доступны везде
не ставить т.запятая
есть области видимосити, например вложенная функция

3. function expression

не именованая функция, которая присвоена переменной
разименование происходит после присвоения функции др переменной и вызова этой переменной.

4. параметры функции

optional parameter параметр по умолчанию, указывать последними (есть только в ЕС6)

5. return

прекращение работы
функция может возвращать любой тип или функцию, принимать тоже

var calc - function (a, b, fn){
    return fn(a, b);
}

var sum = fun(first, second) {
    return first + second;
}

calc(2, 2, sum);

6. Self 

(function (i) {
    console.log(i);
})("name");

7. SCOPE



*/
