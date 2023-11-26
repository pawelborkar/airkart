import { Router } from 'express';
import { addToCart, getCart } from '../controllers/cart.controllers.js';

const router = Router();

router.route('/').get(getCart).post(addToCart);

export default router;
