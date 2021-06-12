import React, {useState} from 'react'
import axios from 'axios';
import cors from 'cors';
import ButtonAppBar from '../ButtonAppBar/ButtonAppBar.js';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Register.css';


function Register() {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    function handleUsername(e) {
        setUsername(e.target.value);
    }

    function handlePassword(e) {
        setPassword(e.target.value);
    }

    function handleRegsiterClick() {
        axios.post("http://localhost:5000/register", {
            username: username,
            password: password
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <div>
            <ButtonAppBar />
            <Card className="card">
                <Card.Body>
                    <h1>Register</h1>
                    <Form className="form" onSubmit = {handleRegsiterClick}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control value={username} onChange={handleUsername} name="username" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} onChange={handlePassword} name="password" type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="dark" type="button">
                            Submit
                        </Button><br></br>
                        <Button variant="warning" type="button" onClick={(e) => {
                            e.preventDefault();
                            window.location.href='http://localhost:5000/auth/google';}}>
                            Signup with Google
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Register;
