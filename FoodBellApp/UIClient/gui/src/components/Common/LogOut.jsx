import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "../../../src/images/foodBellLogo.jpg"
import SideImage from "../SideImage";
import { Link } from "react-router-dom";
import {ReactSession} from 'react-client-session';


// import SideImage from "./SideImage";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

const LogOut = () => {
  console.log("Logout1");
  // const [logInRoute,setLogInRoute]=useState('index/html/login')
  console.log("Logout2");
  const handleSubmit=()=>{
    console.log("LogouthandleSubmit");
    // setLogInRoute('index/html/login');
  }

  console.log("Logout3");
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <SideImage />

        <Grid
          item
          container
          xs={12}
          md={6}
          sm={12}
          component={Paper}
          elevation={6}
          square
        >
          <Box
            sx={{
              my: 1,
              mx: 15,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Grid item  sx={{ mt: 5, mb: 2 }}>
              <img
                src={Image}
                alt="logo"
                style={{ height: "150px", width: "350px",mt: "15px" }}
              />
            </Grid>
            <Grid item>
              <Typography component="h1" variant="h5">
                You Have Logged Out succesfully
              </Typography>
            </Grid>
            <Box >
               <Link to='/index.html' style={{ textDecoration: 'none',color:"white"}}>
                    <Button
                      // type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 10, mb: 2 }}
                        onClick={handleSubmit}
                    >
                      Log In Again?
                    </Button>
                  </Link>
            {/* <Copyright sx={{ mt: 5 }} /> */}
          </Box> 
          </Box>
        </Grid>
      </Grid>

    </ThemeProvider>
  );
};

export default LogOut;
