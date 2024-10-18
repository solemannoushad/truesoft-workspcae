import { roles } from '../config/roles.js';

const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
        const userRole = req.user.role;

        if (roles[requiredRole].includes(userRole)) {
            next();
        } else {
            res.status(403).json({ message: 'Forbidden: You do not have the required permission' });
        }
    };
};

export default roleMiddleware;
