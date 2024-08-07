const express = require('express');
const router = express.Router();
const { getProductsByCategory } = require('../models/product');

router.get('/:category', (req, res) => {
    const categoryName = req.params.category;
    const products = getProductsByCategory(categoryName);
    res.render('category', { categoryName, products });
});

module.exports = router;
