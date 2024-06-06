import './contact.css'
import { FaPhoneSquareAlt, FaMapMarkerAlt  } from "react-icons/fa";
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
                            <input className='fname' type="text" name="user_name" placeholder="Full Name" />
                        </div>
                        <div className="email-input">
                            <input className='email' type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="message-input">
                            <textarea className="message" name="message" placeholder="Message"></textarea>
                        </div>
                        <div className="button-input">
                            <button type="submit" className="contact-btn">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="contact-info">
                <div className="contact-phone">
                    <FaPhoneSquareAlt className='phone-icon'/>
                    <div className="phone">
                        <p className='context'>Phone:</p>
                        <p className='contact-text'>+123 456 7890</p>
                    </div>
                </div>
                <div className="contact-address">
                    <FaMapMarkerAlt className='address-icon'/>
                    <div className="address">
                        <p className='context'>Address:</p>
                        <p className='contact-text'>123 Anywhere St, Any City, ST 12345</p>
                       
                    </div>
                </div>
                <a href="https://maps.app.goo.gl/QmSe6ru82JT6Rmj86" target='_blank'>
                    <button className='contact-direction'>Get Direction</button>
                </a>

            </div>
        </div>
    </div>
  )
}

export default Contact
