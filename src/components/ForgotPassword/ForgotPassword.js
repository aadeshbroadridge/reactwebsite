import React, { useEffect, useState } from 'react';
import './ForgotPassword.css'
import SubmitButton from "../../SubmitButton";
import InputTag from "../../InputTag";
import LabelTag from "../../LabelTag";
import ButtonTag from "../../ButtonTag";
import { Link } from 'react-router-dom';

function loginfunction() {

}

const ForgotPassword =()=> {
    const [form, setForm] = useState({
        email: ""
    });
    const [validationError, setValidationError] = useState({
        email: { error: "", isValid: false }
    });

    useEffect(() => {
        console.log('errrrrrrrrrror :', validationError);
    }, [validationError]);

    const onUpdateField = e => {
        // console.log('before form:' + JSON.stringify(form));

        console.log('name:' + e.target.name);
        console.log('value:' + e.target.value);
       
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value

        }))
        // console.log('after form:' + JSON.stringify(form));
    };
    const onInputField = e => {
        // console.log('input');
        switch (e.target.id) {
            case 'email':
                checkEmail();
                break;
            default:
                checkEmail();
                break;
        }

    };
    const showsuc = (e, msg, res) => {
        setValidationError((prevState) => ({
            ...prevState,
            [e]: { error: msg, isValid: res }

        }))

    };
    const checkEmail = () => {
        let valid = false;
        const email = form.email.trim();
        const emailp = "email";
        
        if (!isRequired(email)) {
            showsuc(emailp, 'Email cannot be blank.', false);
        } 
        else if (!isEmailValid(email)) {
            showsuc(emailp, 'Email is not valid.', false);
        }
        else {
            showsuc(emailp,'',true);
            valid = true;
        }
        return valid;
    };
    
    const isEmailValid = (email) => {
         //eslint-disable-next-line
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    
    
    const isRequired = value => value === '' ? false : true;

    const onSubmitForm = e => {
        e.preventDefault(); 
        let isEmailValid = checkEmail();
        
        let isFormValid = isEmailValid;

        // submit to the server if the form is valid
        if (isFormValid) {
            alert("Check your mail for new password!")
        }
    };
    return (
        <>
        <div className="bodyclassfp">
            <div className="fp_main">
                <form id="fpform"  onSubmit={onSubmitForm}>
                    <h2>FORGOT PASSWORD</h2>
                    <div className="fp_form_content">
                        <div className="input_tag">
                            <LabelTag htmlFor="email" labeltext="Enter Email"></LabelTag>
                            <InputTag validationError={validationError.email} value={form.email} onInput={onInputField} onChange={onUpdateField} type="email" class="email" id="email"name="email" placeholder="EMAIL" />
                            <small>{validationError.email.error}</small>
                        </div>
                        <div className="button_tag">
                            <SubmitButton value="FORGOT PASSWORD" />
                        </div>
                    </div>
                    <div className="twolinks">
                        <Link to="/">
                        <ButtonTag onClick={loginfunction} href="login.html" type="button" text="LOGIN"/>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}
export default ForgotPassword;

