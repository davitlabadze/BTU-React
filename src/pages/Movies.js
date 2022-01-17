import React from 'react'
import { useEffect, useState } from 'react'
import Movie from '../components/Movie'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&fbclid=IwAR3I44DSstLqakp4_H5O6ZxkKBs2NcZ6KybWd7yfDkj4X4TlhWhNflfwRK8";
 const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function Movies() {
    const [ movies, setMovies ] = useState([]);
    const [ searchTerm, setSearchTerm ] = useState('');
    useEffect(() => {
        getMovies(FEATURED_API);
        
    }, []);


    const getMovies = (API) => {
        fetch(API)
            .then((res)=> res.json())
            .then((data)=>{
                console.log(data);
                setMovies(data.results);
        });
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            getMovies(SEARCH_API + searchTerm)
            setSearchTerm('');
        }
    }
    
    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <div className='search-box'>
                    <input 
                        className='search' 
                        type="text" 
                        placeholder='Search...' 
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
                </div>
            </form>
             
            <div className='movie-container'>
                {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
            </div>
        </div>
    )

}

export default Movies;
