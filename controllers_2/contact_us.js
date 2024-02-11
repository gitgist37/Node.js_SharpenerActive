const path = require('path');

module.exports.ContactUsPage = (req,res,next)=>
{
    res.sendFile(path.join(__dirname,'../','Front_view','contact_us_form.html'));
};