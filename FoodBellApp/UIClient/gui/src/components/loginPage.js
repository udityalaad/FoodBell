import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "../images/foodBellLogo.jpg";
import SignUpPage from "./SignUpPage";
import SideImage from "./SideImage";
import ErrorModal from "./ErrorModal";
import CustomerDashboard from "./CustomerDashboard";
import { ReactSession } from "react-client-session";
import VendorDashboard from "./VendorDashboard";

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

export default function LoginPage() {
  const [errorEmail, seterrorEmail] = useState(false);
  const [email, setloginEmail] = useState("");
  const [password, setloginPassword] = useState("");
  const [isSignin, setIsSignin] = useState(true);
  const [customerDashboard, setCustomerDashboard] = useState(false);
  const [vendorDashboard, setVendorDashboard] = useState(false);
  const [error, seterror] = useState();
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  };

  function validateEmail(email) {
    return emailPattern.test(email);
  }

  const loginEmailHandler = (event) => {
    setloginEmail(event.target.value);
    validateEmail(event.target.value)
      ? seterrorEmail(false)
      : seterrorEmail(true);
  };

  const loginPasswordHandler = (event) => {
    setloginPassword(event.target.value);
  };

  const errorHandler = () => {
    seterror(null);
    seterrorEmail(false);
  };

  function SignUpRouteHandler() {
    setIsSignin(false);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      seterror({
        title: "Invalid input",
        message: "Mandatory field is Empty",
      });
      return;
    }

    if (errorEmail === true) {
      seterror({
        title: "Invalid Email Address",
        message: "Please Enter valid email address",
      });
      return;
    }

    if (password.trim().length < 8) {
      seterror({
        title: "Invalid Password",
        message: "Incorrect Password",
      });
      return;
    }

    fetchData(
      `http://localhost:8090/authentication/authenticateAccountByEmail/${email}/${password}`,
      {}
    ).then((result) => {
      console.log(result);
      if (result === true) {
        fetchData(
          `http://localhost:8090/userProfiles/getUserProfileByEmail/${email}`,
          {}
        ).then((resultProfile) => {
          console.log(resultProfile);
          ReactSession.set("profile", resultProfile);
          var profile = ReactSession.get("profile");

          if (profile.profileType === "Customer") {
            setIsSignin(false);
           
            setCustomerDashboard(true);
            setVendorDashboard(false);
          } else if (profile.profileType === "Vendor") {
            setIsSignin(false);
            setCustomerDashboard(false);
            setVendorDashboard(true);
          }

          window.location.reload();
        });
      } else {
        setIsSignin(true);
        seterror({
          title: "Invalid User",
          message: "Account does not exist",
        });
        return;
      }
    });

    setloginEmail("");
    setloginPassword("");
  };

  return (
    <ThemeProvider theme={theme}>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      {isSignin && (
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
                mx: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Grid item>
                <img
                  src={Image}
                  alt="logo"
                  style={{ height: "150px", width: "350px", mt: "1px" }}
                />
              </Grid>
              <Grid item>
                <Typography component="h1" variant="h5">
                  Log in
                </Typography>
              </Grid>
              <Box
                component="form"
              
                onSubmit={handleSubmit}
               
              >
                <TextField
                  margin="normal"
                  value={email}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={loginEmailHandler}
                
                />
                <TextField
                  margin="normal"
                  value={password}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={loginPasswordHandler}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  Log In
                </Button>
               
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Link href="#" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                 
                      <Button onClick={SignUpRouteHandler}>
                        Don't have an account? Sign Up
                      </Button>
                  
                  </Grid>
                </Grid>
                <Copyright sx={{ mt: 5 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
      {!isSignin && !customerDashboard && !vendorDashboard && <SignUpPage />}

      {customerDashboard && <CustomerDashboard />}
      {vendorDashboard && <VendorDashboard />}
    </ThemeProvider>
  );
}
