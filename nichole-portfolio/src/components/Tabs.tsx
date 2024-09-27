import React, { useState } from 'react';
import PdfViewer from './PdfViewer'; // Keep the PdfViewer import

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState('home');

    const renderContent = () => {
        switch (activeTab) {
            case 'home':
                return (
                    <div className="home-content">
                        {/* About Me Section */}
                        <div className="about-me">
                            <h2>About Me</h2>
                            <p>
                                Hello! I’m Nichole Holmstedt, a passionate software engineer based in Colorado.
                                I specialize in C++ as well as SVG creation and linking with Javascript.
                                My journey in becoming a software engineer began when I started as an intern at
                                Kratos Defense and went full time shortly after I started.
                            </p>
                            <p>
                                I thrive on challenges and enjoy tackling complex problems. I believe in continuous
                                learning, and I’m always seeking new opportunities to expand my knowledge and skills in Space
                                Domain Awareness as well as general technology improvements. I have an interest in how
                                everything is made from the low level to the high level. I enjoy being able to be in lower level
                                C++ in my career and getting to build higher level web pages in my free time.
                            </p>
                            <p>
                                I’m excited to connect with like-minded professionals and explore new opportunities!
                            </p>
                        </div>

                        {/* Contact Section */}
                        {/*<div className="contact-section">*/}
                        {/*    <h2>Contact</h2>*/}
                        {/*    <p>Feel free to reach out to me through LinkedIn or through email on my resume.</p>*/}
                        {/*</div>*/}
                        <div className="resume">
                          <h2>Resume</h2>
                          <PdfViewer />
                        </div>
                    </div>
                );
            case 'projects':
                return (
                    <div className="projects-section">
                        <h2>Projects</h2>
                        <p>Dungeons and Dragons Webpage - <a href="https://dndacademy.neocities.org/">DND Academy</a>.
                        </p>
                        <p>Boss Lady Paranormal - <a href="https://nholmstedt.github.io/BossLadyParanormal.github.io/">Boss
                            Lady Paranormal</a>.</p>
                    </div>
                );
            default:
                return null;
        }
    };


    return (
        <div>
            <div className="tabs">
                <button onClick={() => setActiveTab('home')} className={activeTab === 'home' ? 'active' : ''}>
                    Home
                </button>
                <button onClick={() => setActiveTab('projects')} className={activeTab === 'projects' ? 'active' : ''}>
                    Projects
                </button>
            </div>
            <div className="tab-content">
                {renderContent()}
            </div>
        </div>
    );
};

export default Tabs;
