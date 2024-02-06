const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes_2/admin');
const shopRoutes = require('./routes_2/user');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>
{
    res.status(404).sendFile(path.join(__dirname,'../','Front_view','404_.html'));
});


app.listen(2000);

