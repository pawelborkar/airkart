import { Router } from 'express';
import { getUserProfile } from '../controllers/profile.controllers.js';

const router = Router();

router.route('/').post(getUserProfile);

export default router;
