const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/add-product',(req,res,next)=>
{
    res.sendFile(path.join(__dirname,'../','Front_view','add_product.html'));
});

router.get('/contact-us',(req,res,next)=>
{
    res.sendFile(path.join(__dirname,'../','Front_view','contact_us_form.html'));
});







module.exports = router;