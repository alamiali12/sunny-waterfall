const express = require('express');
const router = express.Router();
const { searchProducts } = require('../models/product');

router.get('/', (req, res) => {
    const query = req.query.query;
    const products = searchProducts(query);
    res.render('search', { query, products });
});

module.exports = router;
