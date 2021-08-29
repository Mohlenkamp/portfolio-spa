import React from 'react';

function About() {
    return (
        <section className='about-me-section'>
            <h1 id="about">About Me</h1>
          <img
            src={require(`../../assets/img/cover-image.jpg`).default}
            alt={'AboutMeBackground'}
            className="img-thumbnail mx-1"
          />
        </section>
    );
}
export default About;
