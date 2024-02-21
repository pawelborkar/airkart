import { Router } from 'express';
import {
  addNewProduct,
  getAllProducts,
  getSingleProduct,
} from '../controllers/product.controllers.js';
import multer from 'multer';
import advancedResults from '../middlewares/advancedResults.js';
import Product from '../models/product.models.js';

const router = Router();
const upload = multer();
// Re-routes to category router
router.route('/:id').get(getSingleProduct);
router
  .route('/')
  .get(
    advancedResults(Product, {
      path: 'products',
      options: { strictPopulate: false },
      select: 'name description category price',
    }),
    getAllProducts
  )
  .post(upload.array('images', 5), addNewProduct);
export default router;
