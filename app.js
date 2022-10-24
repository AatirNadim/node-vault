const http = require('http')
const fs = require('fs');

const routes = require('./routes')
// here, we only import a function, which is why we can write createServer(routes), if an object, we would have said ,
// createServer(routes.func)

const server = http.createServer(routes);
// console.log(process.env.NODE_ENV);
server.listen(3500)