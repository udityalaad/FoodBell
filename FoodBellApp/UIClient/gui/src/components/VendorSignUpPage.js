import React, { useState } from "react";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import FormGroup from '@mui/material/FormGroup';
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
import LoginPage from "./loginPage";
import ErrorModal from "./ErrorModal";
import SideImage from "./SideImage";
import CssBaseline from "@mui/material/CssBaseline";
import {ReactSession} from 'react-client-session';

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

export default function VendorSignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmPassword] = useState("");
  const [errorEmail,seterrorEmail]=useState(false);
  const [property_no, setPropertyNumber] = useState('');
  const [streetname, setStName] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [value, setValue] =useState('Vendor');
  const [error, seterror ]=useState();
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
  //BasicFoodOptions
  const [basicFoodOptions, setBasicFoodOptions] = React.useState({
    Veg: false,
    NonVeg: false,
  });

  const handleBasicFoodOptions = (event) => {
    setBasicFoodOptions({ ...basicFoodOptions, [event.target.name]: event.target.checked });
  };
  //Vendor Advanced Food Options
  const [vendorAdvancedFoodOptions, setAdvancedFoodOptions] = React.useState({
    Indian: false,
    Italian: false,
    Chinese: false,
  });

  const handleVendorAdvancedFoodOptions = (event) => {
    setAdvancedFoodOptions({ ...vendorAdvancedFoodOptions, [event.target.name]: event.target.checked });
  };

  //Periodicity
  const [periodicity, setPeriodicity] = React.useState({
    Weekly: false,
    Monthly: false,
  });

  const handlePeriodicity = (event) => {
    setPeriodicity({ ...periodicity, [event.target.name]: event.target.checked });
  };

  //Availability
  const [availability, setAvailability] = React.useState({
    Monday: false,
    Tuesday: false,
    Wednesday: false,
    Thursday: false,
    Friday: false,
    Saturday: false,
    Sunday: false
  });

  const handleAvailability = (event) => {
    setAvailability({ ...availability, [event.target.name]: event.target.checked });
  };

  //Vendor Offered Size
  const [vendorOfferedSize, setVendorOfferedSize] = React.useState({
    Standard: false,
    Large: false,
    Small: false,
  });

  const handleVendorOfferedSize = (event) => {
    setVendorOfferedSize({ ...vendorOfferedSize, [event.target.name]: event.target.checked });
  };

  const validateEmail=(email)=>{
    return emailPattern.test(email);

  };

  const radioButtonHandler = (event) => {
    setValue(event.target.value);
    console.log(value)
  };

  function handleName(event) {
    setName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
    validateEmail(event.target.value)?seterrorEmail(false): seterrorEmail(true)
  }
  function handlePhone(event) {
    setPhone(event.target.value);
  }
  function handleStreetName(event) {
    setStName(event.target.value);
  }
  function handlePropertyNumber(event) {
    setPropertyNumber(event.target.value);
  }
  function handleCity(event) {
    setCity(event.target.value);
  }
  function handleProvince(event) {
    setProvince(event.target.value);
  }
  function handleCountry(event) {
    setCountry(event.target.value);
  }
  function handleZipCode(event) {
    setZipCode(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function fetchTrueValues(a){return Object.keys(a).filter(key => a[key] === true )}

  const confirmpasswordHandler=(event)=>{
    setconfirmPassword(event.target.value)
  }

  const errorHandler =()=>{
    seterror(null)
    seterrorEmail(false)
  }

  const [isSignUp, setIsSignUp] = useState(true);

  function SignInRouteHandler() {
    setIsSignUp(false);
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    if(name.trim().length===0 || email.trim().length===0 || phone.trim().length===0 || password.trim().length===0 ||confirmpassword.trim().length===0
    || streetname.trim().length===0 || city.trim().length===0 || province.trim().length===0 )
    {
       seterror({
      title:'Invalid input',
      message:'Mandatory field is Empty'
  })
      return;
    }
    if(errorEmail===true){
      seterror({
       title:'Invalid Email Address',
       message:'Please Enter valid email address'
   })
       return;
     }
    if(phone.trim().length!==10){
     seterror({
      title:'Invalid Phone Number',
      message:'Please enter 10-digit valid Phone no.'
  })
      return;
    }

    if(password.trim().length<8){
        seterror({
        title:'Invalid Password',
        message:'Please Enter 8-digit password'
    })
      return;
    }
    if(password !== confirmpassword){
      seterror({
        title:'Invalid Password',
        message:'Password not matched'
    })
      return;
    }
   

    const payload = {
      email: email,
      phone: phone,
      password: password,
      name: name,
      propertyNumber: property_no,
      streetname: streetname,
      city: city,
      province: province,
      country: country,
      zipcode: zipcode
    };
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    fetchData("http://localhost:8090/authentication/addAccount", options).then(
      (result) => {
        console.log(result);
        if (result === true) {
          setIsSignUp(false);
           const payloadVendor = {
              "vendorName": name,
              "vendorEmail": email,
              "vendorPhone": phone,
              "address": {
                "streetName" : streetname,
                "city" : city,
                "province" : province
              },
              "vendorBasicFoodOptions": fetchTrueValues(basicFoodOptions),
              "vendorAdvancedFoodOptions": fetchTrueValues(vendorAdvancedFoodOptions),
              "vendorPeriodicityOptions": fetchTrueValues(periodicity),
              "vendorAvailability": fetchTrueValues(availability),
              "vendorOfferedSize": fetchTrueValues(vendorOfferedSize)
            }
            
            console.log(payloadVendor);
        
            const optionsVendor = {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payloadVendor),
            };

            fetchData("http://localhost:8090/vendors/addVendor", optionsVendor).then(
              (resultVendor) => {
                console.log(resultVendor);
                console.log(resultVendor["error"]);
                console.log(resultVendor.message);
                if (resultVendor["error"] === '') {
                  setIsSignUp(false);
                } 
                else if (resultVendor["error"]) 
                {
                    seterror({
                            title: "Failed to add vendor Profile !!",
                            message: resultVendor.message,
                            });
                    return;
                }
              }
            );
          }
          else if (result["error"]) 
          {
              seterror({
                      title: "SignUp Failed!!",
                      message: result.message,
                       });
              return;
          }
        }
      );
    setName('');
    setEmail('');
    setPhone('');
    setPassword('');
    setconfirmPassword('');
    setPropertyNumber('');
    setStName('');
    setProvince('');
    setCity('');
    setCountry('');
    setZipCode('');
    setBasicFoodOptions({Veg: false, Nonveg: false});
    setAdvancedFoodOptions({ Indian: false, Italian: false, Chinese: false});
    setPeriodicity({Weekly: false, Monthly: false});
    setAvailability({ Monday: false, Tuesday: false, Wednesday: false, Thursday: false, Friday: false, Saturday: false, Sunday: false});
    setVendorOfferedSize({Standard: false, Large: false, Small: false});
  };



  const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
    return data;
  };
  
  const { Veg, Nonveg } = basicFoodOptions;

  const { Indian, Italian, Chinese} = vendorAdvancedFoodOptions;

  const { Weekly, Monthly } = periodicity;

  const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = availability;

  const {Standard, Large, Small} =   vendorOfferedSize;

  return (
    <ThemeProvider theme={theme}>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      {isSignUp && value==='Vendor'&& (
        <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />     
        <SideImage />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
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
                  defaultValue="Vendor"
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
                required
                fullWidth
                value={name}
                id="fname"
                label="Full Name"
                name="fname"
                autoComplete="fname"
                autoFocus
                onChange={handleName}
              />
              <TextField
                 margin="dense"
                required
                fullWidth
                value={email}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleEmail}
              />
              <TextField
                margin="dense"
                required
                fullWidth
                value={phone}
                id="phone no."
                label="Mobile No."
                name="phone"
                autoComplete="phone"
                autoFocus
                onChange={handlePhone}
              />
              <TextField
                margin="normal"
                fullWidth
                value={property_no}
                id="property_no"
                label="Property Number"
                name="property_number"
                autoFocus
                onChange={handlePropertyNumber}
              />
              <TextField
                margin="normal"
                fullWidth
                value={streetname}
                id="street_name"
                label="Street Name"
                name="street_name"
                autoFocus
                onChange={handleStreetName}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={city}
                id="city"
                label="city"
                name="city"
                autoFocus
                onChange={handleCity}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={province}
                id="province"
                label="province"
                name="province"
                autoFocus
                onChange={handleProvince}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={country}
                id="country"
                label="country"
                name="country"
                autoFocus
                onChange={handleCountry}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                value={zipcode}
                id="zipcode"
                label="zipcode"
                name="zipcode"
                autoFocus
                onChange={handleZipCode}
              />
              <TextField
                margin="dense"
                required
                fullWidth
                value={password}
                name="password"
                label="Password"
                type="password"
                id="password1"
                autoComplete="current-password"
                onChange={handlePassword}
                helperText='Minimum 8-digit'
              />
              <TextField
                margin="dense"
                required
                fullWidth
                value={confirmpassword}
                name="confirmpassword"
                label="Confirm Password"
                type="password"
                id="password1"
                autoComplete="current-password"
                onChange={confirmpasswordHandler}
              />

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                    Basic Food Options:
                  </Grid>
                  <Grid item xs={5}> 
                    <FormGroup>
                        <FormControlLabel control={<Checkbox checked={Veg} onChange={handleBasicFoodOptions} name="Veg" />}
                        label="Veg"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={Nonveg} onChange={handleBasicFoodOptions} name="Non-veg" />}
                          label="Non-Veg"
                        />
                    </FormGroup>
                  </Grid>
                  <Grid item xs={6}>
                    Vendor Advanced Food Options:
                  </Grid>
                  <Grid item xs={5}> 
                    <FormGroup> 
                        <FormControlLabel control={<Checkbox checked={Indian} onChange={handleVendorAdvancedFoodOptions} name="Indian" />} label="Indian"/>
                        <FormControlLabel control={<Checkbox checked={Italian} onChange={handleVendorAdvancedFoodOptions} name="Italian" />} label="Italian"/>
                        <FormControlLabel control={<Checkbox checked={Chinese} onChange={handleVendorAdvancedFoodOptions} name="Chinese" />} label="Chinese"/>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={6}>
                    Periodicity:
                  </Grid>
                  <Grid item xs={5}> 
                    <FormGroup> 
                        <FormControlLabel control={<Checkbox checked={Weekly} onChange={handlePeriodicity} name="Weekly" />} label="Weekly"/>
                        <FormControlLabel control={<Checkbox checked={Monthly} onChange={handlePeriodicity} name="Monthly" />} label="Monthly"/>
                    </FormGroup>
                  </Grid>
                <Grid item xs={6}>
                    Availability:
                  </Grid>
                  <Grid item xs={5}> 
                  <FormGroup> 
                        <FormControlLabel control={<Checkbox checked={Monday} onChange={handleAvailability} name="Monday" />} label="Monday"/>
                        <FormControlLabel control={<Checkbox checked={Tuesday} onChange={handleAvailability} name="Tuesday" />} label="Tuesday"/>
                        <FormControlLabel control={<Checkbox checked={Wednesday} onChange={handleAvailability} name="Wednesday" />} label="Wednesday"/>
                        <FormControlLabel control={<Checkbox checked={Thursday} onChange={handleAvailability} name="Thursday" />} label="Thursday"/>
                        <FormControlLabel control={<Checkbox checked={Friday} onChange={handleAvailability} name="Friday" />} label="Friday"/>
                        <FormControlLabel control={<Checkbox checked={Saturday} onChange={handleAvailability} name="Saturday" />} label="Saturday"/>
                        <FormControlLabel control={<Checkbox checked={Sunday} onChange={handleAvailability} name="Sunday" />} label="Sunday"/>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={6}>
                    Vendor Offered Size:
                  </Grid>
                  <Grid item xs={5}> 
                  <FormGroup> 
                        <FormControlLabel control={<Checkbox checked={Standard} onChange={handleVendorOfferedSize} name="Standard" />} label="Standard"/>
                        <FormControlLabel control={<Checkbox checked={Large} onChange={handleVendorOfferedSize} name="Large" />} label="Large"/>
                        <FormControlLabel control={<Checkbox checked={Small} onChange={handleVendorOfferedSize} name="Small" />} label="Small"/>
                    </FormGroup>
                  </Grid>
                </Grid>           

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                // onClick={handleSignup}
              >
                Sign Up
              </Button>
              <Typography variant="body2" align="center" margin="none">
                By creating an account, I accept the Terms & Conditions &
                Privacy Policy
              </Typography>
              <Grid container>
                <Grid item xs>
                  <Button onClick={SignInRouteHandler} fullWidth sx={{ mt: 3, mb: 2 }}>
                    Already have an account? Log In
                  </Button>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 1 }} />
            </Box>
          </Box>
        </Grid>
        </Grid>
      )}
      {isSignUp && value==='Customer'&&(<SignUpPage/>)}
      {!isSignUp && <LoginPage />} 
    </ThemeProvider>
  );
}