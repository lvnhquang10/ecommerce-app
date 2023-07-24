const express = require('express');

const router = express.Router();

const cartController = require('../controllers/cart');

router.post('/', cartController.postCart);

router.get('/', cartController.getAllCart);

router.put('/', cartController.putCart);

router.delete('/:id', cartController.deleteCart);

module.exports = router;