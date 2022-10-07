import React from "react";
import LabelTag from "./LabelTag";

function LoginInput(props) {
    return (
        <>
            <div className="input_tag">
                <LabelTag htmlFor={props.name} labeltext={props.labeltext}></LabelTag>
                <input  type={props.type} name={props.name} className={props.className} id={props.id} placeholder={props.placeholder} onChange={props.onChange} onInput={props.onInput} value={props.value} autoComplete="off" />
                <small>{props.validationError.error}</small>
            </div>
        </>
    );
}
export default LoginInput;