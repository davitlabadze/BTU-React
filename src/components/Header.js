import React from 'react'
import Logo from '../img/fusely.svg'
import '../styles/Header.css'
import Navbar from './Navbar'
import Button from './Button'

function Header() {
    return (
        <div>
            <header className="header">
                <img src={Logo} className="logo" alt="fusely logo" />
                <Navbar/>
                <Button /> 
            </header>
        </div>
    )
}

export default Header
