const express = require('express');
const router = express.Router();
const { addProduct, getProducts } = require('../models/product');
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/images');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.get('/', (req, res) => {
    res.render('admin');
});

router.post('/add-product', upload.single('image'), (req, res) => {
    const { name, description, price } = req.body;
    const image = '/images/' + req.file.filename;
    addProduct(name, description, price, image);
    res.redirect('/shop');
});

module.exports = router;
