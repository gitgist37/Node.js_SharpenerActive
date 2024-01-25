const express = require('express');

const router = express.Router();

router.get('/add_message',(req,res,next)=>
{
  console.log('pehle waale me hu');
  res.send('<html><title>LOGIN PAGE</title><body>This is your FORM<form action="/admin/any" method="POST"><label for="message">NAME:<input type="text" name="message"><br><label for="size">SIZE:<input type="number" name="size"><br><button type="submit">ADD</button></form></html>');
  
});

router.post('/any',(req,res,next)=>
{
  console.log(req.body.message,req.body.size);
  res.redirect('/');

});

module.exports = router;