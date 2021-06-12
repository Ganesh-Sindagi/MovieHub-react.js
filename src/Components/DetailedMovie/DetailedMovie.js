import React from 'react'
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
import '../Movie/Movie.css';
import './DetailedMovie.css';

function DetailedMovie({img, title, imdb, desc, cast, reviews}) {

    const navStyle = {
        color: 'black',
        textDecoration: 'none'
    };
    
    return (
        <div className="main-body">
            <Card className="mov-card">
                <Card.Body>
                    <img src={img} className="img"/>
                    <Link style={navStyle} to={
                        {
                            pathname: '/moviedetails',
                            state: {title}
                        }
                    }>
                        <h1 className="title">{title}</h1>
                    </Link>
                    <h4 className="imdb">IMDb: {imdb}</h4>
                    <div className="container desc-container">
                        <h5>{desc}</h5>
                    </div>
                    
                    <h5 className="cast">Cast: {cast}</h5>
                    <h5 className="reviews-head">Reviews:</h5>
                    <div className="reviews">
                        <p className="p">{reviews}</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )}

export default DetailedMovie;

