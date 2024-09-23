import React from 'react';
import { Document, Page } from '@react-pdf/renderer';

interface PdfViewerProps {
    pdfFile: string; // Path to the PDF file
}

const PdfViewer: React.FC<PdfViewerProps> = ({ pdfFile }) => {
    const [numPages, setNumPages] = React.useState<number | null>(null); // State for total pages
    const [pageNumber] = React.useState(1); // Fixed to one page

    const onDocumentLoadSuccess = (document: { numPages: number }) => {
        setNumPages(document.numPages);
    };

    return (
        <div>
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>
            <div>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
                <button disabled={numPages === 1 || pageNumber <= 1}>
                    Previous
                </button>
                <button disabled={numPages === 1 || pageNumber >= (numPages || 0)}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PdfViewer;
