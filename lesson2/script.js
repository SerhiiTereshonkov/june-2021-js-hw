// --створити масив з:
//     - з 5 числових значень
// let arrNum = [1, 25, 66, -78, 99];
// console.log(arrNum);
// - з 5 стічкових значень
// let arrString = ['srting', 'Kolya', 'Hello World', 'Hello okten', 'Vasya'];
// console.log(arrString);
// - з 5 значень стрічкового, числового та булевого типу
// let arr = ['string', 99, false, 'name',true];
// console.log(arr);
// - та вивести його в консоль
//

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let arr = [];
// arr [0] = 'Hello World';
// arr [1] = 33;
// arr [2] = false;
// arr [3] = 55;
// arr [4] = 'vasya';
// arr [10] = 11;
// console.log(arr);
//
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write('<div>text</div>');
// };

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>text : ${i}`);
// };

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 10) {
//     document.write('<h1>text</h1>');
//     i++;
// }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// let i = 0;
// while (i < 20) {
//     document.write(`<div>text : ${i}`);
//     i++;
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr = [1, 22, 55, -45, 60, 199, 333, 10000, 4];
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

// for (const number of arr) {
//     console.log(number);
// }

// for (const arrKey in arr) {
//     console.log(arr[arrKey]);
// }

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrString =['Vasya', 'hello world', 'Olya', 'Kolya', 'hello okten', 'string', 'Tolya', 'Jora', 'Nazik', 'Gena'];
// for (let string of arrString) {
//     console.log(string);
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [12, true, 'Nika', 999, false, {name: 'Vasya', age: 30}, 'Hello okten', 123, 1];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

// let arr = [12, true, 'Nika', 999, false, 'World', 'Hello okten', 123, 1];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "boolean") {
//         console.log(arr[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [12, true, 'Nika', 999, false, 'World', 'Hello okten', 123, 1];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         console.log(arr[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// let arr = [12, true, 'Nika', 999, false, 'World', 'Hello okten', 123, 1];
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         console.log(arr[i]);
//     }
// }

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

// let arr = [];
// arr[0] = 1;
// arr[2] = 'Vasya';
// arr[3] = true;
// arr[4] = false;
// arr[5] = 77;
// arr[6] = 'Olya';
// arr[7] = 667;
// arr[8] = 1234;
// arr[9] = 'hello world';
// console.log(arr);
//
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(`${i}`);
// }

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(`${i} <br>`);
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

// for (let i = 0; i < 100; i = i + 2) {
//     console.log(i);
//     document.write(`${i} <br>`);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//    if (!(i%2 === 0)) {
//        console.log(i);
//        document.write(`${i} <br>`);
//    }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i%2 === 1) {
//         console.log(i);
//         document.write(`${i} <br>`);
//     }
// }

// for (let i = 0; i < 100; i++) {
//     if (!(i%2 === 0)) {
//         console.log(i);
//         document.write(`${i} <br>`);
//     }
// }
