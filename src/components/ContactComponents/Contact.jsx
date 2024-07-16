import './contact.css'
import { FaPhoneSquareAlt, FaSlack, FaFacebook, FaYoutube   } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='contact-main'>
        <div className="contact-content">
            <div className="contact-section">
                <div className="contact-header">
                    <h2 className="contact-title">Contact Us</h2>
                    <p className='contact-text'>Feel free to reach out to us if you have more question about our programs.</p>
                </div>
                <div className="contact-form">
                    <form action="">
                        <div className="fname-input">
                            <label htmlFor="fname">Full Name</label> <br />
                            <input className='fname' id='fname' type="text" name="user_name" placeholder="Bob Smith" />
                        </div>
                        <div className="email-input">
                            <label htmlFor="email">Email Address</label> <br />
                            <input className='email' id='email' type="email" name="email" placeholder="Enter your email" />
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
                <div className="contact-phone">
                    
                    <div className="phone">
                        <p className='context'>Call Us</p>
                        <div className="call">
                            <FaPhoneSquareAlt className='phone-icon'/>
                            <p className='phone-text'>+780 335 5238</p>
                        </div>
                        <div className="call">
                            <FaPhoneSquareAlt className='phone-icon'/>
                            <p className='phone-text'>+780 839 8314</p>
                        </div>
                    </div>
                </div>
                <div className="contact-social">
                    <p className='context'>Follow Us</p>
                    <div className="social-info-contact">
                        <FaSlack className='contact-social-icon'/>
                        <FaFacebook className='contact-social-icon'/>
                        <FaYoutube className='contact-social-icon'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
