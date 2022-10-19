//also called app.js in a project
//core modules
// http --> launch a server, send request
// https --> launch ssl server
// fs
// os
// path
const http = require('http');
// with require, we can import custom javascript files
// const http = require('./http') will import from local dir
// const http = require('http') will look for global module

const server = http.createServer((req,res) => {
    console.log('inside the function')
    console.log(req);
    // to quit the server after functioning -->
    // process.exit()
});

server.listen(3000);

