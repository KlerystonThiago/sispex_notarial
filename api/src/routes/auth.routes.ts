import { Router } from 'express';
import { AuthController }   from '../controllers/auth.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const authRoutes = Router();

authRoutes.post('/login', AuthController.login);
authRoutes.get('/me', authMiddleware, AuthController.me);

export { authRoutes };