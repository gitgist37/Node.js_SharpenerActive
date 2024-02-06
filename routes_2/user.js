const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/',(req,res,next)=>
{
    res.sendFile(path.join(__dirname,'../','Front_view','shop.html'));
});

router.post('/success',(req,res,next)=>
{
    //console.log("DATA ENTERED SUCCESSFULLY!");
    //res.sendFile(path.join(__dirname,'../','Front_view','Final_Message.html'));
    res.send('<h1>FORM SUCCESSFULLY FILLED!</h1>');
});

router.post('/product-added',(req,res,next)=>
{
    res.send('<h1>PRODUCT SUCCESSFULLY ADDED!</h1>');
});




module.exports = router;