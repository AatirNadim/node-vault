// const http = require('http')
// const fs = require('fs');

// const routes = require('./routes')
const express = require('express')
const bodyParser = require('body-parser');
// import express as a function
const path = require('path')
const adminobj = require('./routes/admin_route')
const userRoutes = require('./routes/user_route');
const app = express()
// here, we only import a function, which is why we can write createServer(routes), if an object, we would have said ,
// createServer(routes.func)
app.use(bodyParser.urlencoded({extended : false}));
//parse bodies sent through the mail
// console.log(__dirname)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',adminobj.routes);
app.use('/user', userRoutes);
//this is for handling undefined path



app.get('/', (req, res) => {
    // res.send('<h1>in the homepage</h1>')
    res.sendFile(path.join(__dirname, 'views', 'index.html'))
})

// app.get('*', (req, res, next) => {
//     res.send('<h1>in the errsdfkshf</h1>')
// })

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})


// const server = http.createServer(appfunc);
// console.log(process.env.NODE_ENV);
app.listen(3500);