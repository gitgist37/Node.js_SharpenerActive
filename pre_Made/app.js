const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');
const Product = require('./models/product');
const User = require('./models/user');
const Cart = require('./models/cart');
const CartItems = require('./models/cart-items');
const Order = require('./models/order');
const OrderItem = require('./models/order-items');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>
{
    User.findByPk(1)
    .then(user=>
        {
            req.user = user;
            next();
        })
    .catch(err=>console.log(err));
})

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' }); //establishes relation
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItems});
Product.belongsToMany(Cart, { through: CartItems});
Order.belongsTo(User);
User.hasMany(Order);
Order.belongsToMany(Product, {through: OrderItem});


sequelize
//.sync({force: true})
.sync()
.then(result=>
    {
        return User.findByPk(1);
        //console.log(result);
    })
.then(user=>
    {
        if(!user)
        {
            return User.create({name: 'Shubham', email: 'Shubham@dummyShop.com'});
        }
        return user;
    })
.then(user=>
    {
        //console.log(user);
        return user.createCart();
    })
.then(cart=>app.listen(3000))            
.catch(err=>console.log(err));


