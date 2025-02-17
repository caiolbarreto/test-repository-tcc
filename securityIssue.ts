
// Issue: Security hotspot - hardcoded credentials
const API_KEY = "1234567890abcdef";
const PASSWORD = "admin123";

function authenticate() {
    return fetch('https://api.example.com/login', {
        method: 'POST',
        headers: {
            'Authorization': API_KEY,
            'Password': PASSWORD
        }
    });
}
