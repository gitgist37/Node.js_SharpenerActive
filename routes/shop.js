const express = require('express');

const router = express.Router();

router.get('/shubham',(req,res,next)=>
{
  res.send('<h1>hello shubham!</h1>');
  
});

router.get('/',(req,res,next)=>
{
  res.send('<h1>Succeeded!</h1>');
  
});

module.exports = router;