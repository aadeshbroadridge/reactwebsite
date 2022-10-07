import React from "react";

function ImageTag(props){
    return(
        <>
            <img src={props.src} alt={props.alt} onClick={props.onClick} width={props.width} height={props.height} className={props.className} />
        </>
    );
}
export default ImageTag;