import React from 'react'

//Receives a string of contents to copy to clipboard.
export default function CopyButton(props) {
    let copyContent = () => {
        document.getElementById(props.ident + "txt").select();
        document.execCommand("copy");
    } 
    return (
        <div id={props.ident}>
            <button className="copy-button" onClick={()=>copyContent}>Copy to Clipboard</button>
            <textarea id={props.ident + "txt"} className="aux" value={props.toCopy}/>
        </div>
    )
}