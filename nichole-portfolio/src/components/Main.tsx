import React from 'react';
import '../App.css';
import test from "../test.pdf"
const Main: React.FC = () => {
    // const [pdfFile] = useState('/test.pdf'); // This should point to the public directory

    return (
        <main>

            <div className="hero-text1">
                <h5>
                    <center>
                        <img src={require('../images/waxyowlportraittransparent.PNG').default}
                             style={{width: '120px', height: '120px'}} alt="Nichole Holmstedt"/>
                        <b>Nichole Holmstedt's Portfolio</b>
                        <img src={require('../images/waxyowlportraittransparent.PNG').default}
                             style={{width: '120px', height: '120px'}} alt="Nichole Holmstedt"/>
                    </center>
                </h5>
            </div>

            <div className="hero-text">
                <h2>About Me</h2>
                <p>Hello, my name is Nichole Holmstedt. I am a recent graduate from Bellevue University with my
                    Bachelor's in Software Development...</p>
                {/* Add more content as needed */}
            </div>

            <div className="s1">
                <h2>Resume</h2>
                <a href={test} target="_blank" rel="noopener noreferrer">
                    Opens test.pdf
                </a>
                {/*<PdfViewer pdfFile={pdfFile} pageNumber={pageNumber}/>*/}
            </div>

            {/*<div className="hero-text4">*/}
            {/*    <h2>Projects:</h2>*/}
            {/*    <p>Dungeons and Dragons Webpage - <a href="https://dndacademy.neocities.org/">DND Academy</a>.</p>*/}
            {/*    <p>Boss Lady Paranormal: Webpage for my sister and her friends - <a*/}
            {/*        href="https://nholmstedt.github.io/BossLadyParanormal.github.io/">Boss Lady Paranormal</a>.</p>*/}
            {/*</div>*/}

            <div className="hero-text2">
                <p>Thank you for taking your time to visit my webpage! Feel free to contact me at any time through the
                    contact page...</p>
            </div>
        </main>
    );
};

export default Main;

