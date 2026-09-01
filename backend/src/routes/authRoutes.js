import express from 'express';
import {
  login,
  demoLogin,
  signup,
  onboarding,
  getCurrentUser
} from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/demo-login', demoLogin);
router.post('/signup', signup);
router.post('/onboarding', onboarding);
router.get('/me', getCurrentUser);

export default router;
