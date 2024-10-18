import Task from '../models/Task.js';
import Workspace from '../models/Workspace.js';

// Create a task (Team lead only)
const createTask = async (req, res) => {
    const { title, description, assignedToId, workspaceId, deadline } = req.body;

    const workspace = await Workspace.findById(workspaceId);
    if (!workspace) {
        return res.status(404).json({ message: 'Workspace not found' });
    }

    const task = await Task.create({
        title,
        description,
        assignedToId,
        workspaceId,
        deadline
    });

    workspace.tasks.push(task._id);
    await workspace.save();

    res.status(201).json(task);
};

// Update task status (Team member only)
const updateTaskStatus = async (req, res) => {
    const { taskId, status } = req.body;

    const task = await Task.findById(taskId);

    if (task) {
        task.status = status;
        await task.save();
        res.json(task);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

export { createTask, updateTaskStatus };
