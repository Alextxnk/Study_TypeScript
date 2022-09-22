"use strict";
// const a: number = 5;
// 3 урок - базовые типы в TypeScript 
let a = 4;
let str = 'hello';
let bool = true; // TypeScript может сам привоить типы 
// const b = a + bool; // выдаст ошибку, т.к. нельзя складывать число и булевое значение
let arr = ['fdkl', 'vrt', 'vtmt']; // массив строк, если в него передать число, то будет ошибка 
// так же в TypeScript есть специальный тип, который называется any 
let e = 3;
e = 'vrjgn';
// если мы попытаемся типу number переприсвоить string, то будет ошибка,
//  а типу any мы можем переприсвоить другой тип данных 
//  тип any не рекомендуется использовать в Production 
// в круглых скобках указываем, какой тип принимает функция, после круглых скобок указываем, какой тип вернет функция 
function test(a) {
   return '';
}
// функция может вернуть string или number, такая конструкция может быть применима и к простому объявлению переменной 
function test1(a) {
   return '';
}
const test2 = (a) => {
   return a * 2;
};
// аналогично типизируются map, reduce и прочие функции работы с массивами 
arr = arr.map(x => x.toLowerCase()); // можно явно указать тип у x - (x: string)
// long? означает number | undefined
function countCoord(coord) {}
// union types: string | number могут быть проверены по типизации 
// union types обозначает, что id может быть как number, так и string
// есть еще safety types, чтоб можно было сделать проверку на тип 
function printIt(id) {
   if (typeof id === 'number') {
      console.log(id.toString());
   } else if (typeof id === 'string') {
      id.toUpperCase();
   }
}
// аналогичные проверки можно сделать и для массивов 
// функция принимает число, либо массив чисел 
function getSum(a) {
   if (Array.isArray(a)) {}
}
// если функция ничего не возвращает, пишем void, который будет означать, что функция ничего не вернет 
const test3 = (a) => {
   return;
};
const x = undefined;
const n = null;
// таким способом мы можем разгрузить функции 
function print(coord) {}
// далее посмотрим, как работает каст (as) к типам 
const c = (point) => {
   // const d: I3DPoint = point; // такое вызовет ошибку, потому что мы не можем приветси  I3DPoint к point
   const d = point; // так будет работать 
};
// const myCanvas = document.getElementById('canvas'); // myCanvas будет HTMLElement | null
const myCanvas = document.getElementById('canvas'); // вот так работает каст 
// 6 урок - литеральные типы 
let k = 'test';
// в итоге case может быть только двух значений up | down
// тоесть мы ограничиваем наборы действий по этому action это немного напомниет Enums их разберем дальше 
// тоесть фактически мы ограничили просто некоторый строковый вход (выход) этого типа конкретными значениями 
// это и есть литреальный тип 
// еще функция будет возвращать литеральный тип нумерический -1 | 1
// мы обозначили, что принимаем литеральный строковый тип на вход action, а возвращаем литеральный нумерический тип
function performAction(action) {
   switch (action) {
      case 'up':
         return 1;
      case 'down':
         return -1;
   }
}

function performActionComplex(action) {
   switch (action) {
      case 'up':
         return 1;
      case 'down':
         return -1;
   }
}
// 7 урок - Enums 
// Enums полезно использовать, когда мы хотим ограничить область значений той или иной переменной 
// по аналогии с литеральными типами мы можем задать ограниченный набор значений, который сможет принимать переменная
// которая будет являться типом данного Enum, их удобней использовать, по-сравнению с обычными литеральными типами 
// автоматически значениям будут присвоены "индексы" , начиная с 0
// это числовое представление Enum
// по-умолначанию такой Enum называется числовым, есть еще строковый Enum
// кроме этого, мы можем задать с какого числа начнется отчет у числового Enum
var Direction;
(function (Direction) {
   Direction[Direction["Up"] = 0] = "Up";
   Direction[Direction["Down"] = 1] = "Down";
   Direction[Direction["Left"] = 2] = "Left";
   Direction[Direction["Right"] = 3] = "Right"; // 3
})(Direction || (Direction = {}));
// если мы вручнуню зададим число, то последующие значения увеличатся
var Direction2;
(function (Direction2) {
   Direction2[Direction2["Up"] = 1] = "Up";
   Direction2[Direction2["Down"] = 2] = "Down";
   Direction2[Direction2["Left"] = 3] = "Left";
   Direction2[Direction2["Right"] = 4] = "Right"; // 4
})(Direction2 || (Direction2 = {}));
// строковый Enum
var StringDirection;
(function (StringDirection) {
   StringDirection["Up"] = "UP";
   StringDirection["Down"] = "DOWN";
   StringDirection["Left"] = "LEFT";
   StringDirection["Right"] = "RIGHT";
})(StringDirection || (StringDirection = {}));
// также бывает необходимо задавать гетерогенные Enums, у которых часть значений числовые, часть - строковые 
var Decision;
(function (Decision) {
   Decision[Decision["Yes"] = 1] = "Yes";
   //No = 'No',
   Decision[Decision["Calc"] = calcEnum()] = "Calc";
})(Decision || (Decision = {}));
// также Enums могут быть расчетными, например мы хотим рассчитать значение, 
// которое будет принимать Enum при значении No 
function calcEnum() {
   return 2;
}
// также Enum в Runtime можно использовать как объекты, пригождается это крайне редко 
function runEnum(obj) {}
// в качестве этого объекта мы можем использовать:
runEnum(StringDirection);
// также у Enums есть понятие обратного мапинга, когда нам нужно получить строковые значения какого-то из Enums
var Test;
(function (Test) {
   Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let testEnum = Test.A; // 0
let nameA = Test[testEnum]; // A
let cnst = 0 /* constEnum.A */ ;
// пример с гранями
var Dice;
(function (Dice) {
   Dice[Dice["One"] = 1] = "One";
   Dice[Dice["Two"] = 2] = "Two";
   Dice[Dice["Three"] = 3] = "Three";
})(Dice || (Dice = {}));

function ruDice(dice) {
   switch (dice) {
      case Dice.One:
         return 'Один';
      case Dice.Two:
         return 'Два';
      case Dice.Three:
         return 'Три';
      default:
         const a = dice; // присвоили переменной, которая никогда не должна быть присвоена значение dice
   }
}
// тип never обозначает, что эта переменная никогда не примет значения
// это одно из полезных свойств типа never, котрое можно использовать с Enums
// 8 урок - тип Tuple - Кортеж
// Кортежи помогают нам хранить значения разных типов в некотором массиве, 
// при компиляции в JS мы получаем массив
// в рамках Кортежа соблюдается его длина и порядок элементов в этом Кортеже, при инициализации
const cort = [0, 'one', 1]; // Кортеж
// сам по себе Кортеж обладает похожими методами с обычным массивом 
// позже можно проводить различные операции с кортежем, в том числе и доавление элементов
cort.push('two');
// но после пуша мы не сможем обратиться к новому элементу
// обычно кортежи используются в качестве неизменяемых значений, с точки зрения длины всего кортежа
// тоесть это четко заданная структура 
// в кортежах удобно хранить разные данные, если они относятся к одному объекту 
// и например нам не хочется это хранить в объекте потому что они какие-то однотипные 
// тогда мы можем использовать кортеж
// также кортежу мы можем сказать, что делаем функцию map
// и в рамках этого мапа мы можем проходиться по нашему кортежу
// при этом для того чтобы определить тип мы можем использовать typeof
cort.map(s => {
   switch (typeof s) {
      case 'string':
         break;
      case 'number':
         break;
   }
});
// мы спокойно можем делать map этого массива, менять его значения, 
// в зависимости от типа данных, которые там находятся 
// также мы можем деструктурировать наши кортежи также, как мы это делаем с массивами 
const [j, d, f] = cort; // тем самым мы деструктурировали наш кортеж 
// j - number, d - string, f - number
// мы можем использовать spread (rest оператор) и сказать, что 
const [v, ...m] = cort; // v - number, m - кортеж, котрый содержит остаток: string, number
// благодаря этому мы можем, например, вытаскивать первый элемент, 
// а все остальное оставлять в соответсвующем кортеже
// также если мы обратимся к элементу TypeScript определит его тип и предложит необходимые методы
cort[0].toString();
// поэтому четкая типизация по каждому из элементов, который мы будем доставать из массива у нас работает
// 9 урок - Generics