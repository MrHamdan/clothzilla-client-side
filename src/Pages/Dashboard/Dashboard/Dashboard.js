import { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from './../../../hooks/useAuth';
import MyOrders from '../../MyOrders/MyOrders';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import ManageAllServices from '../../ManageAllServices/ManageAllServices';
import AddANewService from '../../AddANewService/AddANewService';
import Pay from '../Pay/Pay';
import Review from '../../Review/Review';
import DashboardHome from '../DashboardHome/DashboardHome';
import './Dashboard.css'
import UserRoute from '../../UserRoute/UserRoute';
import AdminRoute from '../../AdminRoute/AdminRoute';

const drawerWidth = 245;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const { admin, logout } = useAuth();
    const [path, setPath] = useState("");
    const location = useLocation();
    const history = useHistory();
    console.log(path);
    const goBack = () => {
        const redirect_uri = location.state?.from || "/home";
        history.push(redirect_uri);
    }
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            {!admin && <div>
                <Toolbar sx={{ backgroundColor: '#212529' }}><span className="text-color1 fw-bold">Users</span><span className="text-color2 fw-bold">Options</span></Toolbar>
                <Divider />
                <UserRoute setPath={setPath}></UserRoute>
            </div>}
            {admin && <div>
                <Toolbar sx={{ backgroundColor: '#212529', py: 1 }}><span className="text-color1 fw-bold">Admin</span> <span className="text-color2 fw-bold">Options</span></Toolbar>
                <Divider />
                <AdminRoute setPath={setPath}></AdminRoute>
            </div>}
        </div>

    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        backgroundColor: '#212529',
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h5" noWrap component="div">
                            Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />

                    <div>
                        {path === "" && <h2 className="text-center text-design">Dashboard Home</h2>}
                        {path === "payment" && <Pay></Pay>}
                        {path === "myorders" && <MyOrders></MyOrders>}
                        {path === "addreview" && <Review></Review>}
                        {path === "manageallorders" && <ManageAllOrders></ManageAllOrders>}
                        {path === "makeadmin" && <MakeAdmin></MakeAdmin>}
                        {path === "addservice" && <AddANewService></AddANewService>}
                        {path === "manageservice" && <ManageAllServices></ManageAllServices>}
                    </div>

                </Box>
            </Box>
        </div>
    );
}

Dashboard.propTypes = {

    window: PropTypes.func,
};

export default Dashboard;







