// there are two way of decalaring array in typescript
//1 one is square type
// 2 another is genreric type

let fruits: string[] = ["Apple", "Banana", "grapes"];

// generic method
let num: Number = 10;
let num1: number = 20;
let dairyProduct: Array<string> = ["Curd", "Milk", "Ghee", "Butter"];

// union

let price: string | number;
price = 100;
price = "$200";
console.log(price);
// console.log(price)

// passing union types
let arrTypes: number[] | string[];
arrTypes = [1, 2, 3];

arrTypes = ["Nabin", "John"];

// union can replace enums
const enum colors {
  RED,
  BLUE,
  GREEN,
}

type color = "red" | "white" | "blue";
const favColor: color = "red";
console.log(favColor.toUpperCase());

enum direction {
  UP,
  left,
  right,
  down,
}

console.log(direction);

// let number01: number;
// let number02: number;
function greet(number01: number, number02: number) {
  console.log("This is void");
  //   return 1
  return number01 + number02;
}

let value: any;
value = 10;
value = "String";
value = false;

// let positons: { x: number; y: number } = { x: 10, y: 20 };

function getRandom(): { x: number; y: number } {
  return { x: Math.floor(Math.random() * 10), y: Math.random() * 20 };
}

console.log(getRandom());

//excess in typescript

function printNames(person: { first: string; last: string; age: number }) {
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

let positon: { x: number; y: number } = { x: 10, y: 20 };

// instead of doing {x:number ,..something}
// we can  define type

// type Position = {
//   x: number;
//   y: number;
// };
// let position: Position = { x: 1, y: 2 };

//like this

// nested object

type Data = {
  studentname: string;
  age: number;
  fee: number;
  present: number;
  information: {
    currentCity: string;
    permanentAddress: string;
  };
};
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

const studentPortal = (data: Data): number => {
  return data.fee * 0.25;
};

// optional in typescript

type Reward = {
  jan: number;
  feb: number;
  march?: number;
};

const reward: Reward = {
  jan: 230,
  feb: 400,
};

interface User {
  readonly id: number;
  username: string;
}

const users: User = {
  id: 123,
  username: "Nabin",
};

console.log(users.id); // work fine
// but if i tries to update it will throw error
// users.id=234;
