import React from "react"
import styled from 'styled-components'


const Span = styled.span`

& input {
    position: absolute;
    left: -1000vw;
}

& label {
    display: flex;
    align-items: center;
    position: relative;
    color: rgba(0,0,0,0.8);
}

& input:checked + label {
    color: rgba(255,255,255,0.8);
}

& label::before {
    content: '';
    width: 2em;
    height: 1em;
    background-color: rgba(255,255,255,0.4);
    border-radius: 1em;
    margin-right: .4em;
}

& input:checked + label::before {
    background-color: rgba(0,0,0,0.6);
}

& label::after {
    content: '';
    width: .9em;
    height: .9em;
    background-color: rgba(255,255,255,0.85);
    border-radius: 1em;
    position: absolute;
    left: .05em;
    transition: 200ms ease-in-out;
}

& input:checked + label::after {
    left: 1.05em;
    background-color: rgba(255,255,255,0.6);
}

`

const Toggle = ({toggle, setToggle}) => {
    return (
        <Span>
            <input type='checkbox' id='check' 
            checked={toggle} 
            onChange={ (e) => {
                setToggle(e.target.checked)
                e.target.checked = !e.target.checked
                localStorage.setItem('toggle', !toggle)
              }}
            />
            <label for='check'>Dark Mode</label>
        </Span>
    )
}

export default Toggle

