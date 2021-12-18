import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './UserRoute.css';

const UserRoute = ({ setPath }) => {

    const { logout } = useAuth();

    return (
        <div>
            <Link className="link-style" to="/home" ><Button sx={{ backgroundColor: '#212529' }} className="mt-2 mb-2 button-design container" variant="contained">Home</Button></Link>
            <ul className="list-group user-route ">
                <Button sx={{ backgroundColor: '#212529' }} variant="contained" className=" my-2 button-design" aria-current="true" onClick={() => setPath("payment")}>
                    Payment
                </Button>
                <Button sx={{ backgroundColor: '#212529' }} variant="contained" className=" my-2 button-design" onClick={() => setPath("myorders")}>My Orders</Button>
                <Button sx={{ backgroundColor: '#212529' }} variant="contained" className=" my-2 button-design" onClick={() => setPath("addreview")}>Add Review</Button>
            </ul>
            <Button sx={{ backgroundColor: '#212529' }} variant="contained" className=" my-2 button-design container" onClick={logout}>LogOut</Button>
        </div >
    );
};

export default UserRoute;