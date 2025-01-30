const USERS_KEY = 'users';
const CURRENT_USER_KEY = 'currentUser';

// Helper to get users array from localStorage
const getUsers = () => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
};

// Helper to save users array to localStorage
const saveUsers = (users) => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

// Hardcoded credentials for demo
const VALID_CREDENTIALS = {
    email: 'test@example.com',
    password: 'password123'
};

export const authService = {
    login: async(formData) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                const token = 'demo-token-123';
                const user = {
                    id: '1',
                    email: formData.email,
                    name: 'Test User'
                };

                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));

                resolve({ token, user });
            }, 500);
        });
    },

    logout: () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    },

    isAuthenticated: () => {
        return !!localStorage.getItem('token');
    }
};

// Add a default export as well
export default authService;