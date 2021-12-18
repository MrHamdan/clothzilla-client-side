import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import './Header.css'
import logo from '../../../images/logo.jpg'
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar bg="dark" className="navbar" expand="lg">
                <Container className="d-flex align-items-center justify-content-center justify-content-around">
                    <div className="d-flex align-items-center">
                        <div>
                            <Navbar.Brand as={Link} to="/home"><img className="logo mt-4" src={logo} alt="" /></Navbar.Brand>
                        </div>
                        <div>
                            <span className="car-text mx-1 italic">CLOTH</span><span className="dealer-text italic">ZILLA</span>
                        </div>
                    </div>
                    <div>
                        <Navbar.Toggle className="navbar-toggler navbar-toggler-right bg-light" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse bg="light" id="basic-navbar-nav">
                            <Nav className="me-auto align-items-center">
                                <Nav.Link as={HashLink} to="/home#home" ><button className=" link-color p-2 rounded-pill text-white">Home</button></Nav.Link>
                                <Nav.Link as={HashLink} to="/home#clothes"><button className=" link-color p-2 rounded-pill text-white">Clothes Collection</button></Nav.Link>
                                <Nav.Link as={HashLink} to="/moreServices"><button className=" link-color p-2 rounded-pill text-white">Explore</button></Nav.Link>
                                <Nav.Link as={HashLink} to="/home#about" className="mx-2"><button className=" link-color p-2 rounded-pill text-white">About</button></Nav.Link>
                                <Nav.Link as={HashLink} to="/home#contact" className="mx-2"><button className=" link-color p-2 rounded-pill text-white">Contact</button></Nav.Link>
                                {user?.email ?
                                    <NavLink style={{ textDecoration: 'none' }} to="/dashboard">
                                        <button className=" link-color p-2 rounded-pill text-white" >Dashboard</button>
                                    </NavLink>
                                    :
                                    <></>
                                }
                                {user?.email ?
                                    <button className="mx-2 px-4 logout-btn-color p-2 rounded-pill text-white" onClick={logout}>LogOut</button>
                                    :
                                    <NavLink to="/login" className="mx-2"><button className="mx-2 px-4 login-btn-color p-2 rounded-pill text-white">LogIn</button></NavLink>}
                                <Navbar.Text className="text-white">
                                    Logged in as : <a className="text-white" href="#login">{user.email}</a>
                                </Navbar.Text>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;