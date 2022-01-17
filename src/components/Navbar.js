import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container justify-content-center">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <p>Home</p>
                            </Link> 
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                <p>About</p>
                            </Link> 
                        </li>
                        <li className="nav-item ">
                        <Link to="/my-projects" className="nav-link">
                                <p>My Projects</p>
                            </Link>
                            
                        </li>
                        
                        {/* <li className="nav-item">
                            <Link to="/pokemons" className="nav-link">
                                <p>Project</p>
                            </Link> 
                        </li>

                        <li className="nav-item">
                            <Link to="/movies" className="nav-link">
                                <p>Movies</p>
                            </Link> 
                        </li> */}
                    </ul>
                </div>
            </div>
    </nav>
    )
}

export default Navbar