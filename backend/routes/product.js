const express = require("express");
const router = express.Router();

const productController = require('../controllers/product');

router.post('/', productController.postProduct);

router.get('/', productController.getAllProduct);

router.put('/', productController.postProduct);

router.delete('/:id', productController.deleteProduct);

module.exports = router;