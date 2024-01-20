const fs = require('fs');

const RequestHandler = (req,res) =>
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
                return res.end();
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
        res.end();
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
        
        
};
 

module.exports = {
    handler:RequestHandler,
    someText:"Hard but Important"
};