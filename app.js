const express = require('express');

const app = express();

app.use((req,res,next)=>
{
    console.log('Im in this middleware!');
    next();
});

app.use((req,res,next)=>
{
    console.log('Im in this middleware too!');
    res.send('<h1>Hello from Express!</h1>') // we can always override this line by manually setting header to a different value in the earlier line.
});

app.listen(4000);