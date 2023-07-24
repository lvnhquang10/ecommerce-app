const Cart = require('../models/cart');

exports.getAllCart = async (req, res, next) => {
  try {
    const [allCart] = await Cart.fetchAll();
    res.status(200).json(allCart);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postCart = async (req, res, next) => {
  try {
    const postCartResponse = await Cart.post(req.body.name, req.body.price, req.body.image, req.body.quantity);
    res.status(201).json(postCartResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.deleteCart = async (req, res, next) => {
  try {
    const deleteCartResponse = await Cart.delete(req.params.id);
    res.status(201).json(deleteCartResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.putCart = async (req, res, next) => {
  try {
    const putCartResponse = await Cart.update(req.body.id, req.body.quantity);
    res.status(201).json(putCartResponse);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};