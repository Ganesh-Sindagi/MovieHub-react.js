import React, { useState, useEffect } from 'react';
import Movie from '../Movie/Movie.js';
import {Container, Row, Col, InputGroup, FormControl, Button} from 'react-bootstrap';
import MovieNavbar from '../MovieNavbar/MovieNavbar.js';
import '../Movie/Movie.css';

function Movies() {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await fetch(`http://localhost:5000/movies?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`);
        const responseData = await response.json();
        setMovies(responseData.data);
    }
    
    useEffect(() => {
        getMovies();
      }, []);

    return (

        <div className="body">
            <MovieNavbar />

            <Container>
                <Row>
                    {movies.map(movie => (
                        <Col xs={12} md={6} sm={12}>
                        <Movie
                            img={movie.img} 
                            title= {movie.title} 
                            imdb = {movie.imdb}
                            desc = {movie.desc}
                        />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Movies
