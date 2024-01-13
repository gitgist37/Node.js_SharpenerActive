const http = require('http');

const server = http.createServer((req,res)=>
{
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Test Server</title></head>');
    res.write('<body>My name is Shubham Jamuda</body>');
    res.write('</html');
    res.end();
});

server.listen(4000);