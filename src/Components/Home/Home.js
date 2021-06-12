import React from 'react'
import {Link} from 'react-router-dom';
import ButtonAppBar from '../ButtonAppBar/ButtonAppBar.js';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Home() {
    
    const navStyle = {
        color: 'white',
        textDecoration: 'none'
    };
    
    return (
        <div>
            <ButtonAppBar />
            <Typography variant="h2">Home</Typography>
            <Typography>
                <Link style={navStyle} to="/movies">
                    <Button variant="contained">Movies</Button>
                </Link>
            </Typography>
        </div>
    )
}

export default Home
