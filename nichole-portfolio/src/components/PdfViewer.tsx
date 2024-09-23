import React from 'react';

interface PdfViewerProps {
    pdfFile: string; // Path to the PDF file
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfFile }) => {
    return (
        <iframe
            src={pdfFile}
            style={{ width: '100%', height: '600px', border: 'none' }}
            title="PDF Viewer"
        />
    );
};

export default PdfViewer;
