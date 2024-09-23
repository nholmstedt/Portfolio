import React from 'react';
import './UsefulLinks.css'; // Make sure to import the CSS file

const UsefulLinks = () => {
    return (
        <div className="s1">
            <h2>Useful Links</h2>
            <ul>
                <li>
                    <a href={require("../docs/NHolmstedtResume2024.pdf")} target="_blank" rel="noopener noreferrer">
                        NHolmstedtResume2024.pdf
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/nichole-holmstedt-b36915186/" target="_blank" rel="noopener noreferrer">
                        Nichole Holmstedt LinkedIn Profile
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default UsefulLinks;
