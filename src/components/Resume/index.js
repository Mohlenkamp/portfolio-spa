import React from 'react';
import backgroundAboutMe from '../../assets/img/Blue Water_Zoom Background.mp4';

function Resume () {

    return(
        <section className="section-form">
            <video className='videoTag' id="aboutme-background" autoPlay loop muted>
                <source src={backgroundAboutMe} type='video/mp4' />
            </video>
            <h1>Proficiencies</h1>
            <div class="col-12 container">
                <ul class="list-unstyled row">
                    <li class="list-item col-4 border-top py-2">Web/Desktop Programming</li>
                    <li class="list-item col-4 border-top py-2">Systems Analysis/Integration</li>
                    <li class="list-item col-4 border-top py-2">Project Management</li>
                    <li class="list-item col-4 border-top py-2">Program Architecture</li>
                    <li class="list-item col-4 border-top py-2">Lifecycle Development</li>
                    <li class="list-item col-4 border-top py-2">SQL</li>
                    <li class="list-item col-4 border-top py-2">MERN</li>
                    <li class="list-item col-4 border-top py-2">TDD</li>
                    <li class="list-item col-4 border-top py-2">Agile/Scrum</li>
                    <li class="list-item col-4 border-top py-2">WINS</li>
                    <li class="list-item col-4 border-top py-2">Git/SVN</li>
                    <li class="list-item col-4 border-top py-2">.NET</li>
                    <li class="list-item col-4 border-top border-bottom py-2">Adaptive Learning</li>
                    <li class="list-item col-4 border-top border-bottom py-2">HL7</li>
                    <li class="list-item col-4 border-top border-bottom py-2">JSOPN/Rest/WebAPI</li>
                </ul>
            </div>
            <a class="resumeDownload" target="_blank" rel="noopener noreferrer" href="https://1drv.ms/t/s!AgBqCEskQybFltJDkgCwaatnmmOdGQ">Download Resume</a>
        </section>
    )
}

export default Resume;