const path = require('path');

module.exports.WatchUserHomePage = (req,res,next)=>
{
    res.sendFile(path.join(__dirname,'../','Front_view','shop.html'));
};