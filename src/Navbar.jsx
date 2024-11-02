// src/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1 className="logo">Community Store</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/add-item">Add Item</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
