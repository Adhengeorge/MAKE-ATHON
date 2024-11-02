// src/Footer.jsx
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
    const handleHelpClick = () => {
        alert("Help Center: Please reach out to us at example@example.com for assistance.");
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email: example@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className="footer-section">
                    <h4>Feedback</h4>
                    <p>We value your feedback! Please reach out to us with your thoughts.</p>
                </div>
                <div className="footer-section">
                    <h4>Help</h4>
                    <button onClick={handleHelpClick} className="help-button">Get Help</button>
                </div>
                <div className="footer-section">
                    <h4>Privacy Terms</h4>
                    <p>Read our Privacy Policy and Terms of Service.</p>
                </div>
                <div className="social-media">
                    <h4>Follow Us</h4>
                    <a href="https://instagram.com/community.store" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://facebook.com/Community_Store" target="_blank" rel="noopener noreferrer">Facebook</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
