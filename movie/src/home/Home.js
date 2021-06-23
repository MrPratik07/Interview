import React from 'react';
import './Home.css'
import Data from '../Data.json';
import MovieCard from '../moviecard/MovieCard';
const Home = () =>{

    return(
        <div className="home">
            <h1>Movie List</h1>
            <MovieCard Data={Data}/>
        </div>
    )

}

export default Home;