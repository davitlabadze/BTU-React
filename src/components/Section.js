import React from 'react'
import '../styles/Section.css'
import Hero from '../img/hero.svg'
import Hero2 from '../img/hero2.svg'
import Hero3 from '../img/hero3.svg'
import Hero4 from '../img/hero4.svg'


function Section() {
    return (
        <div >
            <section>
                <div className="container">
                    <h1>Let's get fusely together</h1>
                    <p>
                    Outcome-centered product that reduce churn, optimize pricing, and grow your subscription business end-to-end.
                    </p>
                    <a href="/"><button className="getButton">Get Started</button></a>
                </div>
                <div className="container">
                    <img src={Hero} className="logo" alt="hero logo" />
                </div>
            </section>
            <section>
                <div className="container">
                <img src={Hero2} className="logo" alt="hero2 logo" />
                </div>
                <div className="container">
                    <h1>Detailed Examination</h1>
                    <p>
                    A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical.
                    </p>
                    <a href="/" className="learnMore">Learn More</a>
                </div>
            </section>  
            <section>
                <div className="container">
                    <h1>Creative Solutions</h1>
                    <p>
                    Creativity is our second name. We're full of inventive ideas and we're happy to present them to you.
                    </p>
                    <a href="/" className="learnMore">Learn More</a>
                </div>
                <div className="container">
                <img src={Hero3} className="logo" alt="hero2 logo" />
                </div>
            </section> 
            <section>
                <div className="container">
                <img src={Hero4} className="logo" alt="hero2 logo" />
                </div>
                <div className="container">
                    <h1>Professional Team</h1>
                    <p>
                    Well, obviously, we're professionals. Don't hesitate - get to know us better.
                    </p>
                    <a href="/" className="learnMore">Learn More</a>
                </div>
            </section>  
        </div>
    )
}

export default Section
