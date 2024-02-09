/*
Controller: product
*/
import { asyncHandler } from '../middlewares/asyncHandler.middlewares.js';
import cloudinary from '../config/cloudinary.config.js';
import Product from '../models/product.models.js';

/*
@desc: Get all products
@Author: Pawel Borkar
@route: GET /api/v1/products
@access: Public
*/
const getAllProducts = asyncHandler(async (_, res) => {
  const products = await Product.find({});
  return res.status(200).json({
    success: true,
    count: products.length,
    products,
  });
});

/*
@desc: Get single product details
@Author: Pawel Borkar
@route: POST /api/v1/products
@required body: id of the product
@access: Public
*/
const getSingleProduct = asyncHandler(async (_, res) => {
  const products = await Product.findById(req.params.id);
  return res.status(200).json({
    success: true,
    products,
  });
});

/*
@desc: Add a new Product 
@Author: Pawel Borkar
@route: POST /api/v1/products
@required body: Details of the product
@access: Private
*/
const addNewProduct = asyncHandler(async (req, res) => {
  const { name, description, price, category, stock } = req.body;

  const uploadFiles = req.files.map(async (file) => {
    const { secure_url } = await cloudinary.uploader.upload(file.buffer);
    return secure_url;
  });

  const imageURLs = await Promise.all(uploadFiles);

  const product = {
    name,
    description,
    category,
    price,
    stock,
    imageURLs,
  };

  const products = await Product.create(product);

  return res.status(201).json({
    success: true,
    products,
  });
});

export { getAllProducts, getSingleProduct, addNewProduct };
