import React from 'react'
import { Link } from 'react-router-dom';
 

function MyProjects() {
    return (
        <div className='project-container'>
            <div className='project-box'>
                <img src='img/pokemon.png' />
                <div className="project-item">
                    <Link to="/pokemons" className="project-link">
                        <p className='project-btn'>Pokemons</p>
                    </Link> 
                </div>
            </div>

            <div className='project-box'>
                <img src='img/movie.png' />
                <div className="project-item">
                    <Link to="/movies" className="project-link">
                        <p className='project-btn'>Movies</p>
                    </Link> 
                </div> 
            </div>
        </div>
        
       
        
        
    )
}

export default MyProjects
