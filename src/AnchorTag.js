import React from "react";

function AnchorTag(props) {
    return (
        <>
            <a className={props.className} type={props.type} href={props.href}>{props.text}</a>
        </>
    );
}
export default AnchorTag;