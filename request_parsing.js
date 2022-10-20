const http = require('http')
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;
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
        const chunkArr = [];
        let streamStr= "";
        req.on('data', (chunk) => {
            chunkArr.push(chunk);
            console.log(chunk)
        }) //registering an event listener
        // console.log(chunkArr);
        req.on('end', () => {
            const streamBuffer = Buffer.concat(chunkArr);
            streamStr = streamBuffer.toString();
            console.log(streamStr);    
            // fs.writeFileSync('./message.txt', 'temp file')
            fs.writeFileSync('./message.txt', streamStr);
        })
        //req events do not get executed the same as the main body
        //req events ge executed after we send the response to the client
        res.statusCode = 302;
        res.setHeader('Location', '/home')

        // console.log({streamStr}); 
        // console.log(typeof streamStr);
        
        return res.end();
    }
});

server.listen(3400)