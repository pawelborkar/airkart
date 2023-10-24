import { Router } from 'express';
import {
  getAllProducts,
  getSingleProduct,
} from '../controllers/product.controllers.js';

const router = Router();

router.route('/').get(getAllProducts).post(getSingleProduct)
// router.route('/:id').get(getSingleProduct);

export default router;
