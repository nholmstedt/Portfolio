import React from 'react';
import Tabs from './Tabs'; // Import the Tabs component
import '../App.css';

const Main: React.FC = () => {
    return (
        <main>
            <header className="sticky-header">
                <h1 className="title-text">Nichole Holmstedt Portfolio</h1>
            </header>
            <div className="tabs-container"> {/* Add a container for tabs */}
                <Tabs /> {/* Use the Tabs component here */}
            </div>
            <section className="content-section">
                {/* Content can remain here or be managed within the Tabs component */}
            </section>
        </main>
    );
};

export default Main;
