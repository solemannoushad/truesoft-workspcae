import express from 'express';
import { getAllUsers, getUserProfile } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, roleMiddleware('admin'), getAllUsers);
router.get('/profile', authMiddleware, getUserProfile);

export default router;
