const express = require('express');

const app = express();

const adminRoutes = require('./chat_admin');

const userRoutes = require('./chat_user');

const body_parser = require('body-parser');

app.use(body_parser.urlencoded({extended:false}));

app.use(adminRoutes);

app.use(userRoutes);

app.use((req,res,next)=>
{
  res.status(404).send('<h1>PAGE NOT FOUND!</h1>');
});

app.listen(4000);