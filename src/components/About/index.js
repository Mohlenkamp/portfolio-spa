import React from 'react';

import backgroundAboutMe from '../../assets/img/Blue Water_Zoom Background.mp4'

function About() {
    return (
        <section className='about-me-section'>

          <video className='videoTag' id="aboutme-background" autoPlay loop muted>
            <source src={backgroundAboutMe} type='video/mp4' />
          </video>
          <div class="jumbotron p-3 p-md-5 text-white rounded bg-blue">
            <div class="row">
              <div class="col-6 px-0">
                <h2 class="display-4 font-italic">What would you like to know?</h2>
                <p class="lead my-3">Ok. Well, I'm a full-stack web developer who is currently in a MERN-stack virtual bootcamp. Been in the IT field for 15 years doing mostly desktop apps and SQL ETL/SPs </p>
                </div>
                <div class="col-6 px-0">
                  <img className="avatar" src={require(`../../assets/img/myavatar.jpg`).default} />
                  <p class="lead my-3">Balding, slightly overweight, and a voracious coffee drinker. Based in Nashville, TN and <strong>definitely</strong> not looking to relocate. Good "team player" with attention to details and deadlines, but a lousy singing voice. </p>
                </div>
            </div>
               
                {/* <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p> */}
              </div>
              {/* <div class="col-md-12 px-0">
                <h2 class="display-4 font-italic">What would you like to know?</h2> */}
               
                {/* <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p> */}
              
              
          {/* </div> */}
          <div class="row mb-2">
            <div class="col-md-6">
              <div class="card flex-md-row mb-4 box-shadow h-md-250">
                <div class="card-body d-flex flex-column align-items-start">
                  <strong class="d-inline-block mb-2 text-primary">Academic Sponser</strong>
                  <h3 class="mb-0">
                    <a class="text-dark" href="#">Vanderebilt University</a>
                  </h3>
                  <div class="mb-1 text-muted">April 2021</div>
                  <p class="card-text mb-auto">This is the university sponser of this bootcamp.</p>
                  <a href="https://bootcamps.vanderbilt.edu/">Bootcamp Infomation</a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="card flex-md-row mb-4 box-shadow h-md-250">
                <div class="card-body d-flex flex-column align-items-start">
                  <strong class="d-inline-block mb-2 text-success">Bootcamp</strong>
                  <h3 class="mb-0">
                    <a class="text-dark" href="#">Trilogy Education</a>
                  </h3>
                  <div class="mb-1 text-muted">Sept. 05,2021</div>
                  <p class="card-text mb-auto">This is the company that conducts the MERN bootcamp that I'm currently working with. They are partnered with Vanderbilt to provide this camp.</p>
                  <a href="https://www.trilogyed.com/">Company Website</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}
export default About;
