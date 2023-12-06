const express = require('express');
const router = express.Router();
const shopControllers = require('../controllers/shopControllers');

router.get('/shop', shopControllers.shop);
router.get('/shop/item/:id', shopControllers.shopItem);
router.post('/shop/item/:id/add', shopControllers.shopAddItem);
router.get('/shop/cart', shopControllers.shopCart);
router.post('/shop/cart', shopControllers.shopPayCart);

module.exports = router;