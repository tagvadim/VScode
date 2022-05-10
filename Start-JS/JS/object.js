"use strict"
let mySymbol = Symbol("VadimAge");
// Создаем объект и присваиваем его к переменной bor
let bor = {
   myCity: "Taganrog",
   street: "Pushkin",
   home: 170,
   "Aborigine": {
      Jora: 5,
      Gena: 3,
      Maria: 2,
      Lena: 6,
      children: {
         kids: 12,
         teens: 17,
      }
   },
   postcode: 347458,
   [mySymbol]: "42 age Vadim",
};

/*let anyKey = prompt ("Введите название свойства");
bor[anyKey] = 777; // получение вычисляемого свойства anyKey через prompt с добавлением его в объект bor. */
//*************** */

console.log(bor["street"]); // получаем значение от street, через [] скобки
console.log(bor.home); // получаем значение от home, через точку
console.log(bor.myCity); // получаем значение от site, через точку
console.log(bor.Aborigine.children.teens);
console.log(bor[mySymbol]); // получаем значение от символа "mySymbol"
//************** */

console.log("home" in bor); // true, проверяем наличие свойства (ключа) home в объекте bor.
console.log("Aborigine" in bor); // true, проверяем наличие свойства (ключа) "Aborigine Jora" в объекте bor.
console.log("square" in bor); // false, нет свойства (ключа) square в объекте bor.
//************** */

for (let keks in bor) {
   //console.log(keks); // выводим перебором все свойства (ключи) в объекте
   //console.log(bor[keks]); // выводим все значения свойств в объекте
   console.log(keks, "-", bor[keks]); // выводим "свойство" - "значение" в одной строке
}

// alert (bor?.Aborigine?.Jora);
