import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Nichole Holmstedt. All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/nholmstedt" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/nichole-holmstedt/" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                    {/* Add more social links as needed */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;