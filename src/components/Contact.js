import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Let's Talk</h2>
      <p>
        Have a project in mind or just want to say hi?
      </p>
      <a href="mailto:chalamaarjun@gmail.com" className="contact-email">
        chalamaarjun@gmail.com
      </a>
      <div className="contact-socials">
        <a href="https://github.com/CHALAMA1215" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/chalama-reddy-27a1b02a4" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;