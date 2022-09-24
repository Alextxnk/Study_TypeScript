"use strict";
// 10 урок - JSX
// JSX - это неотъемлемая часть React, на которой мы будем писать весь оставшийся курс 
// во-первый нужно расширение файла, .jsx или .tsx
// это позволит нам сказать нашему компиляору о том, что здесь будет присутствовать JSX
// также нужно скорректировать tsconfig.json 16 строчка: "jsx": "react",  
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// далее команда в консоли: npm i react
// npm i -D @types/react // D - devDependencies
const react_1 = __importDefault(require("react"));
// создаем переменную a типа JSX, JSX позволяет нам растипизировать (что-то там)
// JSX.Element - это namespace для React элементов
// вот так мы объявили один JSX элемент 
// JSX элементы можно объединять друг в друга 
// если внутри этого синтаксиса мы хотим использовать JS или TS, то нужно поставить {}
// крайне важно понимать, что это не HTML
// JSX - это более удобная запись обычного React.createElement
const a = react_1.default.createElement("div", { tabIndex: 0 }, 1 + 1);
const b = react_1.default.createElement('div', { tabIndex: 0 }, 1 + 1);
// небольшое замечание по поводу каста типов
//const str = str2 as string;
