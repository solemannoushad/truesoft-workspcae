import { roles } from '../config/roles.js';

const validateRole = (userRole, requiredRole) => {
    if (!roles[userRole]) {
        throw new Error('Invalid role provided');
    }

    if (!roles[requiredRole].includes(userRole)) {
        throw new Error('Unauthorized: Access is denied');
    }

    return true;
};

export default validateRole;
