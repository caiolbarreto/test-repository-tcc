
// Issue: Code duplication
function processUser(user: any) {
    if (user.type === 'admin') {
        console.log('Processing admin user');
        // Complex logic here
        user.permissions = ['read', 'write', 'delete'];
        user.level = 'admin';
        user.access = 'full';
    }
    if (user.type === 'manager') {
        console.log('Processing manager user');
        // Same complex logic duplicated
        user.permissions = ['read', 'write', 'delete'];
        user.level = 'manager';
        user.access = 'full';
    }
}
