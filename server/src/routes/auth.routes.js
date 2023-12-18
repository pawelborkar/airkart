import { Router } from 'express';
import { signUp, signIn, logOut } from '../controllers/auth.controllers.js';

const router = Router();

router.route('/signup').post(signUp);
router.route('/signin').post(signIn);
router.route('/logout').post(logOut);

export default router;
