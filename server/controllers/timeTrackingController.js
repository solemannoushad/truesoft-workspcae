import TimeLog from '../models/TimeLog.js';

// Start a task timer (Team member only)
const startTimer = async (req, res) => {
    const { taskId } = req.body;

    const timeLog = await TimeLog.create({
        user: req.user._id,
        task: taskId,
        startTime: new Date(),
    });

    res.status(201).json(timeLog);
};

// Stop a task timer and calculate total time (Team member only)
const stopTimer = async (req, res) => {
    const { logId } = req.body;

    const timeLog = await TimeLog.findById(logId);

    if (timeLog && !timeLog.endTime) {
        timeLog.endTime = new Date();
        const totalTime = (timeLog.endTime - timeLog.startTime) / (1000 * 60); // Convert to minutes
        timeLog.totalTime = totalTime;
        await timeLog.save();

        res.json(timeLog);
    } else {
        res.status(404).json({ message: 'Log not found or timer already stopped' });
    }
};

// Get all time logs for a workspace (Team lead/Admin only)
const getTimeLogsForWorkspace = async (req, res) => {
    const { workspaceId } = req.params;

    const logs = await TimeLog.find({ workspace: workspaceId }).populate('user', 'name');
    res.json(logs);
};

export { startTimer, stopTimer, getTimeLogsForWorkspace };
