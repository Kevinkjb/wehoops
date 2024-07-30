import { useState } from 'react';
import './form.css'
const FormTwo = () => {
    // const [waiver, setWaiver] = useState(false)
    // const waiverHandle = () => {
    //   setWaiver(!waiver)
    // }
    const [phone, setPhone] = useState();
    const phoneChange = (e) => {
      const value = e.target.value.replace(/\D/g, "");
      setPhone(value)
    }
    const [age, setAge] = useState();
    const handleChange = (e) =>{
      const value = e.target.value.replace(/\D/g, "");
      setAge(value);
  
    }
    function Submit(e){
     
      e.preventDefault();
    //   window.open('SQUARE UP LINK', '_blank');
      const formEl = document.querySelector("form");
      const formDatab = new FormData(formEl);
      fetch(
        "https://script.google.com/macros/s/AKfycbyaI9aPWOuJi-06NHtblouu7YQQFqsTQUNbg5iXJD9f9XmOfA9cnyEUbzL48tjBAflY8Q/exec",
        {
          method: 'POST',
          body: formDatab,
          mode: "no-cors",
        }
      )
      .then((res) => res.json)
      .then((data) =>{
        console.log(data)
  
      })
      .catch((e) =>{
        console.log(e)
      })
  
  }
  return (
    <div>
      <div className="registration-form">
            <h2 className="form-title">Individual Registration Form</h2>
            <form  className='form' onSubmit={(e) => Submit(e)}>

            {/* PROGRAM SELECTION SECTION */}
            <div className="program-input">
            <label className='label-title' htmlFor="program">Program</label> <br />
            <select className='selected-items' id="program" name="Program">
                <option value="Choose a Program" selected disabled>Choose a Program...</option>
                <option value="Skills Development / 3x3 (U9 coed)">Skills Development / 3x3 (U9 coed)</option>
                <option value="Skills Development / 3x3 (U13 boys)">Skills Development / 3x3 (U13 boys)</option>
                <option value="Skills Development / 3x3 (U13 girls)">Skills Development / 3x3 (U13 girls)</option>
                <option value="All Girls Basketball Program (U17)">All Girls Basketball Program (U17)</option>
                <option value="All Boys Basketball Program (U17)">All Boys Basketball Program (U17)</option>
            </select>
            </div>
            
            {/* FULL NAME SECTION */}
            <div className="register-fname-input">
                <label className='label-title' htmlFor="fname">Full Name:</label> <br />
                <input className='fname' type="text" id='fname' name='Name' placeholder='Enter Your Full Name'/>
            </div>
            
            {/* ADDRESS SECTION */}
            <div className="address-input">
                <label className='label-title' htmlFor="address">Address:</label> <br />
                <input className='address' id='address' type="text" name='Address' placeholder='Enter Your Address'/>
            </div>
            {/* AGE SECTION */}
            <div className="age-input">
                <label className='label-title' htmlFor="age">Age:</label> <br />
                <input className='age' name='Age' id='age' value={age} onChange={handleChange} placeholder='Enter Your Age'/>
            </div>

            {/* DATE OF BIRTH SECTION */}
            <div className="dob-input">
                <label className='label-title' htmlFor="date">Date of Birth:</label> <br />
                <input className='date' type="date" id='date' name='DOB' />
            </div>

            {/* GENDER SELECTION SECTION */}
            <div className="gender-section">
                <label className='label-title' htmlFor="gender" style={{marginBottom: '.3rem'}}> Gender:</label> <br />
                <div className='gender-list'>
                <div>
                    <input type="radio" id="male" name="Gender" value="male" style={{marginRight: '.3rem'}}/>
                    <label className='label-title' htmlFor="male">Male</label>
                </div>
                <div>
                    <input type="radio" id="female" name="Gender" value="female" style={{marginRight: '.3rem'}}/>
                    <label className='label-title' htmlFor="female">Female</label>
                </div>
                <div>
                    <input type="radio" id="nodefine" name="Gender" value="nodefine" style={{marginRight: '.3rem'}}/>
                    <label className='label-title' htmlFor="nodefine">Prefer not to say</label>
                </div>
                </div>

            </div>

            {/* EMAIL ADDRESS SECTION */}
            <div className='register-email-input'>
                <label className='label-title' htmlFor="email">Email Address</label> <br />
                <input className='email' id='email' type="text" name='Email' placeholder='Enter Your Email Address'/>
            </div>

            {/* PHONE NUMBER SECTION */}
            <div className="phone-input">
                <label className='label-title' htmlFor="phone">Phone Number</label> <br />
                <input className='phone' type="text" id='phone' name='Phone' placeholder='Enter Your Phone Number' value={phone} onChange={phoneChange}/>
            </div>
            
            {/* EMERGENCY CONTACT INFORMATION SECTION */}
            <div className='emergency-name-input'>
                <label className='label-title' htmlFor="emergency-contactName">Emergency Contact Name</label> <br />
                <input className='emergency-name' id='emergency-contactName' type="text" name='EmergencyContactName' placeholder='Enter Your Emergency Contact Name'/>
            </div>
            <div className='emergency-number-input'>
                <label className='label-title' htmlFor="emergency-contactNumber">Emergency Contact Number</label> <br />
                <input className='emergency-number' id='emergency-contactNumber' type="text" name='EmergencyContactNumber' placeholder='Enter Your Emergency Contact Number'/>
            </div>
            
            {/* MEDICAL CONDITION SECTION */}
            <div className='medical-input'>
                <label className='label-title' htmlFor="medical">Medical Condition (if applicable)</label> <br />
                <input className='medical-condition' id='medical' type="text" name='Medical' placeholder='List your Medical Condition...'/>
            </div>

            {/* WAIVER SECTION */}
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
                                Harassment, bullying, or any form of inappropriate behavior directed at fellow participants, staff, 
                                or any associated individuals is strictly prohibited. Participants found engaging in such behavior may face disciplinary actions, 
                                including suspension or removal from WEHOOPS activities. 
                                Participants release WEHOOPS from any claims arising from disciplinary actions taken due to violations of this policy.
                            </p>
                        </div>
                        <div className="waiver-details">
                            <h4 className='waiver-title'>Minor Participant Waiver</h4>
                            <p className='waiver-text'>
                                {`For participants under the age of 18, a parent or legal guardian must sign this waiver. 
                                The guardian acknowledges the minor's participation in WEHOOPS activities and assumes all risks on their behalf. 
                                The guardian agrees to all terms outlined in the General Liability Waiver, Medical Consent and Waiver and Photo and Video Release.`}
                            </p>
                        </div>
                        <div className="waiver-details">
                            <h4 className='waiver-title'>Equipment and Facility Use Waiver</h4>
                            <p className='waiver-text'>
                                Participants agree to use WEHOOPS equipment and facilities responsibly and in accordance with all rules and guidelines. 
                                Participants accept responsibility for any damage caused to equipment or facilities due to misuse or negligence. 
                                Participants release WEHOOPS from liability for any injuries or damages resulting from the use of equipment or facilities.
                            </p>
                        </div>
                    </div> 
                </div>
                <input type="checkbox" id='waiver' name='Waiver' style={{marginRight: '.3rem'}}/>
                <label className='label-title' htmlFor="waiver">Do you agree?</label>
            </div>
                <button className='form-btn' type='submit'>Next</button>
            </form>
        </div>
    </div>
  )
}

export default FormTwo
