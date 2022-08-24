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
    color: rgba(0,0,0,0.7);
}

& input:checked + label {
    color: rgba(255,255,255,0.6);
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
    background-color: rgb(0,0,20)
}

& label::after {
    content: '';
    width: .8em;
    height: .8em;
    background-color: rgba(255,255,255,0.85);
    border-radius: 1em;
    position: absolute;
    left: .1em;
    transition: 200ms ease-in-out;
}

& input:checked + label::after {
    left: 1.1em;
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

