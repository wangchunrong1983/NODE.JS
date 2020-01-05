
class Person {
    constructor(name,age){
    this.name = name,
    this.age = age
}
    greeting(){
        console.log(`Her name is ${this.name} and she is ${this.age} years old.`)
    }
}

module.exports = Person;