import express from 'express';
import { createTask, updateTaskStatus } from '../controllers/taskController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, roleMiddleware('team lead'), createTask);
router.put('/updateStatus', authMiddleware, roleMiddleware('team member'), updateTaskStatus);

export default router;
