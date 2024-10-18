import express from 'express';
import { createWorkspace, addMemberToWorkspace, removeMemberFromWorkspace } from '../controllers/workspaceController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/create', authMiddleware, roleMiddleware('admin'), createWorkspace);
router.post('/addMember', authMiddleware, roleMiddleware('team lead'), addMemberToWorkspace);
router.post('/removeMember', authMiddleware, roleMiddleware('team lead'), removeMemberFromWorkspace);

export default router;
