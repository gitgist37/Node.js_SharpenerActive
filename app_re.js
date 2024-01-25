const express = require('express');

const app = express();

const body_parser = require('body-parser');

app.use(body_parser.urlencoded({extended:false}));

app.use('/add_message',(req,res,next)=>
{
  console.log('pehle waale me hu');
  res.send('<html><title>LOGIN PAGE</title><body>This is your FORM<form action="/any" method="POST"><label for="message">NAME:<input type="text" name="message"><br><label for="size">SIZE:<input type="number" name="size"><br><button type="submit">ADD</button></form></html>');
  
});

app.use('/any',(req,res,next)=>
{
  console.log(req.body.message,req.body.size);
  res.redirect('/');

});

app.use('/',(req,res,next)=>
{
  res.send('<h1>Succeeded!</h1>');
  

});


app.listen(4000);