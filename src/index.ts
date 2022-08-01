// intersection

type FavColor = {
  color: string;
};

type FavDog = {
  name: string;
};

// type FavDogColor = FavColor & FavDog;

// another intersection can be done like nesting

type FavDogColor = FavColor &
  FavDog & {
    liveSpan: number;
  };

const favDogColor: FavDogColor = {
  color: "white",
  name: "Siberian husky",
  liveSpan: 10,
};

console.log(favDogColor);

// literal types

let reaction: "Happy" | "Sad" = "Happy";

type holiday =
  | "Sunday"
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday";

let today: holiday = "Sunday";

interface UserData {
  name: string;
  age: number;
  // greet:()=>string,
  //   greet(): string;
  greet?(): any;
}

const user1: UserData = {
  name: "Nabin",
  age: 19,
  greet: () => {
    console.log("Hello");
  },
  //   greet: () => {
  //     return "Hello";
  //   },
};

interface Product {
  name: string;
  price: number;
  applyCupon(discount: number): number;
  //   takes number return number
}

const product: Product = {
  name: "Dell monitor",
  price: 100,
  applyCupon(amount: number) {
    const newPrice = this.price * (amount - 10);
    this.price = newPrice;
    return this.price;
  },
};

console.log(product.applyCupon(20));

// interface vs type

//  interface can be duplicate but type cannot be

interface Dog {
  name: string;
  lifeSpan: number;
}

interface Dog {
  breed: string;
  //   bar(): string;
  bark: () => string;
}

// we can combine both into a object

const tommy: Dog = {
  name: "Tommy",
  lifeSpan: 10,
  breed: "Siberian husky",
  bark() {
    return "Tommy barked at stranger";
  },
};

console.log(tommy.bark());

// extending interface

interface DangerDog extends Dog {
  job: "Danger dog" | "Security dog" | "home day";
}

const rocky: DangerDog = {
  name: "Rocky",
  lifeSpan: 12,
  breed: "German sephard",
  bark() {
    return "Rocky barked at strangers loudly";
  },
  job: "home day",
};

console.log(rocky);

// interface multiple inheritance

interface Person {
  name: string;
}
interface Employee {
  readonly id: number;
  email: string;
}

interface Developer extends Person, Employee {
  level: string;
  languages: string[];
  skills: string[];
}

const developer: Developer = {
  name: "Nabin",
  id: 123,
  email: "nabin@awesome.com",
  level: "Mid level",
  languages: ["Javascript", "Typescript", "Python"],
  skills: ["React", "Tailwindcss", "HTML", "CSS"],
};
