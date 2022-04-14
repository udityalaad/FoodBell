import React, { useState } from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
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
import LoginPage from "./loginPage";
import CustomerProfileSkipPage from "./CustomerProfileSkipPage";
import VendorSignUp from "./VendorSignUpPage";
import ErrorModal from "./ErrorModal";
import SideImage from "./SideImage";

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

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmPassword] = useState("");
  const [errorEmail, seterrorEmail] = useState(false);
  const [value, setValue] = useState("Customer");
  const [error, seterror] = useState();
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const validateEmail = (email) => {
    return emailPattern.test(email);
  };

  const radioButtonHandler = (event) => {
    setValue(event.target.value);
  
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const mailHandler = (event) => {
    setEmail(event.target.value);
    validateEmail(event.target.value)
      ? seterrorEmail(false)
      : seterrorEmail(true);
  };

  const phoneHandler = (event) => {
    setPhone(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const confirmpasswordHandler = (event) => {
    setconfirmPassword(event.target.value);
  };

  const errorHandler = () => {
    seterror(null);
    seterrorEmail(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name.trim().length === 0 ||
      email.trim().length === 0 ||
      phone.trim().length === 0 ||
      password.trim().length === 0 ||
      confirmpassword.trim().length === 0
    ) {
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
    if (phone.trim().length !== 10) {
      seterror({
        title: "Invalid Phone Number",
        message: "Please enter 10-digit valid Phone no.",
      });
      return;
    }

    if (password.trim().length < 8) {
      seterror({
        title: "Invalid Password",
        message: "Please Enter 8-digit password",
      });
      return;
    }
    if (password !== confirmpassword) {
      seterror({
        title: "Invalid Password",
        message: "Password not matched",
      });
      return;
    }

    const payload = {
      email: email,
      phone: phone,
      password: password
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    fetchData("http://localhost:8090/authentication/addAccount", options).then(
      (result) => {
        console.log(result);
        console.log(result["error"]);
        console.log(result.message);
        if (result === true) {
          setIsSignUp(false);

          
            const payloadCustomer = {
              "customerName": name,
              "customerEmail": email,
              "customerPhone": phone
            };
        
            const optionsCustomer = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payloadCustomer),
            };

            fetchData("http://localhost:8090/customers/addCustomer", optionsCustomer).then(
              (resultCustomer) => {
                console.log(resultCustomer);
                console.log(resultCustomer["error"]);
                console.log(resultCustomer.message);
                if (resultCustomer["error"] === '') {
                  setIsSignUp(false);
                } 
                else if (resultCustomer["error"]) 
                {
                    seterror({
                            title: "Failed to add customer Profile !!",
                            message: resultCustomer.message,
                            });
                    return;
                }
              }
            );    
        } 
        else if (result["error"]) 
        {   setIsSignUp(true);
            seterror({
                    title: "SignUp Failed!!",
                    message: result.message,
                     });
            return;
        }
      }
    );
    setName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setconfirmPassword("");
  };

  const [isSignUp, setIsSignUp] = useState(true);

  function SignInRouteHandler() {
    setIsSignUp(false);
  }
  const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
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
      {isSignUp && <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <SideImage />
      {isSignUp && value === "Customer" && (
        <Grid item xs={12} sm={6} md={6} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 1,
              mx: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={Image}
              alt="logo"
              style={{ height: "130px", width: "400px" }}
            />
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <FormControl>
                <RadioGroup
                  center
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={value}
                  onChange={radioButtonHandler}
                >
                  <FormControlLabel
                    value="Vendor"
                    control={<Radio />}
                    label="As a Vendor"
                  />
                  <FormControlLabel
                    value="Customer"
                    control={<Radio />}
                    label="As a Customer"
                  />
                </RadioGroup>
              </FormControl>
              <TextField
                margin="dense"
                value={name}
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
                onChange={nameHandler}
              />
              <TextField
                margin="dense"
                value={email}
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={mailHandler}
              />
              <TextField
                margin="dense"
                required
                fullWidth
                id="phone no."
                label="Mobile No."
                name="phone"
                autoComplete="phone"
                autoFocus
                value={phone}
                onChange={phoneHandler}
              />

              <TextField
                margin="dense"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                autoComplete="current-password"
                type="password"
                autoFocus
                value={password}
                onChange={passwordHandler}
                helperText="Minimum 8-digit"
              />
              <TextField
                margin="dense"
                required
                fullWidth
                id="password1"
                label="Confirm Password"
                name="confirm-password"
                type="password"
                autoComplete="current-password"
                value={confirmpassword}
                autoFocus
                onChange={confirmpasswordHandler}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                // onClick={SignUpHandler}
              >
                Sign Up
              </Button>
              <Typography variant="body2" align="center" margin="none">
                By creating an account, I accept the Terms & Conditions &
                Privacy Policy
              </Typography>
              <Grid container>
                <Grid item xs>
                  <Button
                    onClick={SignInRouteHandler}
                    fullWidth
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Already have an account? Log In
                  </Button>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 1 }} />
            </Box>
          </Box>
        </Grid>
      )}
      {isSignUp && value === "Vendor" && <VendorSignUp />}
      </Grid> }
      {!isSignUp && <LoginPage />}
     
    </ThemeProvider>
  );
}
