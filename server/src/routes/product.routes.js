import { Router } from 'express';
import {
  addNewProduct,
  getAllProducts,
  getSingleProduct,
} from '../controllers/product.controllers.js';
import multer from 'multer';

const router = Router();
const upload = multer();
// Re-routes to category router
router.route('/:id').get(getSingleProduct);
router.route('/').get(getAllProducts).post(upload.array('images', 5), addNewProduct);
export default router;
