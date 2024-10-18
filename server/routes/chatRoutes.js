import express from 'express';
import { sendMessage, getMessagesForWorkspace } from '../controllers/chatController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/sendMessage', authMiddleware, sendMessage);
router.get('/getMessages/:workspaceId', authMiddleware, getMessagesForWorkspace);

export default router;
