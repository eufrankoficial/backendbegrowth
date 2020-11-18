const express = require('express');
const route = express.Router();
const ProductController = require('../controllers/ProductController');

route.get('/products', ProductController.index);
route.post('/save-product', ProductController.create);
route.get('/product/:id', ProductController.show);
route.put('/product/:id', ProductController.update);
route.delete('/product/:id', ProductController.delete);

module.exports = route;