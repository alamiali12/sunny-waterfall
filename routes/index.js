const express = require('express');
const router = express.Router();
const { getProducts } = require('../models/product');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/information', (req, res) => {
    res.render('information');
});

router.get('/shop', (req, res) => {
    const products = getProducts();
    res.render('shop', { products });
});

router.get('/privacy', (req, res) => {
    res.render('privacy');
});

module.exports = router;
