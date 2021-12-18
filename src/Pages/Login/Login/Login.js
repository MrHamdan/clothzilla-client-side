import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
import { Container, Button, CircularProgress, Alert, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import login from '../../../images/login.png'
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div>
            <Header></Header>
            <div>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                            <h1 className="text-design">Please Login</h1>
                            <form onSubmit={handleLoginSubmit} className="form-bg rounded-2xl">
                                <input
                                    sx={{ width: '75%', m: 1 }}
                                    placeholder="Email"
                                    label="Your Email"
                                    name="email"
                                    onChange={handleOnChange}
                                />
                                <input
                                    sx={{ width: '75%', m: 1 }}
                                    placeholder="Password"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                />

                                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/register">
                                    <Button variant="text"><span className="text-green-600 fw-bold">New User? Please Register</span></Button>
                                </NavLink>
                                <br />
                                {isLoading && <Spinner animation="border" variant="success" />}
                                {user?.email && <Alert severity="success">Login successfully!</Alert>}
                                {authError && <Alert severity="error">{authError}</Alert>}
                            </form>
                            <hr className="text-green-400 fw-bold" />
                            <Button className=" mb-5" onClick={handleGoogleSignIn} color="success" variant="contained">Google Sign In</Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img style={{ width: '100%' }} className="pt-5" src={login} alt="" />
                        </Grid>
                    </Grid>
                </Container>
            </div>
            <Footer className=" mt-5"></Footer>
        </div>
    );
};


export default Login;