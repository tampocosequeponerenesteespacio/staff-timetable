import React from "react"
import { Link } from "react-router-dom"

const Header = (props) => {

    return (
    <div id='header' >
        <Link to="/"><button className='menuButton sci'>SCIENCE</button></Link>
        <Link to="/phy"><button className='menuButton phy'>PHYSICS</button></Link>
        <Link to="/chem"><button className='menuButton chem'>CHEMISTRY</button></Link>
        <Link to="/bio"><button className='menuButton bio'>BIOLOGY</button></Link>
        {props.children}
    </div>
    )
}

export default Header