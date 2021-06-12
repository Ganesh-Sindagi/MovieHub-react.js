import React, { useState, useEffect } from 'react';
import {Link, useLocation} from 'react-router-dom';
import MovieNavbar from '../MovieNavbar/MovieNavbar.js';
import DetailedMovie from '../DetailedMovie/DetailedMovie.js';
import './MovieDetails.css';

function MovieDetails() {

    const titleDetails = useLocation();
    console.log(titleDetails.state.title);
    const [query, setQuery] = useState(titleDetails.state.title);
    const [specificMovie, setSpecificMovie] = useState([]);
    console.log("The title querid is: ", query);

    useEffect(() => {
        getSpecifiedMovie();
    }, []);

    const getSpecifiedMovie = async () => {
        console.log("The user query is", query);
        const response = await fetch(`http://localhost:5000/movies/${query}?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`);
        const responseData = await response.json();
        setSpecificMovie(responseData);
        console.log("The specified movie is", specificMovie);
    }

    return (
        <div className="body">
            <MovieNavbar />
           <h1 className="heading">Movie Details</h1> 
           <div>
                <DetailedMovie 
                    img={specificMovie.img}
                    title={specificMovie.title}
                    imdb={specificMovie.imdb}
                    desc= {specificMovie.desc}
                    cast={specificMovie.cast}
                    reviews= {specificMovie.reviews}
                />
            </div>
        </div>
    )
}

export default MovieDetails;
