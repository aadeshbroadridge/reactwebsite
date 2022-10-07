import React, { useEffect, useState } from 'react';
import {  Link , useNavigate} from "react-router-dom";
// import AnchorTag from '../../AnchorTag';
import ButtonTag from '../../ButtonTag';
import './Login.css';
import LoginInput from '../../LoginInput';
import SubmitButton from '../../SubmitButton';
function signupfunction() {

}


const Login = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        username: "",
        password: ""
    });
    const [validationError, setValidationError] = useState({
        username: { error: "", isValid: false },
        password: { error: "", isValid: false }
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
        console.log('input');
        switch (e.target.id) {
            case 'username':
                checkUsername();
                break;

            case 'pass':
                checkPassword();
                break;
            default :
                checkUsername();
                break;
        }

    };


    const showsuc = (e, msg, res) => {
        // console.log('before:' + JSON.stringify(validationError));
        setValidationError((prevState) => ({
            ...prevState,
            [e]: { error: msg, isValid: res }

        }))
        // console.log('name validation:', e, ':::::', "msg:", msg);

    };


    const checkUsername = () => {

        let valid = false;
        const username = form.username.trim();
        const usernamep = "username";

        if (!isRequired(username)) {
            showsuc(usernamep, 'username is required', false)
            
        }
        else {
            showsuc(usernamep, '', true)
            valid = true;
        }
        return valid;
    };

    const checkPassword = () => {
        let valid = false;
        const password = form.password.trim();
        const passwordp = "password";
        console.log(password);

        if (!isRequired(password)) {
            showsuc(passwordp, 'Password cannot be blank.', false);
        }
        else {
            showsuc(passwordp, '', true);
            valid = true;
        }

        return valid;
    };


    const isRequired = value => value === '' ? false : true;



    const onSubmitForm = e => {
        e.preventDefault();
        // alert(JSON.stringify(form, null, 2));
        let isUsernameValid = checkUsername();
        let isPasswordValid = checkPassword();

        if (isUsernameValid && isPasswordValid) {
            // alert('loginned!');
            // this.context.router.transitionTo('/dashboard');
            navigate('/dashboard/home');
        }
    };

    return (
        <>
            <div className="bodyclasslf">
            <div className="login_main">
                <form id="loginform" action='' onSubmit={onSubmitForm}>
                    <h2>LOGIN</h2>
                    <div className="login_form_content">
                        <LoginInput validationError={validationError.username} labeltext="Enter Username" type="text" name="username" className="username" id="username" placeholder="USERNAME" value={form.username} onInput={onInputField} onChange={onUpdateField} />
                        <LoginInput validationError={validationError.password} labeltext="Enter Password" type="password" name="password" className="pass" id="pass" placeholder="PASSWORD" value={form.password} onInput={onInputField} onChange={onUpdateField} />
                        <div className="button_tag">
                        
                            <SubmitButton value="LOGIN" />
                        
                        </div>
                        <Link to="/forgotpassword"  className="forgotlink">Forgot Your Password?
                        {/* <AnchorTag className="forgotlink" type="text/html" href="forgotpassword.html" text="Forgot Your Password?" /> */}
                        </Link>
                    </div>
                    <div className="twolinks">
                        <Link to="/register">
                        <ButtonTag onClick={signupfunction}  text="SIGNUP" />
                        </Link>
                    </div>
                </form>
            </div>
            </div>
        </>
    );
}

export default Login;