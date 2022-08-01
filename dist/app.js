"use strict";
// interface is typescript
const user = {
    name: "John",
    age: 20,
};
function getLength(obj) {
    return obj.length;
}
// console.log(getLength("Nabin"));
console.log(getLength(['Nabin', 'coder', 'hustle']));
const typeChecked = (obj) => {
    if (typeof obj === 'string') {
        return [obj];
    }
    return obj[0].toUpperCase();
};
console.log(typeChecked(['Nabin', 'coder']));
