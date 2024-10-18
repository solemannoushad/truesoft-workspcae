import express from 'express';
import { startTimer, stopTimer, getTimeLogsForWorkspace } from '../controllers/timeTrackingController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import roleMiddleware from '../middlewares/roleMiddleware.js';

const router = express.Router();

router.post('/start', authMiddleware, roleMiddleware('team member'), startTimer);
router.post('/stop', authMiddleware, roleMiddleware('team member'), stopTimer);
router.get('/logs/:workspaceId', authMiddleware, roleMiddleware('team lead'), getTimeLogsForWorkspace);

export default router;
