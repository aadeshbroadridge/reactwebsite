import React from "react";

function LabelTag(props) {
    return (
        <>
           <label htmlFor={props.name} >{props.labeltext}</label><label>:</label>
        </>
    );
}
export default LabelTag;