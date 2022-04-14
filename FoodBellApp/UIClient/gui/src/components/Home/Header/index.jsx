import { AppBar, Avatar, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { Fragment, useState } from "react";
import SearchBar from "../SearchBar";
import {ReactSession} from 'react-client-session';
import { Link } from "react-router-dom";
import Image from '../../../images/profilepic.png'

const Header = ({ value, changeInput }) => {
  var profileCheck = ReactSession.get("profile");
const pages = ['Subscription'];
const settings = ['Profile','Dashboard','Logout'];


  const [anchorElUser, setAnchorElUser] =useState(null);
  const [proRoute, setProRoute] =useState('/index.html/Profile');
  // const [logOutRoute, setLogOutRoute] =useState('/index.html/login');
  const [logOutRoute, setLogOutRoute] =useState('/index.html/logout');
  const [subRoute, setSubRoute] =useState('/index.html/Subscription');
  const [dbCustomerRoute,setDbCustomerRoute]=useState('/index.html')


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogoClick=()=>{
    setDbCustomerRoute('/index.html')
    
  };

 

  const handleSubMenu =(page)=>{
    if(page==="Subscription"){
      setSubRoute('/index.html/Subscription')
    }
  }

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
        <Link to={dbCustomerRoute} style={{ textDecoration: 'none'  ,color:"white"}}>
         FoodBell
         </Link>
        </Typography>
        <SearchBar value={value} changeInput={changeInput} />
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={subRoute}  style={{ textDecoration: 'none' }}>
              <Button
                key={page}
                onClick={()=>handleSubMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Typography variant="body2">
                {page}
                </Typography>
              </Button>
              </Link>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Customer" src={Image} style={{margin:"10px"}} />
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
