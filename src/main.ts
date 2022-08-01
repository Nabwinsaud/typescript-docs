// Generics
// Generics provide variables to types.
//  A common example is an array. 
// An array without generics could contain anything. 
// An array with generics can describe the values that the array contains.



// type annotation
interface Students{
    name:string,
    age:number
}

let student=<Students> {};
student.name='Nabin';
console.log(student.name);