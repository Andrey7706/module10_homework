// Задание 8.

/*
Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.
*/

let newMap = new Map ([
    ['author', 'Andrey'],
    ['age', '43'],
    ['country', 'Russia'],
    ['city', 'Vologda']
]);

for (let elem of newMap) {
  console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`);
};

//========================================================================================================================