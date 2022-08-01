// union in typescript
// With a union, you can declare that a type could be one of many types. For example, you can describe a boolean type as being either true or false:
type isMarried=true | false

interface Users{
    name:string,
    age:number,   
}

// interface is typescript
const user:Users={
    name:"John",
    age:20,
}

function getLength(obj:string | string[]){
    return obj.length;

}

// console.log(getLength("Nabin"));
console.log(getLength(['Nabin','coder','hustle']));

const typeChecked=(obj:string | string [])=>{
    if(typeof obj==='string'){
        return [obj]
    }
    return obj[0].toUpperCase();

}

console.log(typeChecked(['Nabin','coder']))