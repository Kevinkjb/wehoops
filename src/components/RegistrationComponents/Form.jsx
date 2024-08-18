import { useState } from 'react';
import './form.css';

const Form = () => {
    const [phone, setPhone] = useState('');
    const [age, setAge] = useState('');
    const [errors, setErrors] = useState({});
    const [paymentMethod, setPaymentMethod] = useState('');
    const [referenceNumber, setReferenceNumber] = useState('');

    const phoneChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setPhone(value);
    };

    const handleChange = (e) => {
        const value = e.target.value.replace(/\D/g, "");
        setAge(value);
    };

    const handleClear = () => {
        setPhone('');
        setAge('');
        setPaymentMethod('');
        setReferenceNumber('');
        setErrors({});
        document.querySelector("form").reset();
    };

    const validate = () => {
        const newErrors = {};
        if (!phone) newErrors.phone = 'Phone is required';
        if (!age) newErrors.age = 'Age is required';
        if (!paymentMethod) newErrors.paymentMethod = 'Payment method is required';
        if ((paymentMethod === 'cash' || paymentMethod === 'e-transfer') && !referenceNumber) {
            newErrors.referenceNumber = 'Reference number is required for Cash or E-Transfer';
        }
        return newErrors;
    };

    const Submit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const formEl = document.querySelector("form");
        const formData = new FormData(formEl);

        if (paymentMethod === 'online') {
            window.open('https://checkout.square.site/merchant/ML0S1CYB4M8GM/checkout/GLKANANTBQIUF2KC7IPXUZNX', '_blank');
        }

        fetch(
            "https://script.google.com/macros/s/AKfycby6Xwy6NXAPGtE9ZOMqdjSDhUx6L4B9OMmaaNAnyCPt3TACDDHPnnzWZ6q3CJ00wucK/exec",
            {
                method: 'POST',
                body: formData,
                mode: "no-cors",
            }
        )
        .then((res) => res.json)
        .then((data) => {
            console.log(data);
            handleClear(); // Clear the form after successful submission
        })
        .catch((e) => {
            console.log(e);
        });
    };

    return (
        <div>
            <div className="registration-form">
                <h2 className="form-title">Membership Form</h2>
                <form className='form' onSubmit={Submit}>
                    {/* Original form fields */}

                    <div className="register-fname-input">
                        <label className='label-title' htmlFor="fname">Full Name:</label> <br />
                        <input className='fname' type="text" id='fname' name='Name' placeholder='Enter Your Full Name' required />
                    </div>

                    <div className="address-input">
                        <label className='label-title' htmlFor="address">Address:</label> <br />
                        <input className='address' id='address' type="text" name='Address' placeholder='Enter Your Address' required />
                    </div>

                    <div className="age-input">
                        <label className='label-title' htmlFor="age">Age:</label> <br />
                        <input className='age' name='Age' id='age' value={age} onChange={handleChange} placeholder='Enter Your Age' required />
                        {errors.age && <span style={{ color: 'red' }}>{errors.age}</span>}
                    </div>

                    <div className="dob-input">
                        <label className='label-title' htmlFor="date">Date of Birth:</label> <br />
                        <input className='date' type="date" id='date' name='DOB' required />
                    </div>

                    <div className="gender-section">
                        <label className='label-title' htmlFor="gender" style={{ marginBottom: '.3rem' }}> Gender:</label> <br />
                        <div className='gender-list'>
                            <div>
                                <input type="radio" id="male" name="Gender" value="male" style={{ marginRight: '.3rem' }} required />
                                <label className='label-title' htmlFor="male">Male</label>
                            </div>
                            <div>
                                <input type="radio" id="female" name="Gender" value="female" style={{ marginRight: '.3rem' }} required />
                                <label className='label-title' htmlFor="female">Female</label>
                            </div>
                            <div>
                                <input type="radio" id="nodefine" name="Gender" value="nodefine" style={{ marginRight: '.3rem' }} required />
                                <label className='label-title' htmlFor="nodefine">Prefer not to say</label>
                            </div>
                        </div>
                    </div>

                    <div className='register-email-input'>
                        <label className='label-title' htmlFor="email">Email Address</label> <br />
                        <input className='email' id='email' type="email" name='Email' placeholder='Enter Your Email Address' required />
                    </div>

                    <div className="phone-input">
                        <label className='label-title' htmlFor="phone">Phone Number</label> <br />
                        <input className='phone' type="text" id='phone' name='Phone' placeholder='Enter Your Phone Number' value={phone} onChange={phoneChange} required />
                        {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}
                    </div>

                    <div className='emergency-name-input'>
                        <label className='label-title' htmlFor="emergency-contactName">Emergency Contact Name</label> <br />
                        <input className='emergency-name' id='emergency-contactName' type="text" name='EmergencyContactName' placeholder='Enter Your Emergency Contact Name' required />
                    </div>

                    <div className='emergency-number-input'>
                        <label className='label-title' htmlFor="emergency-contactNumber">Emergency Contact Number</label> <br />
                        <input className='emergency-number' id='emergency-contactNumber' type="text" name='EmergencyContactNumber' placeholder='Enter Your Emergency Contact Number' required />
                    </div>

                    <div className='medical-input'>
                        <label className='label-title' htmlFor="medical">Medical Condition (if applicable)</label> <br />
                        <input className='medical-condition' id='medical' type="text" name='Medical' placeholder='List your Medical Condition...' required />
                    </div>

                    <div className='waiver-input'>
                        <div className="waiver-info">
                            <h4 className='waiver-header'>WEHOOPS Basketball Waiver Descriptions</h4>

                            <div>
                                <div className="waiver-details">
                                    <h4 className='waiver-title'>General Liability Waiver</h4>
                                    <p className='waiver-text'>
                                        By signing this waiver, participants acknowledge and accept the inherent risks associated with
                                        playing basketball, including but not limited to physical injury or property damage.
                                        Participants agree to hold WEHOOPS, its staff, and affiliates harmless from any claims or
                                        liabilities arising from participation in any WEHOOPS events or activities.
                                    </p>
                                </div>

                                <div className="waiver-details">
                                    <h4 className='waiver-title'>Medical Consent and Waiver</h4>
                                    <p className='waiver-text'>
                                        Participants agree to disclose any medical conditions that might affect their ability to safely participate in basketball activities.
                                        In the event of a medical emergency, participants authorize WEHOOPS staff to seek and obtain necessary medical treatment.
                                        Participants release WEHOOPS from any liability related to the administration of medical care.
                                    </p>
                                </div>
                                <div className="waiver-details">
                                    <h4 className='waiver-title'>Photo and Video Release</h4>
                                    <p className='waiver-text'>
                                        Participants grant WEHOOPS permission to capture and use photographs and videos of them for promotional and marketing purposes.
                                        This includes but is not limited to social media, website content, and print materials.
                                        Participants waive any right to royalties or compensation arising from the use of their likeness in such materials.
                                    </p>
                                </div>
                                <div className="waiver-details">
                                    <h4 className='waiver-title'>Social Media and Conduct Waiver</h4>
                                    <p className='waiver-text'>
                                        Participants agree to adhere to WEHOOPS code of conduct both on and off the court, including on social media platforms.
                                        Harassment, bullying, or any form of inappropriate behavior directed at fellow participants, staff, or officials
                                        will not be tolerated and may result in suspension or expulsion from WEHOOPS events without refund.
                                        Participants acknowledge that WEHOOPS reserves the right to enforce this policy as deemed necessary.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className='register-waiver-section'>
                            <input className='waiver-checkbox' id='waiver-checkbox' type="checkbox" name='Waiver' required />
                            <label className='waiver-title waiver-title-box' htmlFor="waiver-checkbox">I agree to WEHOOPS waiver description above</label>
                        </div>
                    </div>

                    {/* Payment Method Section */}
                    <div className="payment-method">
                        <label className='label-title' htmlFor="payment-method">Select Payment Method:</label> <br />
                        <select
                            className='selected-items'
                            id="payment-method"
                            name="PaymentMethod"
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select your option</option>
                            <option value="cash">Cash</option>
                            <option value="e-transfer">E-Transfer</option>
                            <option value="online">Online Payment</option>
                        </select>
                        {errors.paymentMethod && <span style={{ color: 'red' }}>{errors.paymentMethod}</span>}
                    </div>

                    {(paymentMethod === 'cash' || paymentMethod === 'e-transfer') && (
                        <div className="reference-number">
                            <label className='label-title' htmlFor="reference-number">Reference Number:</label> <br />
                            <input
                                className='reference-number-input'
                                type="text"
                                id="reference-number"
                                name="reference-number"
                                value={referenceNumber}
                                onChange={(e) => setReferenceNumber(e.target.value)}
                                placeholder="Enter reference number"
                                required
                            />
                            {errors.referenceNumber && <span style={{ color: 'red' }}>{errors.referenceNumber}</span>}
                        </div>
                    )}

                    {/* Submit button */}
                    <div className="form-btn-container">
                      <button className='form-btn' type='submit'>
                          {paymentMethod === 'online' ? 'Proceed to Payment' : 'Submit'}
                      </button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default Form;


