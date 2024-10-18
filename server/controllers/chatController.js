import Message from '../models/Message.js';

// Send a message (Any user in workspace)
const sendMessage = async (req, res) => {
    const { message, workspaceId } = req.body;

    const newMessage = await Message.create({
        sender: req.user._id,
        workspace: workspaceId,
        message
    });

    res.status(201).json(newMessage);
};

// Get all messages for a workspace
const getMessagesForWorkspace = async (req, res) => {
    const { workspaceId } = req.params;

    const messages = await Message.find({ workspace: workspaceId }).populate('sender', 'name');
    res.json(messages);
};

export { sendMessage, getMessagesForWorkspace };
