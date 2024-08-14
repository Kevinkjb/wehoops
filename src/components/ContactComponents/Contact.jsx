import './contact.css'
import { FaFacebook, FaYoutube   } from "react-icons/fa";
// FaPhoneSquareAlt
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_vretwlc', 'template_m3iaii9', form.current, {
          publicKey: '7VOmYbb3k92YfTUGv',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            console.log('Message Sent!')
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
                    <p className='contact-text'>Feel free to reach out to us if you have more question about our programs.</p>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="fname-input">
                            <label htmlFor="fname">Full Name</label> <br />
                            <input className='fname' id='fname' type="text" name="user_name" placeholder="Bob Smith" />
                        </div>
                        <div className="email-input">
                            <label htmlFor="email">Email Address</label> <br />
                            <input className='email' id='email' type="email" name="user_email" placeholder="Enter your email" />
                        </div>
                        <div className="message-input">
                            <label htmlFor="message">Message</label> <br />
                            <textarea className="message" id='message' name="message" placeholder="Feel free to ask us question..."></textarea>
                        </div>
                        <div className="button-input">
                            
                            <button type="submit" className="contact-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contact-info">
                <p className='contact-info-title'>Contact Info</p>
                {/* CONTACT INFO SECTION */}
                <div className="contact-home-details">
                    <div className="contact-phone">
                        {/* <FaPhoneSquareAlt className='phone-icon'/> */}
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
                    {/* SOCIAL MEDIA LINK SECTION */}
                    <div className="contact-social">
                        <p className='context'>Follow Us</p>
                        <div className="social-info-contact">

                            <a className='contact-social-link' href="https://www.facebook.com/profile.php?id=61555168801559" target='_blank' aria-label='Link to facebook page'>
                                <FaFacebook className='contact-social-icon'/>
                            </a>
                            <a className='contact-social-link' href="" aria-label='Link to youtube page' target='_blank'>
                                <FaYoutube className='contact-social-icon'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
