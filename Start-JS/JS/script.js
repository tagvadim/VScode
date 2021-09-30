"use strict"

/*let howManyYears = prompt(`укажи сколько тебе лет!`, 18);
alert(`Мне уже ${howManyYears} лет`);*/

/*let age = confirm("Тебе точно столько лет?");
if (age == true) {
   alert ('Да, конечно');
}else{
   alert('Я пошутил');
}  */

/*let nameJs = prompt ('Какое официальное название JavaScript?');
if (nameJs == "ECMAScript") {
   alert('Правильно!');
}else if (nameJs == "Не знаю") {
   alert('Иди \n учи')  // \n - перенос строки
}else{
   alert ('Пока')
}  */

/*let nameEmployee = prompt ('Вы кто?', 'Директор или сотрудник');
let kto = (nameEmployee == 'Директор') ? alert ('Здравстуйте!') : (nameEmployee == 'сотрудник') ? alert ('Хай') : (nameEmployee == "") ? alert ('goodbay') : '';  */

//let proba = prompt("Сколько лет не виделись?", "сто");
//alert (`почти ${proba} лет`)

/*let proba = String ("79")
console.log (typeof proba);  // - string
proba = +proba;
console.log (proba)   // number 79  */

/*let car = (1>4||5>8||3);
console.log (car)*/

/* let age = prompt("Введите число в диапазоне 14 -90", "");
if (age >= 14 && age <= 90) {
   alert("Все верно!");
} else if (age <= 13 || age >= 91) {
   alert("Число вне диапазона!");
}  */

/*
let passport = prompt(`Кто там?`, "");
if (passport == null) {
   alert("Отменено");
} else if (passport != "Админ") {
   alert("Я вас не знаю");
} else if (passport == "Админ") {
   let vlog = prompt("Пароль?", "");
   if (vlog == null) {
      alert("Отменено");
   } else if (vlog == "Я главный") {
      alert("Здравствуйте");
   }else{
      alert("Неверный пароль");
   }
}
*/

/*let t = 0;
while (t < 20){
   t++;
   console.log (t);
} */

/*for (let t = 0; t <= 10; t++)
  if (t % 2 == 0) {
  console.log (t);
}*/

/*let i = 0;
while (i<3) {
   i++;
   console.log (` номер ${i} !`);
}*/

/* let num;
do
   num = prompt("Введите число больше 100", "");
   while (num <= 100 && num) {
   alert("верно");
} */

/*
const numb = +prompt("Введите число между 0 и 3", "");
switch (numb) {
   case 0:
      alert("Вы ввели ноль");
      break;
   case 1:
      alert("Вы ввели единицу");
      break;
   case 2:
   case 3:
      alert(" Вы ввели два или три");
      break;
}
*/

/*   function checkAge (age) {
   return (age > 18) ? true : confirm ("А родители знают?");
}  */

/*
function min (a, b) {
   return (a > b) ? alert (b) : alert (a)
}
min (4, 4);
*/

/*
function pow (x, n) {
   if (x < 1 || n < 1) {
      return alert ("!!!");
   }
   let result = (x ** n);
    alert (result);
}

let numX = prompt ('Введите натуральное число');
let numN = prompt ('Введите степень');
pow (numX, numN);
*/
/*
let propka = (a, b) => a * b;
console.log (propka (3, 5))  */


/*
let user = {};
user.name = "Джон";
console.log(user.name);
user.surname = "Смит";
console.log (user.surname);
user.name = "Петя";
console.log (user.name);
delete user.name;
console.log (user.name);
*/

///////////////////////////////////////////////////////////////////////////////////////
/*
let salaries = {
   John: 100,
   Ann: 160,
   Pete: 130,
}
*/
//неправильное решение 
/*let sum = salaries.John + salaries.Ann + salaries.Pete;
if (sum === NaN) {
   console.log("Объект пустой")
} else {
   console.log(sum)
}*/
/*
// правильное решение
let sum = 0;
for (let key in salaries) {
   sum += salaries[key];
}
console.log (sum)
*/
///////////////////////////////////////////////////////////////////////////////////////
/*
let menu = {
   width: 200,
   height: 300,
   title: "My meny",
};

function multipluNumeric() {
   for (let size in menu) {
      if (typeof (menu[size] == "number")) {
         menu[size] *= 2
      }
   }
}

multipluNumeric(menu);
console.log(menu.width);
multipluNumeric(menu);
console.log(menu.width);
multipluNumeric(menu);
console.log(menu.width);
*/