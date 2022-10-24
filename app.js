const http = require('http')
const fs = require('fs');

const routes = require('./routes')
const express = require('express')
// import express as a function
const app = express()
// here, we only import a function, which is why we can write createServer(routes), if an object, we would have said ,
// createServer(routes.func)
app.use('/add-product', (req, res, next) => {
    console.log('add product page\n');
    res.send('<h1>this is the add-product page</h1>')
})
app.use('/', (req, res, next) => {
    console.log('in the middleware');
    next();
})
//even if i give the path, it is still logging the other middleware blocks, why??
app.use((req, res) => {
    console.log('in the next middleware')
    res.send("<h1>this is a header</h1>")
    // console.log('============test=====================')
})



// const server = http.createServer(appfunc);
// console.log(process.env.NODE_ENV);
app.listen(3500)