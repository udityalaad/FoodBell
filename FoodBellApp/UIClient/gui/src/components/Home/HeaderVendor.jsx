import { AppBar, Avatar, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import {ReactSession} from 'react-client-session';
import { Link } from "react-router-dom";

const Header = ({ value, changeInput }) => {

const settings = ['Profile','Logout'];


  const [anchorElUser, setAnchorElUser] =useState(null);
  const [proRoute, setProRoute] =useState('/index.html/Profile');
  const [logOutRoute, setLogOutRoute] =useState('/index.html/logout');
  const [dbVendorRoute,setDbVendorRoute]=useState('/index.html/VendorDashboard')
  const [ActiveSubscriptionRoute,setActiveSubscriptionRoute]=useState('/index.html/ActiveSubscriptions')


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogoClick=()=>{
    setDbVendorRoute('/index.html/VendorDashboard')   
  };

  const handleActiveSubscriptions=()=>{
    setDbVendorRoute('/index.html/ActiveSubscriptions')   
  };

  const headerIcon = {
    marginLeft : '80% !important', 
  };



  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenProfilePage = () => {   
    setProRoute('/index.html/Profile');
  };
  

  const handleLogout = () => {
    ReactSession.set("profile",null);
    console.log(ReactSession.get("profile"));
    // setLogOutRoute('/index.html');
  };

  const addCorrectNavOption = (setting) => {
    if (setting === "Profile") {
      return (
        <Link to={proRoute} style={{ textDecoration: 'none' ,color:"black" }}>
            <MenuItem key={setting} onClick={handleOpenProfilePage}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
              </Link>)
    } else if (setting === "Logout") {
      return (
        <Link to={logOutRoute}  onClick={handleLogout} style={{ textDecoration: 'none',color:"black"}}>
          <MenuItem key={setting}>
            <Typography textAlign="center">{setting}</Typography>
          </MenuItem>
        </Link>);
    }
  };

  return (
   
    <AppBar position="fixed" >
      <Toolbar disableGutters>
        <Typography variant="h4" style={{margin:"10px"}} onClick={handleLogoClick}>
        <Link to={dbVendorRoute} style={{ textDecoration: 'none'  ,color:"white"}}>
         FoodBell
         </Link>
        </Typography>

        <Typography variant="h4" style={{margin:"10px",  boxShadow: "0.5px 0.5px 0.5px 0.5px lightgrey", paddingRight: "57px",paddingBottom: '2px'}} onClick={handleActiveSubscriptions}>
        <Link to={ActiveSubscriptionRoute} style={{ textDecoration: 'none',color:"white", paddingLeft: '60px', fontSize: '1rem'}}>
          SUBSCRIPTIONS
         </Link>
        </Typography>

          <Box sx={{ flexGrow: 0 ,ml:"50%"}}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Vendor" style={{margin:"10px"}} />
              </IconButton>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                addCorrectNavOption(setting)
              ))}
            </Menu>
          </Box>
      </Toolbar>
    </AppBar>
    
   
  );
};

export default Header;
