import React, { useState } from 'react';
import '../App.css';

const Main: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPdfDarkMode, setIsPdfDarkMode] = useState(true); // State for PDF dark mode

    const toggleResume = () => {
        setIsOpen(!isOpen);
    };

    const togglePdfTheme = () => {
        setIsPdfDarkMode(!isPdfDarkMode);
    };

    return (
        <main>
            <header className="sticky-header">
                <h1 className="title-text">Nichole Holmstedt Portfolio</h1>
            </header>

                <section className="content-section">
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
                            I thrive on challenges and enjoy tackling complex problems. I believe in continuous learning,
                            and I’m always seeking new opportunities to expand my knowledge and skills in Space Domain
                            Awareness as well as general technology improvements. I have an interest in how everything
                            is made from the low level to the high level. I enjoy being able to be in lower level C++
                            in my career and getting to build higher level web pages in my free time.
                        </p>
                        <p>
                            I’m excited to connect with like-minded professionals and explore new opportunities!
                        </p>
                    </div>
                    {/* Useful Links Section */}
                    <div className="s1">
                        <h2>Useful Links</h2>
                        <ul>
                            <li>
                                <span className="curly-bracket">{`{`}</span>
                                <a href="#!" onClick={toggleResume} style={{cursor: 'pointer', color: '#03C682'}}>
                                    {isOpen ? '− View Resume' : '+ View Resume'}
                                </a>
                                <span className="curly-bracket">{`}`}</span>
                            </li>
                            {isOpen && (
                                <div className="pdf-viewer">
                                    <button
                                        onClick={togglePdfTheme}
                                        style={{
                                            backgroundColor: '#f0f0f0', // Lighter color
                                            color: '#333', // Darker text
                                            border: 'none',
                                            borderRadius: '5px',
                                            padding: '5px 10px',
                                            cursor: 'pointer',
                                            marginBottom: '5px', // Reduced space below the button
                                            display: 'block', // Ensures the button is on a new line
                                            marginLeft: 'auto', // Center the button
                                            marginRight: 'auto', // Center the button
                                        }}
                                    >
                                        Switch PDF to {isPdfDarkMode ? 'Light' : 'Dark'} Mode
                                    </button>
                                    <iframe
                                        src={require("../docs/NHolmstedtResume2024.pdf")}
                                        width="100%"
                                        height="500px"
                                        title="Resume PDF"
                                        className={isPdfDarkMode ? 'dark-pdf' : 'light-pdf'}
                                        style={{marginTop: '.5px'}} // Reduced space above the PDF viewer
                                    ></iframe>
                                </div>
                            )}
                            <li style={{marginTop: '10px'}}>
                                <span className="curly-bracket">{`{`}</span>
                                <a href="https://www.linkedin.com/in/nichole-holmstedt-b36915186/" target="_blank"
                                   rel="noopener noreferrer">
                                    Nichole Holmstedt LinkedIn Profile
                                </a>
                                <span className="curly-bracket">{`}`}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Projects Section */}
                    <div className="projects-section">
                        <h2>Projects</h2>
                        <p>Dungeons and Dragons Webpage - <a href="https://dndacademy.neocities.org/">DND Academy</a>.
                        </p>
                        <p>Boss Lady Paranormal - <a href="https://nholmstedt.github.io/BossLadyParanormal.github.io/">Boss
                            Lady Paranormal</a>.</p>
                    </div>

                    {/* Contact Section */}
                    <div className="contact-section">
                        <h2>Contact</h2>
                        <p>Feel free to reach out to me through LinkedIn or through email on my resume.</p>
                    </div>
                </section>
        </main>
);
};

export default Main;
