// console.log("HELLO JS!");
/*console.error("HELLO JS!");
console.warn("HELLO JS!");*/

//! Переменные-именованное хранилище данных
//let,var,const

// console.log(birth);
// const birth = "25.01.2006";
// console.log(birth);
// birth = "27.01.2006";

// console.log(lastname);
// let lastname = "Fuck0va";
// console.log(lastname);
// lastname = "Nigova";
// console.log(lastname);

// console.log(firstname);
// var firstname = "Dicka";
// console.log(firstname);
// firstname = "Vagocia";
// console.log(firstname);

//!Название переменных
// Нельзя ставить цифру в начало
// let 5block =""
// зарезервированные слова нельзя использовать

//! так нельзя
// let let не работает
// let first name не работает
// let first-name не работает
//const Red = "asda"

//!так можно
// let camelCase работает
// let color_orange работает
// const RED = "#qwwa1313"
// const $block = "";
// const number10 = "10";

//! типы данных
//1 string
// let str = "strochka";
// console.log(str);

// const typeOfStr = typeof str;
// console.log(typeOfStr);

// console.log(typeof str);

// let str1 = "qwe";
// let str2 = "asd";
// let str3 = `zxc`;
// console.log(str3);

// 2 number

// let num1 = 100;
// const PI = 3.14;
// console.log(typeof num1);

// 3 boolean
// const bool1 = true;
// const bool2 = false;

//4 null-специальная пустота
// let error = null;

//5 undifined
// let hello;
// console.log(hello);

//6 object (object,array)
// let user = {
//   name: "diana kim",
//   age: 20,
// };

// console.log(user.name);
// console.log(user.age);

// console.log(user["name"]);

//array
// let arr = [false, 100, true, {}, [], "hello"];

// console.log(arr.length);

// console.log(arr);
// console.log(arr[0]);
// console.log(arr[5]);

//7 symbol
// let id = Symbol("djwhth343jl");
// console.log(id);

//8 bigInt
// let int = 3234234234234234n;

//! Math operators
// console.log(1 + 5);
// console.log(5 - 2);
// console.log(2 * 5);
// console.log(25 / 5);
// console.log(2 ** 3);
// console.log(10 % 7);

//!-,*,/
// console.log("10" / "2");

//! NaN -> Not a Number
// console.log("hrllo" / 2);

//!+
//!concat -> слияние
// console.log("10" + "2");
// console.log(10 + "2");
// console.log("10" + 2);

//! true-false значения
// console.log(Boolean(0)); //false
// console.log(Boolean(-1)); //true
// console.log(Boolean(null)); //false
// console.log(Boolean(undefined)); //false
// console.log(Boolean("dsadnalkds")); //true
// console.log(Boolean("")); //false

//! сравнение
//! строгое === (тип дданных и значения должны быть равны)
// console.log(3 === 5); //false
// console.log(3 === 3); //true
// console.log(3 === "3"); //false
// console.log(3 !== 5); //true
//! >,<,=
// console.log(3 < 5); //true
// console.log(3 > 5); //false
// console.log(4 >= 4); //true
// console.log(4 <= 4); //true

//! не строгое == (значения должны быть равны)
// console.log(3 == 3); //true
// console.log("3" == 3); //true
// console.log("3" != 3); //false

//! из string в number
//! +
// let elem = "210302041sddsdsfdedaxsdadawd";
// console.log(elem);
// console.log(+elem);

//! parseInt
// let elem2 = "1213113314.093242394209390kjlkwejfkljelkfjls";
// console.log(parseInt(elem2));

//! parseFloat
// let elem3 = "1231124431231.2313kekkfesf";
// console.log(parseFloat(elem3));

//! Number
// let elem4 = "134143221341";
// console.log(Number(elem4));

//! из number в string
//!
// let num = 122413;
// console.log(num);
// console.log(num.toString());
// console.log(String(num));

//! alert,prompt,confirm
// alert("Hello user");
// let firstName = prompt("Как вас зовут?");
// console.log(firstName);
// интерполяция-встроенное выражение
// alert(`${firstName},Welcome!`);

// let value = confirm("Вам есть18?");
// console.log(value);

// let num1 = prompt("Введите первое число");
// let operator = prompt("Введите математический оператор");
// let num2 = prompt("Введите второе чсило");
// let result = eval(num1 + operator + num2); //2+2
// alert(result );
