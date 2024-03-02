/*
Controller: product
*/
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
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
  return res.status(200).json(res.advancedResults);
});

/*
@desc: Get single product details
@Author: Pawel Borkar
@route: POST /api/v1/products
@required body: id of the product
@access: Public
*/
const getSingleProduct = asyncHandler(async (req, res) => {
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
  const { name, brand, description, price, category, stock, tags, countryOfOrigin } = req.body;

  const uploadFiles = req.files.map(async (file) => {
    try {
      const tempFileName = `airkart_${Date.now()}-${Math.random() * 1e9}.jpg`;
      const __dirname = path.dirname(fileURLToPath(import.meta.url));

      const tempFilePath = path.join(__dirname, '../temp', tempFileName);

      fs.writeFileSync(tempFilePath, file.buffer);

      const { secure_url } = await cloudinary.uploader.upload(tempFilePath);

      fs.unlinkSync(tempFilePath);

      return secure_url;
    } catch (error) {
      console.error(`Error uploading file to Cloudinary: `, error);
      throw error;
    }
  });

  const imageURLs = await Promise.all(uploadFiles);
  const _tags = tags.split(',').map((tag) => tag.trim());
  const product = {
    name,
    brand,
    description,
    price,
    category,
    stock,
    tags: _tags,
    countryOfOrigin,
    imageURLs,
  };

  const products = await Product.create(product);

  return res.status(201).json({
    success: true,
    products,
  });
});

export { getAllProducts, getSingleProduct, addNewProduct };
