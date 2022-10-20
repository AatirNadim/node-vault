// const { fchownSync } = require('fs');
const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
    // console.log(req.url, req.method, req.headers)
    res.setHeader('Content-Type', 'text/html')
    const url = req.url;
    const method = req.method;
    
    console.log(url)
    if(url === '/' || url === '/home') {
        res.write('<html><head><title>Home</title></head><body>this is the homepage</body></html>');
        return res.end();
    }
    else if(url === '/test') {
        res.write('<html><head><title>Test</title></head><body>this is test page</body></html>');
        return res.end();
    }
    else if(url === '/form') {
        res.write('<html><head><title>Form</title></head><body><form action = "/aatir" method = "POST"><input type = "text" name = "nadim"><button type = "submit">this is a button</button></form></body></html>');
        return res.end();
    }
    else if(url === '/aatir' && method === 'POST') {
        fs.writeFileSync('./message.txt', 'this is the action message');
        res.statusCode = 302; //for redirecting
        res.setHeader('Location', '/home')
        return res.end();
    }
    else {
        res.write('<html><head><title>Error 404</title></head><body>this is 404 page</body></html>');
    }
    // res.end();
})

server.listen(3400);