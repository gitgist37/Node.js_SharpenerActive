const http = require('http');

const server = http.createServer((req,res)=>
{
    const url = req.url;
    
    if(url==='/home')
    {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Test Server</title></head>');
    res.write('<body><em>Welcome home</em></body>');
    res.write('</html');
    return res.end();
    }

    if(url==='/about')
    {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Test Server</title></head>');
    res.write('<body><em>Welcome to About Us page</em></body>');
    res.write('</html');
    return res.end();
    }

    if(url==='/node')
    {
    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Test Server</title></head>');
    res.write('<body><b>Welcome to my Node Js Project</b></body>');
    res.write('</html'); 
    return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>My First Test Server</title></head>');
    res.write('<body>Welcome to my Node Js Project</body>');
    res.write('</html');
    res.end();
});

server.listen(4000);