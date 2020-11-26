import React from 'react'
import './SelectButton.css'

//Receives a 'title', a 'macro' and a handling function 'handleClick'
export default function SelectButton(props) {
    return (
        <button id={props.macro.title} onClick={()=>props.handleSelect(props.macro.text)} className="select-button">{props.macro.title}</button>
    )
}
