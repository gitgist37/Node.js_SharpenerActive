const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes_2/admin');
const shopRoutes = require('./routes_2/user');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({extended:false}));


app.use(adminRoutes);
app.use(shopRoutes);

app.use(Error);// its not working


app.listen(port,()=> console.log(`Serving running at ${port}`));


