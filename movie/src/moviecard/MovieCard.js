import React from 'react';
import './MovieCard.css'
//import Data from '../Data.json';
const MovieCard = ({Data}) =>{
    
    return(
        Data.map((e)=>{
        return <div className="Card">
        <h3>Movie : {e.name}</h3>
        <h4>year : {e.year}</h4>
        <h4>Budget : {e.Budget}</h4>
        <h4>Rating: {e.Rating}</h4>
        <h4>Cast : {e.Cast}</h4>
        <h4>Language : {e.Language}</h4>
        </div>
        })
        
    )
}

export default MovieCard;