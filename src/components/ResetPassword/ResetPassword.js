import React, { useEffect, useState } from "react";
import {  } from "react-router-dom";
import './ResetPassword.css';

const ResetPassword =()=>{
    const [form, setForm] = useState({
        oldpass: "",
        newpass: "",
        newconfirmpass:""
    });
    const [validationError, setValidationError] = useState({
        oldpass: { error: "", isValid: false },
        newpass: { error: "", isValid: false },
        newconfirmpass: { error: "", isValid: false }
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
        // switch (e.target.id) {
        //     case 'oldpass':
        //         checkOldPassword();
        //         break;

        //     case 'newpass':
        //         checkPassword();
        //         break;

        //     case 'newconfirmpass':
        //         checkConfirmPassword();
        //         break;

        //     default :
        //         checkOldPassword();
        //         break;
        // }

    };
    const showsuc = (e, msg, res) => {
        // console.log('before:' + JSON.stringify(validationError));
        setValidationError((prevState) => ({
            ...prevState,
            [e]: { error: msg, isValid: res }

        }))
        // console.log('name validation:', e, ':::::', "msg:", msg);

    };
    const checkOldPassword = () => {
        let valid = false;
        const password = form.oldpass.trim();
        const passwordp = "oldpass";

        console.log(password);
    
        if (!isRequired(password)) {
            showsuc(passwordp, 'Password cannot be blank.',false);
        } 
        else {
            showsuc(passwordp,'',true);
            valid = true;
        }
    
        return valid;
    };
    
    const checkPassword = () => {
        let valid = false;
    
        const password = form.newpass.trim();
        const passwordp = "newpass";
        console.log(password);
    
        if (!isRequired(password)) {
            showsuc(passwordp, 'Password cannot be blank.',false);
        } 
        else if (!isPasswordSecure(password)) {
            showsuc(passwordp, 'need a strong password',false);
        } 
        else {
            showsuc(passwordp,'',true);
            valid = true;
        }
    
        return valid;
    };
    
    const checkConfirmPassword = () => {
        let valid = false;
        // check confirm password
        const confirmPassword = form.newconfirmpass.trim();
        const confirmPasswordp = "newconfirmpass";
        const password = form.newpass.trim();
        
    
        if (!isRequired(confirmPassword)) {
            showsuc(confirmPasswordp, 'Confirm the password again',false);
        } else if (password !== confirmPassword) {
            showsuc(confirmPasswordp, 'Password should match with new Password',false);
        } else {
            showsuc(confirmPasswordp,'',true);
            valid = true;
        }
    
        return valid;
    };
    
    
    const isPasswordSecure = (password) => {
        //eslint-disable-next-line
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
    };
    
    const isRequired = value => value === '' ? false : true;
    
    const onSubmitForm = e => {
        e.preventDefault();

    
        let isOldPasswordValid = checkOldPassword(),isPasswordValid = checkPassword(),isConfirmPasswordValid = checkConfirmPassword();
           
    
        let isFormValid = isOldPasswordValid && isPasswordValid && isConfirmPasswordValid;
       
        if (isFormValid) {
            // alert("Your Password is Successfully Changed!");
            // localStorage.removeItem("username");
            // localStorage.removeItem("password");
            // window.location.href = './login.html'
        }
    };
    return(
        <>
        <div className="bodyclassrp">
        <div className="container">
        <div className="btcontainer">
            <div className="rp_main">
                <form id="rpform" onSubmit={onSubmitForm}>
                    <h2>RESET PASSWORD</h2>
                    <div className="reset_form_content">
                        <div className="input_tag">
                            <input type="password" className="pass" name="oldpass" id="oldpass" placeholder="OLD PASSWORD"  value={form.oldpass} onInput={onInputField} onChange={onUpdateField} autoComplete="off"/>
                            <small>{validationError.oldpass.error}</small>
                        </div>
                        <div className="input_tag">
                            <input type="password" className="pass" name="newpass" id="newpass" placeholder="NEW PASSWORD" value={form.newpass} onInput={onInputField} onChange={onUpdateField} autoComplete="off"/>
                            <small>{validationError.newpass.error}</small>
                        </div>
                        <div className="input_tag">
                            <input type="password" className="pass" name="newconfirmpass" id="newconfirmpass" placeholder="CONFIRM PASSWORD" value={form.newconfirmpass} onInput={onInputField} onChange={onUpdateField} autoComplete="off"/>
                            <small>{validationError.newconfirmpass.error}</small>
                        </div>
                        <div className="button_tag">
                            <button type="submit">RESET</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </div>
        </>
    );
}
export default ResetPassword;