// const a: number = 5;

// 3 урок - базовые типы в TypeScript 
let a: number = 4;
let str: string = 'hello';
let bool = true; // TypeScript может сам присвоить типы 
// const b = a + bool; // выдаст ошибку, т.к. нельзя складывать число и булевое значение

let arr: string[] = ['fdkl', 'vrt', 'vtmt']; // массив строк, если в него передать число, то будет ошибка 

// так же в TypeScript есть специальный тип, который называется any 
let e: any = 3;
e = 'vrjgn';

// если мы попытаемся типу number переприсвоить string, то будет ошибка,
//  а типу any мы можем переприсвоить другой тип данных 
//  тип any не рекомендуется использовать в Production 

// в круглых скобках указываем, какой тип принимает функция, после круглых скобок указываем, какой тип вернет функция 
function test(a: string): string {
   return '';
}

// функция может вернуть string или number, такая конструкция может быть применима и к простому объявлению переменной 
function test1(a: string): string | number {
   return '';
}

const test2 = (a: number): number => {
   return a * 2;
}

// аналогично типизируются map, reduce и прочие функции работы с массивами 
arr = arr.map(x => x.toLowerCase()); // можно явно указать тип у x - (x: string)

// long? означает number | undefined
function countCoord(coord: { lat: number, long?: number }) {

}

// union types: string | number могут быть проверены по типизации 
// union types обозначает, что id может быть как number, так и string
// есть еще safety types, чтоб можно было сделать проверку на тип 
function printIt(id: number | string) {
   if (typeof id === 'number') {
      console.log(id.toString());
   } else if (typeof id === 'string') {
      id.toUpperCase();
   }
}

// аналогичные проверки можно сделать и для массивов 
// функция принимает число, либо массив чисел 
function getSum(a: number | number[]) {
   if(Array.isArray(a)) {

   }
}

// если функция ничего не возвращает, пишем void, который будет означать, что функция ничего не вернет 
const test3 = (a: number): void => {
   return;
}

const x: undefined = undefined;
const n: null = null;


// 4 урок - интерфейсы и типы 

type Point = {
   x: number,
   y: number;
}

// intersection - таким образом типы тоже могут "экстендиться"
// не может начинаться имя с числа, поэтому поменяли местами 3D
type D3Point = Point & {
   z: number;
}

// а в таикх случаях более полезны интерфейсы 
interface IPoint {
   x: number;
   y: number;
}

type stringOrNumber = string | number; // типы больше полезны вот в таких случаях или когда мы хотим определить литеральные типы 

// таким способом мы можем разгрузить функции 
function print(coord: Point) {

}

// в TypeScript рекомендуется максимально использовать интерфейсы 
// в чем отпличие интерфейсов и типов 
// во-первых, один из интерфесов может exteds("экстендить") другое 
interface I3DPoint extends IPoint {
   z: number;
}
// типам не доступно добавление свойств в отличие от интерфейсов 


// если сделать так, то оба свойства будут имплементироваться, таким образом мы можем интерфейсы дополнять 
// у типов такое вызовет ошибку 
interface ITest {
   a: number;
}

interface ITest {
   b: number;
}

// далее посмотрим, как работает каст (as) к типам 
const c = (point: IPoint) => {
   // const d: I3DPoint = point; // такое вызовет ошибку, потому что мы не можем приветси  I3DPoint к point
   const d: I3DPoint = point as I3DPoint; // так будет работать 
}

// const myCanvas = document.getElementById('canvas'); // myCanvas будет HTMLElement | null
const myCanvas = document.getElementById('canvas') as HTMLCanvasElement; // вот так работает каст 


// 5 урок - упражение 

interface Info {
   desc: string;
   isActive: boolean
}

interface Tag {
   name: string;
   value: number;
}

interface Reply {
   userId: number;
   id: number;
   title: string;
   info: Info;
   tags: Tag[];
}

// 6 урок - литеральные типы 
let k: 'test' = 'test';

type actionType = 'up' | 'down';

// в итоге case может быть только двух значений up | down
// тоесть мы ограничиваем наборы действий по этому action это немного напомниет Enums их разберем дальше 
// тоесть фактически мы ограничили просто некоторый строковый вход (выход) этого типа конкретными значениями 
// это и есть литреальный тип 
// еще функция будет возвращать литеральный тип нумерический -1 | 1

// мы обозначили, что принимаем литеральный строковый тип на вход action, а возвращаем литеральный нумерический тип
function performAction(action: actionType): -1 | 1 {
   switch (action) {
      case 'up':
         return 1;
      case 'down':
         return -1;
   }
}

// также литеральные типы могут быть скомбинированны с обычными интерфейсами 
interface ComplexAction {
   s: string;
}

function performActionComplex(action: actionType | ComplexAction) {
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
enum Direction {
   Up,   // 0
   Down, // 1
   Left, // 2
   Right // 3
}

// если мы вручнуню зададим число, то последующие значения увеличатся
enum Direction2 {
   Up = 1,   // 1
   Down,     // 2
   Left,     // 3
   Right     // 4
}

// строковый Enum
enum StringDirection {
   Up = 'UP',   
   Down = 'DOWN', 
   Left = 'LEFT', 
   Right = 'RIGHT'
}

// также бывает необходимо задавать гетерогенные Enums, у которых часть значений числовые, часть - строковые 
enum Decision {
   Yes = 1,
   //No = 'No',
   Calc = calcEnum()
}

// также Enums могут быть расчетными, например мы хотим рассчитать значение, 
// которое будет принимать Enum при значении No 
function calcEnum() {
   return 2;
}

// также Enum в Runtime можно использовать как объекты, пригождается это крайне редко 
function runEnum(obj: { Up: string }) {

}

// в качестве этого объекта мы можем использовать:
runEnum(StringDirection);


// также у Enums есть понятие обратного мапинга, когда нам нужно получить строковые значения какого-то из Enums
enum Test {
   A
}

let testEnum = Test.A; // 0
let nameA = Test[testEnum]; // A


// как Enums представленны в Runtime можно увидеть в JS файле

// часто Enums нужны нам как константы, они помогают нам экономить ресурсы 

const enum constEnum {
   A,
   B
}
let cnst = constEnum.A;


// пример с гранями
enum Dice {
   One = 1,
   Two,
   Three
}

function ruDice(dice: Dice) {
   switch(dice) {
      case Dice.One:
         return 'Один';
      case Dice.Two:
         return 'Два';
      case Dice.Three:
         return 'Три';
      default:
         const a: never = dice; // присвоили переменной, которая никогда не должна быть присвоена значение dice
   }
}
// тип never обозначает, что эта переменная никогда не примет значения
// это одно из полезных свойств типа never, котрое можно использовать с Enums


// 8 урок - тип Tuple - Кортеж
// Кортежи помогают нам хранить значения разных типов в некотором массиве, 
// при компиляции в JS мы получаем массив

// в рамках Кортежа соблюдается его длина и порядок элементов в этом Кортеже, при инициализации
const cort: [number, string, number] = [0, 'one', 1]; // Кортеж
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
   switch(typeof s) {
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
// часто нам необходимо писать не просто правильный и хорошо типизированный код, 
// но и тот код, который можно легко переиспользовать 
// одним из инструментов такой возможности переиспользования кода являются Generics
// они позволяют использовать функции или другие объекты для разных типов данных 

function logTime(num: number):number {
   console.log(new Date());
   return num;
}

// елси нам понадобится тоже самое для строки, то прийдется дублировать код
// в TypeScript есть удобный инструмент - Generics


// мы можем в таких скобках: <> перед объявлением аргементов функции, передать некоторый T
// T - это Generics тип, который мы можем в последствии использовать, 
// как в аргументе, так и на выходе функции, так и внутри функции, если это будет необходимо  
function logTimeGen<T>(num: T):T {
   console.log(new Date());
   return num;
}

// теперь если нам нужен определенный тип:
logTimeGen<string>('hello');
logTimeGen<number>(25);

// также мы можем использовать все прелести "тайпгардов", 
// которые присутствуют и при обычном использовании number или string
function logTimeGen2<T>(num: T):T {
   if (typeof num === 'string') {
      num.toLowerCase();
   }
   return num;
}

// аналогично Generics можно использовать и в описании интерфейсов 
interface MyInterface {
   transform: <T, F>(a: T) => F;
}

// также можно использовать Generics в классах
/* class MyGenClass<T> {
   value: T; // свойство класса 
}

const gen = new MyGenClass<number>();
gen.value; // number */


// также Generics, как и любые другие типы могут extends что-то 
interface TimeStamp {
   stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T):T {
   console.log(num.stamp); // мы берем свойтсво из интерфейса 
   return num;
}


// 10 урок - JSX
// JSX - это неотъемлемая часть React, на которой мы будем писать весь оставшийся курс 
// во-первый нужно расширение файла, .jsx или .tsx, далее файл test.tsx