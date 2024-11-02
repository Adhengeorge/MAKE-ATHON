// src/UserContext.jsx
import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const signup = (user) => {
        setUsers([...users, user]);
        alert('Signup successful! You can now log in.');
    };

    const login = (credentials) => {
        const user = users.find(
            (u) => u.email === credentials.email && u.password === credentials.password
        );
        if (user) {
            setCurrentUser(user);
            alert('Login successful!');
        } else {
            alert('Invalid email or password.');
        }
    };

    const logout = () => {
        setCurrentUser(null);
    };

    return (
        <UserContext.Provider value={{ signup, login, currentUser, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
