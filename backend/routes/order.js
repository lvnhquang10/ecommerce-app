const express = require("express");
const router = express.Router();
const orderController = require("../controllers/order");

router.get("/", orderController.get_orders);

router.get("/single", orderController.get_single_order);

router.post("/create", orderController.create_order);

module.exports = router;