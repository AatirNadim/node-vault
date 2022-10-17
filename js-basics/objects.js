const person = {
    name : 'Nadim',
    age :29,
    greet : function () {
        console.log('this is an object function')
        console.log('use of this keyword, my name is ' + this.name)
    },
    greet1() {
        console.log('another way to write function')
    }

}
console.log(person)
// console.log(person.name)
person.greet()
// arrow function shows undefined because it refers to the global scope, use the function keyword or the other way described

