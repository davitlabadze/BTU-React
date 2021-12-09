import React from 'react'
import '../styles/Footer.css'
import Fb from '../img/footer/fbicon.svg'
import Twitter from '../img/footer/twittericon.svg'
import Linkdin from '../img/footer/linkdinicon.svg'

function Footer() {
    return (
        <div >
            <footer>
              <section >
                    <div className='foo'>
                    <div >
                        <h4>Product</h4>
                        <p>How it works</p>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>FAQ</p>
                        <p>Download</p>
                    </div>
                    <div>
                        <h4>Company</h4>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Partnership</p>
                        <p>Terms of use</p>
                        <p>Privacy policy</p>
                    </div>
                    <div>
                        <h4>Support</h4>
                        <p>Help center</p>
                        <p>Contact us</p>
                        <p></p>
                        <p></p>
                    </div>
                    <div>
                        <h4>Get in touch</h4>
                        <img src={Fb} className="icon" alt="Facebook icon" />
                        <img src={Twitter} className="icon" alt="Twitter icon" />
                        <img src={Linkdin} className="icon" alt="Linkdin icon" />
                        {/* here icon */}
                    </div>
                  </div>
              </section>
            </footer>
        </div>
    )
}

export default Footer
