import React from 'react';
// import './Main.css'; // Optional: Include your CSS file for styling

const Main: React.FC = () => {
    return (
        <main className="main-content">
            <section id="about">
                <h2>About Me</h2>
                <p>This is a brief introduction about me.</p>
            </section>
            <section id="projects">
                <h2>Projects</h2>
                <p>Here are some of my projects.</p>
                {/* You can map through your projects and render them here */}
            </section>
            <section id="contact">
                <h2>Contact</h2>
                <p>Get in touch!</p>
            </section>
        </main>
    );
};

export default Main;