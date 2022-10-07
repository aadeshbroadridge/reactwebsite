import React from 'react';

function InputTag(props){
    return(
        <>
            <input name={props.name} onInput={props.onInput} onChange={props.onChange} type={props.type} className={props.className} id={props.id} placeholder={props.placeholder}  value={props.value} autoComplete="off" />
            {/* <small>{props.validationError.error}</small> */}
        </>
    );
}
export default InputTag;