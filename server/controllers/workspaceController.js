import Workspace from '../models/Workspace.js';
import User from '../models/User.js';

// Create a new workspace (Admin only)
const createWorkspace = async (req, res) => {
    const { title, description, teamLead } = req.body;



    const teamLead1 = await User.findById(teamLead);
    if (!teamLead1 || teamLead1.role !== 'team lead') {
        return res.status(400).json({ message: 'Invalid team lead' });
    }

    const workspace = await Workspace.create({
        title,
        description,
        teamLead: teamLead,
        members: [teamLead]
    });

    teamLead1.workspaces.push(workspace._id);
    await teamLead1.save();

    res.status(201).json(workspace);
};

// Add a member to a workspace (Team lead/Admin only)
const addMemberToWorkspace = async (req, res) => {
    const { workspaceId, userId } = req.body;

    const workspace = await Workspace.findById(workspaceId);
    const user = await User.findById(userId);

    if (workspace && user) {
        if (!workspace.members.includes(userId)) {
            workspace.members.push(userId);
            await workspace.save();
            res.json({ message: 'User added to workspace' });
        } else {
            res.status(400).json({ message: 'User is already a member' });
        }
    } else {
        res.status(404).json({ message: 'Workspace or User not found' });
    }
};

// Remove a member from a workspace (Team lead/Admin only)
const removeMemberFromWorkspace = async (req, res) => {
    const { workspaceId, userId } = req.body;

    const workspace = await Workspace.findById(workspaceId);

    if (workspace && workspace.members.includes(userId)) {
        workspace.members = workspace.members.filter(member => member.toString() !== userId);
        await workspace.save();
        res.json({ message: 'User removed from workspace' });
    } else {
        res.status(404).json({ message: 'Workspace or User not found' });
    }
};

export { createWorkspace, addMemberToWorkspace, removeMemberFromWorkspace };
