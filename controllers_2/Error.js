const path = require('path');

module.exports.ErrorPage = (req,res,next)=>
{
    res.status(404).sendFile(path.join(__dirname,'../','Front_view','404_.html'));
};