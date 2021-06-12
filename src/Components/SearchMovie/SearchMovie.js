import React, { useState, useEffect } from 'react'
import MovieNavbar from '../MovieNavbar/MovieNavbar.js'
import {Form, InputGroup, FormControl, Button} from 'react-bootstrap';
import Movie from '../Movie/Movie.js';
import '../Movie/Movie.css';

function SearchMovie() {
    
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [specificMovie, setSpecificMovie] = useState([]);
    const [display, setDisplay] = useState(false)

    useEffect(() => {
        getSpecifiedMovie();
    }, [query]);

    const getSpecifiedMovie = async () => {
        console.log("The user query is", query);
        const response = await fetch(`http://localhost:5000/movies/${query}?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_APP_KEY}`);
        const responseData = await response.json();
        setSpecificMovie(responseData);
        
        console.log("The specified movie is", specificMovie);

    }
    
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
        setDisplay(true);
    }

    return (
        <div className="body">
            <MovieNavbar />
            
            <h1>Search Movie</h1><br></br>
            <Form onSubmit={getSearch}>
                <InputGroup className="mb-2 search-bar">
                    <FormControl
                        placeholder="Search Movies"
                        aria-label="Search Movies"
                        aria-describedby="basic-addon2"
                        onChange={(e)=> setSearch(e.target.value)
                        }
                    />
                    <Button variant="dark" id="button-addon2" type="submit">
                    Search
                    </Button>
                </InputGroup>
            </Form>
            
            <div className="single-mov">
                {display ? (<Movie 
                    img={specificMovie.img}
                    title={specificMovie.title}
                    imdb={specificMovie.imdb}
                    desc= {specificMovie.desc}
                />) : (<div className="empty-div"></div>)}
            </div>
        </div>
    )
}

export default SearchMovie;
