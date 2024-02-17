const express = require('express');
const { WatchUserHomePage } = require('../controllers_2/Home');
const { ContactSubmittedPage } = require('../controllers_2/contact_submitted');
const { ProductAddedMessagePage } = require('../controllers_2/product_Added');
const router = express.Router();
//const productsData = require('../path_util/products');


//router.use(bodyParser.urlencoded({extended:false}));

router.get('/', WatchUserHomePage); //why get not post(server fetches json and shows html)
// router.get('/',(req,res,next)=>
// {
//     const viewsData = {
//         products: productsData.products,
//         pageTitle: 'Home Page - Products List'
//     };
//     res.render('shop', viewsData);
// });


router.post('/success', ContactSubmittedPage);

router.post('/product-added', ProductAddedMessagePage);



module.exports = router;