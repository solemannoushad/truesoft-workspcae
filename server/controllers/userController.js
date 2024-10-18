import User from '../models/User.js';

// Get all users (Admin only)
const getAllUsers = async (req, res) => {
    const users = await User.find({});
    res.json(users);
};

// Get user profile
const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            workspaces: user.workspaces
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

export { getAllUsers, getUserProfile };
