const Product = require('../models/product');

exports.getAllProduct = async (req, res, next) => {
    try {
      const [allProduct] = await Product.fetchAllProduct();
      res.status(200).json(allProduct);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.postProduct = async (req, res, next) => {
    try {
      const postResponse = await Product.post(req.body.name,req.body.price,req.body.image);
      res.status(201).json(postResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.putProduct = async (req, res, next) => {
    try {
      const putResponse = await Product.update(req.body.id, req.body.name,req.body.price,req.body.image);
      res.status(201).json(putResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };
  
  exports.deleteProduct = async (req, res, next) => {
    try {
      const deleteResponse = await Product.delete(req.params.id);
      res.status(201).json(deleteResponse);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }
  };