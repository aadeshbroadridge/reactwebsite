import React from "react";
// import AnchorTag from "./AnchorTag";

function ButtonTag(props) {
    return (
        <>
           {/* <button onClick={props.onClick}><AnchorTag href={props.href} type={props.type} text={props.text}></AnchorTag></button> */}
           <button onClick={props.onClick}>{props.text}</button>
        </>
    );
}
export default ButtonTag;