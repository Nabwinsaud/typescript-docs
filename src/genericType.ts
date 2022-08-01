// suppose we have function

function merge(obj1: object, obj2: object) {
  return Object.assign(obj1, obj2);
}

console.log(merge({ name: "Nabin" }, { age: 19 }));

const mergedObj = merge({ name: "Nabin" }, { age: 19 });
// console.log(mergedObj.name); // cannot access name but in javascript it works fine

// to fix this we need generic
const employees: string[] = [];
const employe: Array<string> = [];
// both are same

function merged<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}
const mergedObjs = merged({ name: "Nabin coder" }, { age: 29 });
console.log(mergedObjs.name);
// now i can access name ,age

// we pass anything we want ,it is a object of anytype
// we can specfic which type is it at calling function time

// for examples
// one thing it provide reuseablity that means we can use it as much as we want

const mergedObjs1 = merged(
  { name: "Nabin", skills: ["React", "Tailwind", "firebase", "Express"] },
  { salary: 3000 }
);

// adding custom types such as string number
// const mergedObjs2 = merged<string, number>("Nabin", 300);
const mergedObj3 = merged<
  { name: string; hobbies: string[] },
  { tution: number }
>({ name: "Nabin", hobbies: ["music", "coding", "outing"] }, { tution: 3000 });

// extend constrain
// up to now we have decalred our function which can be anything now we want to restrict certain types may be object ,number or string
// lets implement this
// merged1, merged is already created so
// remember T and U are convention we can create any Names such as X,Y
function merged1<T extends object, U extends object>(obj1: T, obj2: U) {
  // now we restrict the type only to object
  return Object.assign(obj1, obj2);
}

// lets call out function

const mergedObject = merged1(
  { title: "Spiderman ! No way Home", released: "2022" },
  { earning: 2000000000 }
);
// as we can see it should be a object of any type such as string or number but should be object
// if i changed object to number or string it will complain

// another generic practices
interface Lengths {
  length: number;
}
function printLengthAndText<T extends Lengths>(text: T) {
  let message = "zero length";
  if (text.length === 1) {
    message == "length of text is 1 ";
  } else if (text.length > 1) {
    message = `length of text is ${text.length}  `;
  }
  // return { text, message };
  return [text, message];
  // return message;
}

console.log(printLengthAndText("Hello"));
