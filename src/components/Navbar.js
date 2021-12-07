import React from 'react'
import '../styles/Navbar.css'
function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <ul className="nav_links">
                    <li><a href="/home" className="active">Home</a></li>
                    <li><a href="/about">Feature</a></li>
                    <li><a href="/profile">Pricing</a></li>
                    <li><a href="/contact">Blog</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar