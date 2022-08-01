"use strict";
// intersection
const favDogColor = {
    color: "white",
    name: "Siberian husky",
    liveSpan: 10,
};
console.log(favDogColor);
// literal types
let reaction = "Happy";
let today = "Sunday";
const user1 = {
    name: "Nabin",
    age: 19,
    greet: () => {
        console.log("Hello");
    },
    //   greet: () => {
    //     return "Hello";
    //   },
};
const product = {
    name: "Dell monitor",
    price: 100,
    applyCupon(amount) {
        const newPrice = this.price * (amount - 10);
        this.price = newPrice;
        return this.price;
    },
};
console.log(product.applyCupon(20));
// we can combine both into a object
const tommy = {
    name: "Tommy",
    lifeSpan: 10,
    breed: "Siberian husky",
    bark() {
        return "Tommy barked at stranger";
    },
};
console.log(tommy.bark());
const rocky = {
    name: "Rocky",
    lifeSpan: 12,
    breed: "German sephard",
    bark() {
        return "Rocky barked at strangers loudly";
    },
    job: "home day",
};
console.log(rocky);
const developer = {
    name: "Nabin",
    id: 123,
    email: "nabin@awesome.com",
    level: "Mid level",
    languages: ["Javascript", "Typescript", "Python"],
    skills: ["React", "Tailwindcss", "HTML", "CSS"],
};
