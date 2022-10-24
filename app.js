// const http = require('http')
// const fs = require('fs');

// const routes = require('./routes')
const express = require('express')
const bodyParser = require('body-parser');
// import express as a function

const adminRoutes = require('./routes/admin_route')
const userRoutes = require('./routes/user_route')
const app = express()
// here, we only import a function, which is why we can write createServer(routes), if an object, we would have said ,
// createServer(routes.func)
app.use(bodyParser.urlencoded({extended : false}));
//parse bodies sent through the mail

app.use(adminRoutes);
app.use(userRoutes);
app.use((req, res) => {
    res.send('<h1>this is the 404 page</h1>')
})

// const server = http.createServer(appfunc);
// console.log(process.env.NODE_ENV);
app.listen(3500);