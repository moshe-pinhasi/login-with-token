import React from 'react'
import './input.scss'

const Input = (props) => {
    const whenInput = (event) => { // event comes from native js events
        var outObj = {[props.name]: event.target.value} // => [props.name] => if name is 'color' it will create {color: value}
        props.onInput(outObj) // sending the object up to parent
    }

    return (
        <div className="input-group">
            <label className="input-title">{props.title}</label>
            <input type="text" 
                    name={props.name}
                    onChange={whenInput}
                    value={props.value}
                    className="input-text" />
        </div>
    )
}

export default Input