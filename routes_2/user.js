const express = require('express');
const path = require('path');
const { WatchUserHomePage } = require('../controllers_2/Home');
const { ContactSubmittedPage } = require('../controllers_2/contact_submitted');
const { ProductAddedPage } = require('../controllers_2/product_Added');
const router = express.Router();

router.get('/', WatchUserHomePage);

router.post('/success', ContactSubmittedPage);

router.post('/product-added', ProductAddedPage);



module.exports = router;