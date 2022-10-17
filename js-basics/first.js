//type switching

let a = 10
a = 'happy'
console.log(a)

const summarize1 = () => {
    return 'this is the arrow function'
}

function summarize(userName, userAge, userId) {
    a = 122212
    return `name --> ${userName}, age --> ${userAge}, id --> ${userId}`
}
console.log(summarize('aatir', 2333, 'aatir.nadim'))
console.log(summarize1())
const func = (a, b) => {return a + b;}
const func1 = (a, b)=> ++a
console.log(func(23,34))
console.log(func1(21))