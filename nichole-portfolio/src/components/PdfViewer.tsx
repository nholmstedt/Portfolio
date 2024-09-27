import React, { useState } from 'react';

const PdfViewer: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isPdfDarkMode, setIsPdfDarkMode] = useState(true); // State for PDF dark mode

    const toggleResume = () => {
        setIsOpen(!isOpen);
    };

    const togglePdfTheme = () => {
        setIsPdfDarkMode(!isPdfDarkMode);
    };

    return (
        <div className="s1">
                    <span className="curly-bracket">{`{`}</span>
                    <a href="#!" onClick={toggleResume} style={{ cursor: 'pointer', color: '#03C682' }}>
                        {isOpen ? '− View Resume' : '+ View Resume'}
                    </a>
                    <span className="curly-bracket">{`}`}</span>
                {isOpen && (
                    <div className="pdf-viewer">
                        <button
                            onClick={togglePdfTheme}
                            style={{
                                backgroundColor: '#f0f0f0',
                                color: '#333',
                                border: 'none',
                                borderRadius: '5px',
                                padding: '5px 10px',
                                cursor: 'pointer',
                                marginBottom: '5px',
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            }}
                        >
                            Switch PDF to {isPdfDarkMode ? 'Light' : 'Dark'} Mode
                        </button>
                        <iframe
                            src={require("../docs/NHolmstedtResume2024.pdf")}
                            width="100%"
                            height="400px"
                            title="Resume PDF"
                            className={isPdfDarkMode ? 'dark-pdf' : 'light-pdf'}
                            style={{ marginTop: '.5px' }}
                        ></iframe>
                    </div>
                )}
        </div>
    );
};

export default PdfViewer;
