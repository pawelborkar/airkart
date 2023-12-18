import { Router } from 'express';
import {
  getAllCategories,
  getAllProductsFromACategory,
} from '../controllers/category.controllers.js';

const router = Router();

router.route('/:category').get(getAllProductsFromACategory);
router.route('/').get(getAllCategories);

export default router;
