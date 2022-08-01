"use strict";
// there are two way of decalaring array in typescript
//1 one is square type
// 2 another is genreric type
let fruits = ["Apple", "Banana", "grapes"];
// generic method
let num = 10;
let num1 = 20;
let dairyProduct = ["Curd", "Milk", "Ghee", "Butter"];
// union
let price;
price = 100;
price = "$200";
console.log(price);
// console.log(price)
// passing union types
let arrTypes;
arrTypes = [1, 2, 3];
arrTypes = ["Nabin", "John"];
const favColor = "red";
console.log(favColor.toUpperCase());
var direction;
(function (direction) {
    direction[direction["UP"] = 0] = "UP";
    direction[direction["left"] = 1] = "left";
    direction[direction["right"] = 2] = "right";
    direction[direction["down"] = 3] = "down";
})(direction || (direction = {}));
console.log(direction);
// let number01: number;
// let number02: number;
function greet(number01, number02) {
    console.log("This is void");
    //   return 1
    return number01 + number02;
}
let value;
value = 10;
value = "String";
value = false;
// let positons: { x: number; y: number } = { x: 10, y: 20 };
function getRandom() {
    return { x: Math.floor(Math.random() * 10), y: Math.random() * 20 };
}
console.log(getRandom());
//excess in typescript
function printNames(person) {
    console.log(`${person.first},${person.last},${person.age}`);
}
const information = {
    first: "Nabin",
    last: "Saud",
    age: 19,
    profession: "Programmer",
};
printNames({ first: "nabin", last: "saud", age: 19 });
// with excess we can get the output easily
// type alias
let positon = { x: 10, y: 20 };
// const studentPortal = (data: {
//   studentname: string;
//   age: number;
//   fee: number;
//   present: number;
//   information: {
//     currentCity: string;
//     permanentAddress: string;
//   };
// }) => {};
const studentPortal = (data) => {
    return data.fee * 0.25;
};
const reward = {
    jan: 230,
    feb: 400,
};
const users = {
    id: 123,
    username: "Nabin",
};
console.log(users.id); // work fine
// but if i tries to update it will throw error
// users.id=234;
