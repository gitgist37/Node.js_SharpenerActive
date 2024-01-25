 const express = require('express');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const body_parser = require('body-parser');

app.use(body_parser.urlencoded({extended:false}));

app.use('/admin',adminRoutes);

app.use('/shop',shopRoutes);

app.use((req,res,next)=>
{
  res.status(404).send('<h1>PAGE NOT FOUND!</h1>');
});



app.listen(4000);