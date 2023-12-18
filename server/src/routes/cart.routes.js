import { Router } from 'express';
import { addToCart, getCart } from '../controllers/cart.controllers.js';

const router = Router();

router.route('/cart').post(addToCart);
router.route('/my-cart').post(getCart);

export default router;
