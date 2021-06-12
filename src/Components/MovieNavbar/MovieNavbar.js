import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap';
import '../MovieNavbar/MovieNavbar.css'

function MovieNavbar() {
    return (
        <Navbar expand="lg" bg="light" className="movie-nav">
            <Container>
                <Navbar.Brand href="/" className="nav-brand">MovieHub</Navbar.Brand>

                <Nav.Item>
                    <Nav.Link href="/searchmovie" className="nav-link">Search Movie</Nav.Link>
                </Nav.Item>
            </Container>
            
        </Navbar>
    )
}

export default MovieNavbar;
