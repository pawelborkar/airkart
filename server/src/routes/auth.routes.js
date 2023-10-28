import { Router } from 'express';
import { signUp } from '../controllers/auth.controllers.js';

const router = Router();

router.route('/signup').post(signUp)

export default router;
