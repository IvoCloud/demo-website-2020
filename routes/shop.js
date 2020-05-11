const path = require('path');

const express = require('express');

const productsController = require('../controllers/productsController');

const router = express.Router();

router.get('/products', productsController.displayProducts);

router.get('/', (req,res,next) =>{
    //res.sendFile(path.join(rootDir,'views','index.html'));
    res.render('index', {
        pageTitle: 'Начало'
    })
});

module.exports = router;