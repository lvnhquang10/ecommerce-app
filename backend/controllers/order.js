const Order = require('../models/order');

exports.getAllOrder = async (req, res, next) => {
  try {
    const [allOrder] = await Order.fetchAll();
    res.status(200).json(allOrder);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postOrder = async (req, res, next) => {
  try {
    const postOrderResponse = await Order.post(req.body.name, req.body.price, req.body.image, req.body.quantity);
    res.status(201).json(postOrderResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const deleteOrderResponse = await Order.delete(req.params.id);
    res.status(201).json(deleteOrderResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putOrder = async (req, res, next) => {
  try {
    const putOrderResponse = await Order.update(req.body.id, req.body.quantity);
    res.status(201).json(putOrderResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};