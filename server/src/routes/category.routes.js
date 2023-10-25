import { Router } from 'express';
import {
  getAllCategories,
  //   getAllProductsFromACategory,
} from '../controllers/category.controllers.js';

const router = Router({ mergeParams: true });

router.route('/').get(getAllCategories);
// router.route('/:category').get(getAllProductsFromACategory);

export default router;
