// Задание 3.

/*
Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".
*/

let str = "Hello, World!";

str = str.split("").reverse().join("");

console.log(str);

//======================================================================================================================