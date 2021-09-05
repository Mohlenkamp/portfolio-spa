import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import backgroundAboutMe from '../../assets/img/Blue Water_Zoom Background.mp4';


function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log('Handle Form', formState);
    }
  };

  return (
    <section class="section-form">
        <video className='videoTag' id="aboutme-background" autoPlay loop muted>
            <source src={backgroundAboutMe} type='video/mp4' />
        </video>
        <h1 class="h1-responsive font-weight-bold text-center my-4">Contact Me</h1>
        <p class="contact-instruct contact-header col-md-12 justify-text-center">Do you have any questions? Please do not hesitate to contact me directly. Just know that I probably won't come back to you within
           a few days or maybe weeks because I'm SUPER busy right now.</p>
        <div class="row">
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div class="inputWrapper">
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
      )}
      <button class="btn btn-outline-warning" data-testid="button" type="submit">Submit</button>
    </form>
    </div>
  </section>
  );
      };

export default ContactForm;