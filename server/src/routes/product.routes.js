import { Router } from 'express';
// import categoryRouter from './category.routes.js';
import {
  getAllProducts,
  getSingleProduct,
} from '../controllers/product.controllers.js';
import { getAllProductsFromACategory } from '../controllers/category.controllers.js';

const router = Router();
// Re-routes to category router
// router.use('/:category', categoryRouter);
router.route('/').get(getAllProducts).post(getSingleProduct);
router.route('/:category').get(getAllProductsFromACategory);
export default router;
