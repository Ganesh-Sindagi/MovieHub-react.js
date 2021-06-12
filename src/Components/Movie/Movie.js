import React from 'react'
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import './Movie.css';

function Movie({img, title, imdb, desc}) {
    
    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    };
    
    return (
        <Card className="card">
            <Card.Body>
                <img src={img} className="img"/>
                <Link style={navStyle} to={
                    {
                        pathname: '/moviedetails',
                        state: {title}
                    }
                }>
                    <h1>{title}</h1>
                </Link>
                <h3>{imdb}</h3>
                <h5>{desc}</h5>
            </Card.Body>
        </Card>
    )}

export default Movie;
