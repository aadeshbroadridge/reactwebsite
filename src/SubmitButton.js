import React from "react";

function SubmitButton(props) {
    return (
        <>
            <input type="submit" value={props.value} />
        </>
    );
}
export default SubmitButton;