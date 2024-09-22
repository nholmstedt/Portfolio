// import React from 'react';
// import './Main.css'; // Optional: Include your CSS file for styling
// UI Handling.
// const Main: React.FC = () => {
//     return (
//         <main className="main-content">
//             <section id="about">
//                 <h2>About Me</h2>
//                 <p>This is a brief introduction about me.</p>
//             </section>
//             <section id="projects">
//                 <h2>Projects</h2>
//                 <p>Here are some of my projects.</p>
//                 {/* You can map through your projects and render them here */}
//             </section>
//             <section id="contact">
//                 <h2>Contact</h2>
//                 <p>Get in touch!</p>
//             </section>
//         </main>
//     );
// };
//
// export default Main;

import React from 'react';
import '../App.css'; // Assuming you have your CSS file in the same folder

const Main: React.FC = () => {
    return (
        <main>
            <div className="hero-image"></div>

            <div className="hero-text1">
                <h5>
                    <center>
                        <img src={require('./images/waxyowlportraittransparent.PNG').default} style={{ width: '120px', height: '120px' }} alt="Nichole Holmstedt" />
                        <b>Nichole Holmstedt's Portfolio</b>
                        <img src={require('./images/waxyowlportraittransparent.PNG').default} style={{ width: '120px', height: '120px' }} alt="Nichole Holmstedt" />
                    </center>
                </h5>
            </div>

            <div className="hero-text">
                <h2>About Me</h2>
                <p>Hello, my name is Nichole Holmstedt. I am a recent graduate from Bellevue University with my Bachelors in Software Development...</p>
                {/* Add more content as needed */}
            </div>

            <div className="hero-text3">
                <h2>Resume</h2>
                {/*<p>Software Development Resume - <a href="Nichole_Holmstedt_SoftwareResume2021.pdf">Nichole Holmstedt Software Development Resume</a>.</p>*/}
            </div>

            <div className="hero-text4">
                <h2>Projects:</h2>
                <p>Dungeons and Dragons Webpage - <a href="https://dndacademy.neocities.org/">DND Academy</a>.</p>
                <p>Boss Lady Paranormal: Webpage for my sister and her friends - <a href="https://nholmstedt.github.io/BossLadyParanormal.github.io/">Boss Lady Paranormal</a>.</p>
            </div>

            <div className="hero-text2">
                <p>Thank you for taking your time to visit my webpage! Feel free to contact me at any time through the contact page...</p>
            </div>
        </main>
    );
};

export default Main;
