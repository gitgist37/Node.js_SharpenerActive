const express = require('express');
const { AddProductPage } = require('../controllers_2/product');
const { ContactUsPage } = require('../controllers_2/contact_us');
const router = express.Router();

router.get('/add-product', AddProductPage);

router.get('/contact-us', ContactUsPage);


module.exports = router;