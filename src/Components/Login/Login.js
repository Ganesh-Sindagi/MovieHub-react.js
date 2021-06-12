import React from 'react'
import ButtonAppBar from '../ButtonAppBar/ButtonAppBar.js';
import Typography from '@material-ui/core/Typography';
import cors from 'cors';

function Login() {
    return (
        <div>
            <ButtonAppBar />
            <Typography variant="h2">Login Component</Typography>
        </div>
    )
}

export default Login;
