// const fetch = (callback)=> {
//     console.log('inside the fetch function')
//     setTimeout(() => callback('timer is done'), 1500)
// }

// setTimeout(() => {
//     fetch((text) => {
//         console.log('data recieved --> ' + text)
//     })
// }, 2000)

// setTimeout(() => {console.log('hello there-----------')}, 0.01)

// console.log('hello')
// console.log('hello again')

//using promises instead 
const fetchData = () => {
    const promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('inside the promise function')
            resolve('this is it')
        
        }, 2000)
    })
    return promise;
}

setTimeout(() => {
    fetchData()
    .then((text) => {
        console.log('message from the resolve --> ', text)
        return fetchData()
    })
    .then((text) => {
        console.log('this is the other then block --> ', text)
    })
}, 2000)