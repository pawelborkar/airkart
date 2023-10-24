/*
Controller: product
*/
import { asyncHandler } from '../middlewares/asyncHandler.middlewares.js';
import Product from '../models/product.models.js';
/*
@desc: Get all products
@Author: Pawel Borkar
@route: GET /api/v1/products
@access: Public
*/
const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  return res.status(200).json({
    success: true,
    products,
  });
});

/*
@desc: Get all products
@Author: Pawel Borkar
@route: GET /api/v1/products
@access: Public
*/
const getSingleProduct = asyncHandler(async (req, res) => {
  // console.log(req.body);
  const products = await Product.findById(req.body.id);
  return res.status(200).json({
    success: true,
    products,
  });
});

export { getAllProducts, getSingleProduct };
