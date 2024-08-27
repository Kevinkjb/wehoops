import './contact.css';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const errors = {};
    const name = form.current['user_name'].value.trim();
    const email = form.current['user_email'].value.trim();
    const message = form.current['message'].value.trim();
    
    if (!name) {
      errors.name = 'Full Name is required';
    }
    
    if (!email) {
      errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email Address is invalid';
    }
    
    if (!message) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setErrors({});
    emailjs
      .sendForm('service_vretwlc', 'template_m3iaii9', form.current, {
        publicKey: '7VOmYbb3k92YfTUGv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSuccessMessage('Message Sent!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='contact-main' id="contact">
      <div className="contact-content">
        <div className="contact-section">
          <div className="contact-header">
            <h2 className="contact-title">Contact Us</h2>
            <p className='contact-text'>Feel free to reach out to us if you have more questions about our programs.</p>
          </div>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <div className="fname-input">
                <label htmlFor="fname">Full Name</label> <br />
                <input className='fname' id='fname' type="text" name="user_name" placeholder="Bob Smith" />
                {errors.name && <p className='error-message'>{errors.name}</p>}
              </div>
              <div className="email-input">
                <label htmlFor="email">Email Address</label> <br />
                <input className='email' id='email' type="email" name="user_email" placeholder="Enter your email" />
                {errors.email && <p className='error-message'>{errors.email}</p>}
              </div>
              <div className="message-input">
                <label htmlFor="message">Message</label> <br />
                <textarea className="message" id='message' name="message" placeholder="Feel free to ask us a question..."></textarea>
                {errors.message && <p className='error-message'>{errors.message}</p>}
              </div>
              <div className="button-input">
                <button type="submit" className="contact-btn">Submit</button>
              </div>
              {successMessage && <p className='success-message'>{successMessage}</p>}
            </form>
          </div>
        </div>
        <div className="contact-info">
          <p className='contact-info-title'>Contact Info</p>
          <div className="contact-home-details">
            <div className="contact-phone">
              <div className="email-info">
                <p className='email-title'>Email:</p>
                <a className='contact-email' href="mailto:we.hoopsociety@gmail.com">
                  we.hoopsociety@gmail.com
                </a>
              </div>
              <div className="phone-info">
                <p className='phone-title'>Phone:</p>
                <a className='contact-call' href="tel:+7803355238">
                  <p className='phone-text'>+780 335 5238</p>
                </a>
                <a className='contact-call' href="tel:+7808398314">
                  <p className='phone-text'>+780 839 8314</p>
                </a>
              </div>
            </div>
            <div className="contact-social">
              <p className='context'>Follow Us</p>
              <div className="social-info-contact">
                <a className='contact-social-link' href="https://www.facebook.com/profile.php?id=61555168801559" target='_blank' aria-label='Link to facebook page'>
                  <FaFacebook className='contact-social-icon' />
                </a>
                <a className='contact-social-link' href="" aria-label='Link to youtube page' target='_blank'>
                  <FaYoutube className='contact-social-icon' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
