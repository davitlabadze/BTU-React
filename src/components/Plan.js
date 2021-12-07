import React from 'react'
import '../styles/Plan.css'

function Plan() {
    return (
        <div className="planContainer">
            <h2>Choose your plan</h2>
            <div className="plan">
                <div className="box">
                    <p>Starter</p>
                   <p><strong>FREE</strong></p>
                    <p>Dashboard</p>
                    <p>Limited Support</p>

                    <p>Forever free</p>
                    <a href="/"><button>Get started</button></a>
                </div>
                <div className="box1">
                    <p>Premium</p>
                    <p><strong>29</strong>/month</p>
                    <p>Dashboard & Analysis</p>
                    <p>Premium Support</p>
                    <p>Tracking Service</p>
                    <a href="/"><button>Get started</button></a>
                </div>

                <div className="box">
                    <p>Enterprise</p>
                    <p><strong>49</strong>/month</p>
                    <p>All features in Premium</p>
                    <p>Realtime overview</p>
                    <p>Mobile app</p>
                    <a href="/"><button>Get started</button></a>
                </div>
            </div>
            
        </div>
    )
}

export default Plan
