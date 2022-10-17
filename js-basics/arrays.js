const arr1 = [1,2,3445,[2, 3, 'tim'], 'hobbies']
arr1.forEach((itr) => console.log(itr))

const arr2 = arr1.map((itr) => {
    return typeof(itr)
})
console.log(arr2)
console.log(...arr1.map((itr) => {
    return itr + itr
}))

const val1 = [1,2,3], val2 = [1,2,3, 4]
console.log(val1 + val2)
//this works just fine


val1.push({
    type :'number',
    val : 123
})

// val1 = [1,2,3]

//working with spread and rest operators
// here, works as rest operator
const fun2 = (...args) => {
    console.log(args)
}


fun2('aatir', 'nadim', 12, {name:'aatir', age : 123})


const val3 = val2.slice() //0 passed as the start default value
const val4 = [val3] //nested operator
const val5 = [...val3]
console.log(val3)
console.log(val4)
console.log(val5)


const val6 = {...val5} //this works fine as well
console.log(val6)