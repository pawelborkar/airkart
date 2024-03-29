import { asyncHandler } from '../middlewares/asyncHandler.middlewares.js';
import Product from '../models/product.models.js';
import { RESPONSE } from '../utils/responseMessages.js';
/*
@desc: Get all categories
@Author: Pawel Borkar
@route: GET /api/v1/categories
@access: Public
*/
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Product.find().distinct('category');
  return res.status(200).json({
    success: true,
    categories,
  });
});

/*
@desc: Get all categories
@Author: Pawel Borkar
@route: GET /api/v1/categories
@access: Public
*/
const getAllProductsFromACategory = asyncHandler(async (req, res) => {
  const category = req.params.category; // Get the category from route parameters
  try {
    const products = await Product.find({ category }); // Find products with the specified category
    return res.status(200).json({
      success: true,
      count: products.length,
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: RESPONSE.FAIL_PRODUCT_RETRIEVAL });
  }
});

export { getAllCategories, getAllProductsFromACategory };
