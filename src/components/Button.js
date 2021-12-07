import React from 'react'
import '../styles/Button.css'

function Button() {
    return (
        <div>
            <a href="/"><button>Log in</button></a>
            <a href="/"><button className="getButton">Get Started</button></a>
        </div>
    )
}

export default Button
