const { Product } = require("../models");

const createProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      price,
      stock,
    });
    res.status(200).json({
      status: "success",
      data: {
        newProduct,
      },
    });
  } catch (err) {}
};

const findProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({
      status: "success",
      data: {
        products,
      },
    });
  } catch (err) {}
};

const findProductsById = async (req, res) => {
  try {
    const product = await Product.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: "success",
      data: {
        product,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

const updateProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const product = await Product.update({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: "success",
      message: "success data update",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};
const deleteProduct = async (req, res) => {
  const { name, price, stock } = req.body;
  try {
    const product = await Product.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({
      status: "success",
      message: "success data delete",
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err,
    });
  }
};

module.exports = {
  createProduct,
  findProducts,
  findProductsById,
  updateProduct,
  deleteProduct,
};
