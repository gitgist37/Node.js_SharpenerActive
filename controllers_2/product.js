const path = require('path');

module.exports.AddProductPage = (req,res,next)=>
{
    res.sendFile(path.join(__dirname,'../','Front_view','add_product.html'));
};