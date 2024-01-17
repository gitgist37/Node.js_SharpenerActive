const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>
{
   
    const url = req.url;
    const method = req.method;
    if(url==='/')  // first time it encounters homepage
    {
        
        fs.readFile('hello.txt',{encoding:'utf-8'},(err,value)=>
            {
                if(err)
                {
                console.error(err);
                }
                console.log("data fetched from file is",value);
                res.write('<html>');
                res.write('<head><title>Retrieved Data</title></head>');
                res.write(`<body>${value}`);
                res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
                res.write('</html');
                console.log('Ye hamara last hai');
                res.end();
                });
    }

    if(url ==='/message' && method ==='POST') // after submission of data, php form trigger
    {
        
        const body = [];
        req.on('data',(traffic)=>
        {
            //console.log(traffic);
            body.push(traffic);
        });

        req.on('end',()=>
        {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFileSync('hello.txt', message);
            
        });

        res.statusCode = 302;
        res.setHeader('Location','/');
        return res.end();
        // res.end();
    }
        // if(url==='/') // redirecting from action.php to localhost
        // {
        //     console.log("Yaha aya hai");
        //     fs.readFile('hello.txt',{encoding:'utf-8'},(err,value)=>
        //     {
        //         if(err)
        //         {
        //         console.error(err);
        //         }
        //         console.log("data fetched from file is",value);
        //         res.write('<html>');
        //         res.write('<head><title>Retrieved Data</title></head>');
        //         res.write(`<body>${value}`);
        //         res.write('<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        //         res.write('</html');
        //         res.end();
        //         });
               

       
        
    //             
    //             flag = false;
    //             return res.end();
        
    //         });
            
    //     }
    //     res.setHeader('Content-Type','text/html');
    //     res.write('<html>');
    //     res.write('<head><title>My First Page</title></head>');
    //     res.write('<body><h1>Hello from my Node.Js Server!</h1></body>');
    //     res.write('</html');
    //     res.end();
        
});
 
    
server.listen(4000);