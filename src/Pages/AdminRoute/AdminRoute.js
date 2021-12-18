import React from 'react';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const AdminRoute = ({ setPath }) => {

    const { logout } = useAuth();

    return (
        <div>
            <Link className="link-style" to="/home" ><Button sx={{ backgroundColor: '#212529' }} className="mt-2 mb-2 button-design container" variant="contained">Home</Button></Link>
            <ul className="list-group admin-route">
                <Button sx={{ backgroundColor: '#212529' }} variant="contained" className=" my-2 button-design" onClick={() => setPath("manageallorders")}>
                    Manage All Orders</Button>
                <Button sx={{ backgroundColor: '#212529' }} variant="contained" className=" my-2 button-design" aria-current="true" onClick={() => setPath("makeadmin")}>
                    Make Admin
                </Button>
                <Button sx={{ backgroundColor: '#212529' }} variant="contained" className=" my-2 button-design" onClick={() => setPath("addservice")}>
                    Add Service</Button>
                <Button sx={{ backgroundColor: '#212529' }} variant="contained" className=" my-2 button-design" onClick={() => setPath("manageservice")}>
                    Manage Service</Button>
            </ul>
            <Button sx={{ backgroundColor: '#212529' }} variant="contained" className=" my-2 button-design container" onClick={logout}>LogOut</Button>
        </div>
    );
};

export default AdminRoute;