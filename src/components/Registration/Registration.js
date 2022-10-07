import React, { useEffect, useState } from "react";
import ImageTag from "../../ImageTag";
import './Registration.css'
import backicon from '../Registration/backicon.png';
import personicon from '../Registration/personicon.png';
import LoginInput from "../../LoginInput";
import LabelTag from "../../LabelTag";
// import InputTag from "../../InputTag";
import SubmitButton from "../../SubmitButton";
import { Link } from "react-router-dom";
 
const Registration = ()=>{
    function backfn() {
        // alert('back button pressed !');
    }  
    const [form, setForm] = useState({
        firstname: "",
        lastname:"",
        email:"",
        phone:"",
        cell:"",
        weburl:"",
        // myprofile:"",
        dob:"",
        jdate:"",
        genderradio:"",
        hqual:"",
        spec:"",
        klang:"",
        plevel:"",
        password: ""
    });
    const [validationError, setValidationError] = useState({
        firstname: { error: "", isValid: false },
        lastname: { error: "", isValid: false },
        email: { error: "", isValid: false },
        phone: { error: "", isValid: false },
        cell: { error: "", isValid: false },
        weburl: { error: "", isValid: false },
        // myprofile: { error: "", isValid: false },
        dob: { error: "", isValid: false },
        jdate: { error: "", isValid: false },
        genderradio: { error: "", isValid: false },
        hqual: { error: "", isValid: false },
        spec: { error: "", isValid: false },
        klang: { error: "", isValid: false },
        plevel: { error: "", isValid: false },
        password: { error: "", isValid: false }
    }); 
    useEffect(() => {
        console.log('errrrrrrrrrror :', validationError);
    }, [validationError]);
    const onUpdateField = e => {
        
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
        return {setForm}
    };
    const showsuc = (e, msg, res) => {
        setValidationError((prevState) => ({
            ...prevState,
            [e]: { error: msg, isValid: res }

        }))
    };
    const checkFirstname = () => {

        let valid = false;
        const firstname = form.firstname.trim();
        const firstnamep = "firstname";
    
        if (!isRequired(firstname)) {
            showsuc(firstnamep, 'first name cannot be blank.',false);
        } 
        else if(!isAlphaValid(firstname)){
            showsuc(firstnamep, 'first name should not contain numericals.',false);
        }
        else {
            showsuc(firstnamep,'',true);
            valid = true;
        }
        return valid;
    };
    
    const checkLastname = () => {
    
        let valid = false;
    
        const lastname = form.lastname.trim();
        const lastnamep = "lastname";
    
        if (!isRequired(lastname)) {
            showsuc(lastnamep, 'lastname cannot be blank.',false);
        } 
        else if(!isAlphaValid(lastname)){
            showsuc(lastnamep, 'last name should not contain numericals.',false);
        } 
        else {
            showsuc(lastnamep,'',true);
            valid = true;
        }
        return valid;
    };
    
    const checkEmail = () => {
        let valid = false;
        const email = form.email.trim();
        const emailp = "email";
        if (!isRequired(email)) {
            showsuc(emailp, 'email cannot be blank.',false);
        } 
        else if (!isEmailValid(email)) {
            showsuc(emailp, 'email is not valid.',false)
        }
        else {
            showsuc(emailp,'',true);
            valid = true;
        }
        return valid;
    };
    
    const checkPhone = () => {
        let valid = false;
        const phone = form.phone.trim();
        const phonep = "phone";
        if (!isRequired(phone)) {
            showsuc(phonep, 'phone cannot be blank.',false);
        } 
        else if (!isphoneValid(phone)) {
            showsuc(phonep, 'phone is not valid.',false)
        }
        else {
            showsuc(phonep,'',true);
            valid = true;
        }
        return valid;
    };
    
    const checkCell = () => {
        let valid = false;
        const cell = form.cell.trim();
        const cellp = "cell";
        if (!isRequired(cell)) {
            showsuc(cellp, 'cell cannot be blank.',false);
        } 
        else if (!iscellValid(cell)) {
            showsuc(cellp, 'cell is not valid.',false)
        }
        else {
            showsuc(cellp,'',true);
            valid = true;
        }
        return valid;
    };
    
    const checkWeburl = () => {
        let valid = false;
        const weburl = form.weburl.trim();
        const weburlp = "weburl";
        if (!isRequired(weburl)) {
            showsuc(weburlp, 'weburl cannot be blank.',false);
        }
        else if(!isUrlValid(weburl)){
            showsuc(weburlp, 'Please enter a valid url.',false);
        } 
        else {
            showsuc(weburlp,'',true);
            valid = true;
        }
        return valid;
    };
    
    // const checkMyprofile = () => {
    //     let valid = false;
    //     const myprofile = form.myprofile.trim();
    //     const myprofilep = "myprofile";
    //     if (!isRequired(myprofile)) {
    //         showsuc(myprofilep,'please upload your aadhaar.',false);
    //     } 
    //     else {
    //         showsuc(myprofilep,'',true);
    //         valid = true;
    //     }
    //     return valid;
    // };
    
    const checkDob = () => {
        let valid = false;
        const dob = form.dob.trim();
        const dobp = "dob";
        if (!isRequired(dob)) {
            showsuc(dobp, 'dob cannot be blank.',false);
        } 
        else {
            showsuc(dobp,'',true);
            valid = true;
        }
        return valid;
    };
    
    const checkJdate = () => {
        let valid = false;
        const jdate = form.jdate;
        const jdatep = "jdate";
        if (!isRequired(jdate)) {
            showsuc(jdatep, 'joining date cannot be blank.',false);
        } 
        else {
            showsuc(jdatep,'',true);
            valid = true;
        }
        return valid;
    };
    
    const checkGender = () => {
        let valid = false;
        // const genderradio = form.genderradio;
        const genderradiop = "genderradio";
        // var ele = document.getElementsByName('genderradio');
        
        showsuc(genderradiop, 'please select your gender.',false);
    
    
        var ele = document.getElementsByName('genderradio');
        // for (var i = 0; i < ele.length; i++) {
        //     if (ele[i].checked) {
        //         console.log('checked');
        //         var gendervalue = ele[i].value;
        //         setForm((prevState) => ({
        //             ...prevState,
        //             genderradio: gendervalue
        //         }));
        //         valid = true;
        //         showsuc(genderradiop,'',true);
                
        //     }
        // }
        ele.forEach(i=>{
            if(i.checked){
                console.log('checked');
                var gendervalue = i.value;
                setForm((prevState) => ({
                    ...prevState,
                    genderradio: gendervalue
                }));
                valid = true;
                showsuc(genderradiop,'',true);
                
            }
            return valid;
        })

    };
    
    const checkHighQual = () => {
        let valid = false;
        // const hqual = form.hqual;
        const hqualp = "hqual";
        // var highqualEl = document.querySelector('#hqual');
        
        var highestqualificationvalue = document.querySelector('#hqual').value;
        
        
        if(highestqualificationvalue === ''){
        showsuc(hqualp, 'please select your highest qualification',false);
        }
        else{
            setForm((prevState) => ({
                ...prevState,
                hqual: highestqualificationvalue
            }))
            showsuc(hqualp,'',true);
            valid= true;
        }
        return valid;
    };
    
    const checkSpecilization = () => {
        let valid = false;
        // const spec = form.spec;
        const specp = "spec";
        // var specEl = document.querySelector('#spec');
        var specializationvalue = document.querySelector('#spec').value;
        
        if(specializationvalue === ''){
        showsuc(specp, 'please select your specialization',false);
        }
        else{
            setForm((prevState) => ({
                ...prevState,
                spec: specializationvalue
            }))
            showsuc(specp,'',true);
            valid= true;
        }
        return valid;
    };
    
    const checkKnownLanguages = () => {
        let valid = false;
        console.log('entered');
        // const klang = form.klang;
        const klangp = "klang";
        // var knowlangEl = document.getElementById('check1');
        var knownlanguagesvalue = []
        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

        for (var i = 0; i < checkboxes.length; i++) {
            knownlanguagesvalue.push(checkboxes[i].value)
        }
        setForm((prevState) => ({
            ...prevState,
            klang: knownlanguagesvalue
        }))
        // var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    
        if(checkboxes.length===0){
            console.log('checkbox length:',checkboxes.length,': :',checkboxes)
            showsuc(klangp, 'please check atleast one checkbox',false);
        }
        else{
            showsuc(klangp,'',true);
            valid= true;
        }
        return valid;
    };
    
    const checkPassword = () => {
        let valid = false;
        const password = form.password.trim();
        const passwordp = "password";
    
        console.log(password);
    
        if (!isRequired(password)) {
            showsuc(passwordp, 'password cannot be blank.',false);
        } 
        else if (!isPasswordSecure(password)) {
            showsuc(passwordp, 'Not a Strong Password',false);
        } 
        else {
            showsuc(passwordp,'',true);
            valid = true;
        }
    
        return valid;
    };
    
    
    const isAlphaValid = (text) =>{
        //eslint-disable-next-line
        const re = /^[A-Za-z]+$/
        return re.test(text);
    }
    const isEmailValid = (email) => {
        //eslint-disable-next-line
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    
    const isphoneValid = (phone) => {
        //eslint-disable-next-line
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(phone);
    };
    
    const iscellValid = (cell) =>{
        //eslint-disable-next-line
        const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(cell);
    }
    const isPasswordSecure = (password) => {
        //eslint-disable-next-line
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
    };
    
    const isUrlValid = (url) =>{
       
        // const re = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
         //eslint-disable-next-line
        const re = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;
        return re.test(url);
    }
    
    const isRequired = value => value === '' ? false : true;
    
    const onSubmitForm = e => {
        e.preventDefault();
        // alert(JSON.stringify(form));

    let isFirstnameValid = checkFirstname(),
        isLastnameValid = checkLastname(),
        isEmailValid = checkEmail(),
        isPhoneValid = checkPhone(),
        isCellValid = checkCell(),
        isWeburlValid = checkWeburl(),
        // isMyprofileValid = checkMyprofile(),
        isDobValid = checkDob(),
        isJdateValid = checkJdate(),
        isPasswordValid = checkPassword(),
        isGenderValid = checkGender(),
        isHighQualValid = checkHighQual(),
        isSpecValid = checkSpecilization(),
        isKnownLangValid = checkKnownLanguages();

    let isFormValid = isFirstnameValid && isLastnameValid&& isEmailValid && isPhoneValid&& isCellValid&& isWeburlValid   &&isDobValid &&isJdateValid &&isPasswordValid && isGenderValid && isHighQualValid && isSpecValid && isKnownLangValid;
   
    if (isFormValid) {
        
        // registerconfirm();
        
    }
    };
    const onInputField = e => {
        // switch (e.target.id) {
        //     case 'firstname':
        //         checkFirstname();
        //         break;
        //     case 'lastname':
        //         checkLastname();
        //         break;
        //     case 'email':
        //         checkEmail();
        //         break;
        //     case 'phone':
        //         checkPhone();
        //         break;
        //     case 'cell':
        //         checkCell();
        //         break;
        //     case 'weburl':
        //         checkWeburl();
        //         break;
        //     // case 'myprofile':
        //     //     checkMyprofile();
        //     //     break;
        //     case 'dob':
        //         checkDob();
        //         break;
        //     case 'jdate':
        //         checkJdate();
        //         break;
        //     case 'password':
        //         checkPassword();
        //         break;
        //     case 'female':
        //         checkGender();
        //         break;
        //     case 'male':
        //         checkGender();
        //         break;   
    
        //     case 'hqual':
        //         checkHighQual();
        //         break;  
    
        //     case 'spec':
        //         checkSpecilization();
        //         break;
        //     case 'check1':
        //         checkKnownLanguages();
        //         break;
        //     case 'check2':
        //         checkKnownLanguages();
        //         break;
        //     case 'check3':
        //         checkKnownLanguages();
        //         break;
        //     case 'check4':
        //         checkKnownLanguages();
        //         break;
        //     default:
        //         checkFirstname();
        //         break;
        // }

    };
    return (
        <>
            <div className="reg_main">
                <div className="head">
                    <Link to="/"><ImageTag src={backicon} alt="back button" onClick={backfn} width="40px" height="40px" className="back" /></Link>
                    <ImageTag src={personicon} alt="icon image"  width="80px" height="80px" className="logo" />
                    <h2 className="title">Registration</h2>
                    {/* <h2 className="title">Registration:{JSON.stringify(form)}</h2> */}
                </div>
                <form id="regform" onSubmit={onSubmitForm}>
                    <div className="reg_form_content">
                        <LoginInput validationError={validationError.firstname} value={form.firstname} onInput={onInputField} onChange={onUpdateField} labeltext="Enter your firstname" type="text" name="firstname" className="firstname" id="firstname" placeholder="FIRSTNAME" />
                        <LoginInput validationError={validationError.lastname} value={form.lastname} onInput={onInputField} onChange={onUpdateField} labeltext="Enter your lastname" type="text" name="lastname" className="lastname" id="lastname" placeholder="LASTNAME" />
                        <LoginInput validationError={validationError.email} value={form.email} onInput={onInputField} onChange={onUpdateField} labeltext="Enter your email" type="email" name="email" className="email" id="email" placeholder="EMAIL" />
                        <LoginInput validationError={validationError.phone} value={form.phone} onInput={onInputField} onChange={onUpdateField} labeltext="Enter your phone" type="phone" name="phone" className="phone" id="phone" placeholder="PHONE NUMBER" />
                        <LoginInput validationError={validationError.cell} value={form.cell} onInput={onInputField} onChange={onUpdateField} labeltext="Enter your cell no" type="number" name="cell" className="cell" id="cell" placeholder="CELL NUMBER" />
                        <LoginInput validationError={validationError.weburl} value={form.weburl} onInput={onInputField} onChange={onUpdateField} labeltext="Enter your weburl" type="url" name="weburl" className="weburl" id="weburl" placeholder="WEB URL" />
                        {/* <LoginInput validationError={validationError.myprofile} value={form.myprofile} onInput={onInputField} onChange={onUpdateField} labeltext="Upload your aadhaar" type="file" name="myprofile" className="myprofile" id="myprofile" /> */}
                        <LoginInput validationError={validationError.dob} value={form.dob} onInput={onInputField} onChange={onUpdateField} labeltext="Enter date of birth" type="date" name="dob" className="dob" id="dob" />
                        <LoginInput validationError={validationError.jdate} value={form.jdate} onInput={onInputField} onChange={onUpdateField} labeltext="Joining date" type="month" name="jdate" className="jdate" id="jdate" />

                        <div className="gender">
                            <LabelTag htmlFor="gender" labeltext="Select your gender"></LabelTag>
                            <div className="genderinputdiv">
                                <input type="radio" value="male" name="genderradio" id="genderradio" className="genderinput" onInput={onInputField} onChange={onUpdateField} />Male
                                <input type="radio" value="female" name="genderradio" id="female" className="genderinput" onInput={onInputField} onChange={onUpdateField} />Female
                            </div>
                            <small>{validationError.genderradio.error}</small>
                        </div>

                        <div className="highestqualification">
                            <label htmlFor="hqual">highest qualification</label><label>:</label>
                            <div className="hqualinputdiv">
                                <select id="hqual" name="hqual" className="hqual">
                                    <option value="" onInput={onInputField} onChange={onUpdateField}>SELECT QUALIFICATION</option>
                                    <option value="ssc" onInput={onInputField} onChange={onUpdateField}>SSC</option>
                                    <option value="inter" onInput={onInputField} onChange={onUpdateField}>INTER</option>
                                    <option value="ug" onInput={onInputField} onChange={onUpdateField}>UG</option>
                                    <option value="pg"onInput={onInputField} onChange={onUpdateField} >PG</option>
                                </select>
                            </div>
                            <small>{validationError.hqual.error}</small>
                        </div>

                        <div className="specialization">
                            <label htmlFor="spec">Specialization</label><label>:</label>
                            <div className="specinputdiv">
                                <select id="spec" name="spec" className="spec">
                                    <option value="" onInput={onInputField} onChange={onUpdateField}>SELECT SPECIALIZATION</option>
                                    <option value="maths" onInput={onInputField} onChange={onUpdateField}>MATHS</option>
                                    <option value="physics" onInput={onInputField} onChange={onUpdateField}>PHYSICS</option>
                                    <option value="chemistry" onInput={onInputField} onChange={onUpdateField}>CHEMISTRY</option>
                                    <option value="computers" onInput={onInputField} onChange={onUpdateField}>COMPUTERS</option>
                                </select>
                            </div>
                            <small>{validationError.spec.error}</small>
                        </div>

                        <div className="knownlanguages">
                            <label htmlFor="">Known languages</label><label>:</label>
                            <div className="klanginputdiv">
                                <input type="checkbox" value="c" name="klang" id="check1" className="klang" onInput={onInputField} onChange={onUpdateField} />C
                                <input type="checkbox" value="c++" name="klang" id="check2" className="klang" onInput={onInputField} onChange={onUpdateField}/>C++
                                <input type="checkbox" value="js"  name="klang" id="check3" className="klang" onInput={onInputField} onChange={onUpdateField}/>JS
                                <input type="checkbox" value="react" name="klang" id="check4" className="klang" onInput={onInputField} onChange={onUpdateField} />REACT
                            </div>
                            <small>{validationError.klang.error}</small>
                        </div>

                        <div className="proflevel">
                            <label htmlFor="plevel" className="plevellabel">Proficient Level(0-10)</label><label
                                className="plevellabel">:</label>
                            <div className="plevelinputdiv">
                                <input type="range" id="plevel" name="plevel" className="plevel" min="0" max="10" onInput={onInputField} onChange={onUpdateField} />
                            </div>
                            <small>{validationError.plevel.error}</small>
                        </div>

                        <div className="input_tag">
                            <label htmlFor="password">Enter your password</label><label>:</label>
                            <input onInput={onInputField} onChange={onUpdateField} value={form.password} type="password" id="password"  name="password" className="password" placeholder="PASSWORD" autoComplete="off" />
                            <b title="Password should contain atleast 8 characters and one capital letter and one special character and one numerical digit">&#9432;</b><br />
                            <small>{validationError.password.error}</small>
                        </div>

                        <div className="button_tag">
                            <SubmitButton value="REGISTER" />
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Registration;

