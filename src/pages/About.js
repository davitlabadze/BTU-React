import React from 'react'

function About() {
    return (
        <div>
        <figure className=" mt-5">
            <div className='banner-container'>
                <div className='banner'>
                    <div className='left'>
                        <h6>Hello, I'm</h6>
                        <h1>Davit</h1>
                        <h1>Labadze</h1>
                        <p>full-stack web developer</p>
                        <p>Find me on:</p>
                       
                        <a href='https://twitter.com/David47306139' target="_blank">
                            <img src="https://img.icons8.com/fluency/24/000000/twitter.png"/>
                        </a>
                        <a href='https://www.linkedin.com/in/davit-labadze-03a09678/' target="_blank">
                            <img src="https://img.icons8.com/fluency/24/000000/linkedin.png"/>
                        </a>

                        <a href='https://github.com/davitlabadze' target="_blank">
                            <img src="https://img.icons8.com/glyph-neue/24/000000/github.png"/>
                        
                        </a>

                      

                    </div>
                    <div className='right'>
                    <img src="img/profile.png"/>

                    </div>
                </div>
            </div>
        </figure>  
    </div>
    )
}

export default About
