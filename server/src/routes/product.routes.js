import { Router } from 'express';
import {
  addNewProduct,
  getAllProducts,
  getSingleProduct,
} from '../controllers/product.controllers.js';

const router = Router();
// Re-routes to category router
router.route('/:id').get(getSingleProduct);
router.route('/').get(getAllProducts).post(addNewProduct);
export default router;
