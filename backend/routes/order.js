const express = require('express');

const router = express.Router();

const orderController = require('../controllers/order');

router.post('/', orderController.postOrder);

router.get('/', orderController.getAllOrder);

router.put('/', orderController.putOrder);

router.delete('/:id', orderController.deleteOrder);

module.exports = router;