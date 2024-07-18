// import NavbarTwo from "../../components/navbar/NavbarTwo"
import './registration.css'
import Footer from "../../components/footer/Footer";
import Form from "../../components/RegistrationComponents/Form";
import { useState } from "react";
import FormTwo from "../../components/RegistrationComponents/FormTwo";
import Navbar from "../../components/navbar/Navbar";
const RegistrationPage = () => {
const [formToggle, setFormToggle] = useState(false);
const handleClick = () =>{
    setFormToggle(!formToggle)
}
  return (
    <>
        {/* <NavbarTwo/> */}

        <div className="registration-container">
        <Navbar/>
            <div className="form-selection">

                <div className="button-form-container">
                    <h2 className="registration-form-title">Select Your Form</h2>
                    <button className="btn-selection" onClick={() => handleClick(!formToggle)}>Click Here</button> 
                </div>
                {formToggle ? <Form/> : <FormTwo/>}
            </div>
        </div>
         <Footer/>
    </>
  )
}

export default RegistrationPage
