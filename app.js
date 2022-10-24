const http = require('http')
const fs = require('fs');

const routes = require('./routes')
const express = require('express')
const bodyParser = require('body-parser');
// import express as a function
const app = express()
// here, we only import a function, which is why we can write createServer(routes), if an object, we would have said ,
// createServer(routes.func)
app.use(bodyParser.urlencoded({extended : false}));
//parse bodies sent through the mail
app.use('/', (req, res, next) => {
    console.log('first')
    next();
})
app.use('/add-product', (req, res, next) => {
    console.log('add product page\n');
    res.send('<h1>this is the add-product page</h1><form action = "/product" method = "POST"><input type = "text" name = "aatir"><button type = "submit">click me</button></form>')
    // res.send('')
})
app.post('/product', (req,res, next) => {
    console.log('--------' , req.body, '------------') //undefined without the body parser
    // res.send('this is the products page');
    //using the parser we get js object, with the key as the name attribute in the input tag
    res.redirect('/');
})
app.get('/product', (req, res, next) => {
    res.send('<h1>this is the product page</h1>');
})
app.use('/add-product', (req, res, next)=> {
    res.send('<h1>here is another page for the add-product util</h1>')
})
app.use('/', (req, res, next) => {
    console.log('in the middleware');
    next();
})
//even if i give the path, it is still logging the other middleware blocks, why??
app.use('/', (req, res) => {
    console.log('in the next middleware')
    res.send("<h1>this is a header</h1>")
    // console.log('============test=====================')
})

app.use((req, res, next) => {
    res.send('<h1>this is the 404 page</h1>')
})


// const server = http.createServer(appfunc);
// console.log(process.env.NODE_ENV);
app.listen(3500)