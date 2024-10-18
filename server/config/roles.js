const roles = {
    admin: ['admin', 'team lead', 'team member'],
    'team lead': ['team lead', 'team member'],
    'team member': ['team member']
};

const checkRole = (role, allowedRoles) => {
    return allowedRoles.includes(role);
};

export { roles, checkRole };
