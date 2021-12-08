import React from 'react'
import Blog1 from '../img/blogimg/blog1.svg'
import Blog2 from '../img/blogimg/blog2.svg'
import Blog3 from '../img/blogimg/blog3.svg'
import '../styles/Blog.css'

function Blog() {
    return (
        <div>
            <section className="headText">
                <h1>From our blog</h1>
                <button>View All</button>
            </section>
            <section>
                <div className="block">
                    <img src={Blog1} alt="blog1" />
                    <h2>What’s Fusely?</h2>
                    <p>A brand new company, created for everyone. This article will help you understand what "fusely" stands for.</p>
                    <a href="/" className="learnMore">Learn More</a>
                </div>
                <div className="block">
                    <img src={Blog2} alt="blog2" />
                    <h2>Introducing Fusely Engage</h2>
                    <p>We’re happy to announce the Fusely Engage. The first growth automation platform designed for the digital interactions.</p>
                    <a href="/" className="learnMore">Learn More</a>
                </div>
                <div className="block">
                    <img src={Blog3} alt="blog3" />
                    <h2>Premium vs Enterprise plan</h2>
                    <p>Let’s compare our most popular plans: Premium and Enterprise. This article will help you decide which one will be better for your needs.</p>
                    <a href="/" className="learnMore">Learn More</a>
                </div>
            </section>
        </div>
    )
}

export default Blog
