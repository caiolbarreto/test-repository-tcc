
// Issues: Unused variables, dead code, magic numbers
interface UserData {
    id: number;
    name: string;
    email: string;
}

class UserProcessor {
    private readonly MAX_USERS = 1000;  // Unused constant
    private debugMode = true;           // Unused variable

    constructor(private users: UserData[]) {}

    processUsers() {
        const tempData = [];            // Unused variable
        for (let i = 0; i < this.users.length; i++) {
            if (false) {                // Dead code
                console.log('This will never execute');
            }
            this.users[i].id = this.users[i].id + 42;  // Magic number
        }
    }

    private helperFunction() {          // Unused private method
        return 'unused';
    }
}
