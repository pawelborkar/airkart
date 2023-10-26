import { Router } from 'express';
import categoryRouter from './category.routes.js';
import {
  addNewProduct,
  getAllProducts,
  getSingleProduct,
} from '../controllers/product.controllers.js';

const router = Router();
// Re-routes to category router
router.use('/:category', categoryRouter);

router.route('/').get(getAllProducts).post(addNewProduct);
router.route('/:id').get(getSingleProduct);
export default router;
