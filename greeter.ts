class Person{
    constructor(public first:string, public second:string){
    }
}

function greeter(person: Person) {
    return "Hello, " + person.first + " " + person.second;
}

let user = new Person("Satou","Tarou");
console.log(greeter(user));
