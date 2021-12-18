import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from './../../../hooks/useAuth';
import { Spinner } from 'react-bootstrap';
import register from '../../../images/register.png'
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    }
    return (
        <div>
            <Header></Header>
            <div>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                            <h1 className="text-design" variant="body1" gutterBottom>Register</h1>
                            {!isLoading && <form onSubmit={handleLoginSubmit} className="form-bg rounded-2xl">
                                <input
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    placeholder="Name"
                                    label="Your Name"
                                    name="name"
                                    onBlur={handleOnBlur}
                                />
                                <input
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    placeholder="Email"
                                    label="Your Email"
                                    name="email"
                                    type="email"
                                    onBlur={handleOnBlur}
                                />
                                <input
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    placeholder="Password"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onBlur={handleOnBlur}
                                />
                                <input
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    placeholder="Confirm Password"
                                    label="Confirm Your Password"
                                    type="password"
                                    name="password2"
                                    onBlur={handleOnBlur}
                                />

                                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/login">
                                    <Button variant="text"><span className="text-green-600 fw-bold">Already Registered? Please Login</span></Button>
                                </NavLink>
                            </form>}
                            {isLoading && <Spinner animation="border" variant="success" />}
                            {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: '100%' }} className="pt-5" src={register} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Register;