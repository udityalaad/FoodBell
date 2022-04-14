import React, { useState, useEffect } from "react";
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
import HeaderVendor from "./Home/HeaderVendor";
import Image from "../images/foodBellLogo.jpg";
import VendorDashboard from "./VendorDashboard";
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { ReactSession } from "react-client-session";

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
        FoodBell
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function VendorProfileSkip() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [property_no, setPropertyNumber] = useState('');
  const [streetname, setStName] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [country, setCountry] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [value, setValue] =useState('Vendor');
  const [error, seterror ]=useState();
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  const sessionData = JSON.parse(localStorage.getItem('__react_session__'));
  const payloadProfileData = sessionData.profile.profile;

  const vendorProfile = ReactSession.get("profile");

  const marginTopStyle = {
    marginTop : '50px',
  };

  const  CheckboxPadding= {
    padding: '10px',
  };

  const CheckboxLabelStyle = {
    fontSize: '1rem',
    fontWeight: '400',
  };

  const CheckboxStyle = {
    boxShadow: '1px 1px 1px 1px #745050a3',
    margin: '23px 0',
  };

  //BasicFoodOptions
  const [basicFoodOptions, setBasicFoodOptions] = React.useState({
    Veg: payloadProfileData.vendorBasicFoodOptions.includes('Veg'),
    NonVeg: payloadProfileData.vendorBasicFoodOptions.includes('NonVeg'),
  });

  const handleBasicFoodOptions = (event) => {
    setBasicFoodOptions({ ...basicFoodOptions, [event.target.name]: event.target.checked });
  };
  //Vendor Advanced Food Options
  const [vendorAdvancedFoodOptions, setAdvancedFoodOptions] = React.useState({
    Indian: payloadProfileData.vendorAdvancedFoodOptions.includes('Indian'),
    Italian: payloadProfileData.vendorAdvancedFoodOptions.includes('Italian'),
    Chinese: payloadProfileData.vendorAdvancedFoodOptions.includes('Chinese'),
  });

  const handleVendorAdvancedFoodOptions = (event) => {
    setAdvancedFoodOptions({ ...vendorAdvancedFoodOptions, [event.target.name]: event.target.checked });
    console.log(vendorAdvancedFoodOptions);
  };

  //Periodicity
  const [periodicity, setPeriodicity] = React.useState({
    Weekly: payloadProfileData.vendorPeriodicityOptions.includes('Weekly'),
    Monthly: payloadProfileData.vendorPeriodicityOptions.includes('Monthly'),
  });

  const handlePeriodicity = (event) => {
    setPeriodicity({ ...periodicity, [event.target.name]: event.target.checked });
  };

  //Availability
  const [availability, setAvailability] = React.useState({
    Monday: payloadProfileData.vendorAvailability.includes('Monday'),
    Tuesday: payloadProfileData.vendorAvailability.includes('Tuesday'),
    Wednesday: payloadProfileData.vendorAvailability.includes('Wednesday'),
    Thursday: payloadProfileData.vendorAvailability.includes('Thursday'),
    Friday: payloadProfileData.vendorAvailability.includes('Friday'),
    Saturday: payloadProfileData.vendorAvailability.includes('Saturday'),
    Sunday: payloadProfileData.vendorAvailability.includes('Sunday'),
  });

  const handleAvailability = (event) => {
    setAvailability({ ...availability, [event.target.name]: event.target.checked });
  };

  //Vendor Offered Size
  const [vendorOfferedSize, setVendorOfferedSize] = React.useState({
    Standard: payloadProfileData.vendorOfferedSize.includes('Standard'),
    Large: payloadProfileData.vendorOfferedSize.includes('Large'),
    Small: payloadProfileData.vendorOfferedSize.includes('Small'),
  });

  const handleVendorOfferedSize = (event) => {
    setVendorOfferedSize({ ...vendorOfferedSize, [event.target.name]: event.target.checked });
  };

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

  function fetchTrueValues(a){return Object.keys(a).filter(key => a[key] === true )}
  

  function updateVendorFormFields(){
    setPropertyNumber(payloadProfileData.address.propertyNo);
    setStName(payloadProfileData.address.streetName);
    setProvince(payloadProfileData.address.province);
    setCity(payloadProfileData.address.city);
    setCountry(payloadProfileData.address.country);
    setZipCode(payloadProfileData.address.zipCode);
  } 

  useEffect(() => {
    updateVendorFormFields();
  }, []);


  function handleSubmit (event) {
    event.preventDefault();
    const payload = {
        "vendorId": payloadProfileData.vendorId,
        "vendorName": payloadProfileData.vendorName,
        "vendorEmail": payloadProfileData.vendorEmail,
        "vendorPhone": payloadProfileData.vendorPhone,
        "address": {
          "addresId": payloadProfileData.address.addresId,
          "propertyNo" : property_no,
          "streetName" : streetname,
          "city" : city,
          "province" : province,
          "country" : country,
          "zipCode" : zipcode
        },
        "vendorBasicFoodOptions": fetchTrueValues(basicFoodOptions),
        "vendorAdvancedFoodOptions": fetchTrueValues(vendorAdvancedFoodOptions),
        "vendorPeriodicityOptions": fetchTrueValues(periodicity),
        "vendorAvailability": fetchTrueValues(availability),
        "vendorOfferedSize": fetchTrueValues(vendorOfferedSize)
    }
    const profileData =  {profileType: vendorProfile.profileType, profile: payload};
    
    axios
    .post(`http://localhost:8090/vendors/updateVendor`, payload)
    .then((res) => {
      console.log('Result:', res);
      setIsSignUp(true);
      ReactSession.set("profile", profileData);
    })
    .catch((error) => {
      console.log(error);
    });
    setPropertyNumber('');
    setStName('');
    setProvince('');
    setCity('');
    setCountry('');
    setZipCode('');
    setBasicFoodOptions({Veg: false, NonVeg: false});
    setAdvancedFoodOptions({ Indian: false, Italian: false, Chinese: false});
    setPeriodicity({Weekly: false, Monthly: false});
    setAvailability({ Monday: false, Tuesday: false, Wednesday: false, Thursday: false, Friday: false, Saturday: false, Sunday: false});
    setVendorOfferedSize({Standard: false, Large: false, Small: false});
  };

  const { Veg,  NonVeg} = basicFoodOptions;

  const { Indian, Italian, Chinese } = vendorAdvancedFoodOptions;

  const { Weekly, Monthly } = periodicity;

  const { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday } = availability;

  const {Standard, Large, Small} =   vendorOfferedSize;

  return (
    <ThemeProvider theme={theme}>
    {!isSignUp && (
        <Grid container component="main"  sx={{ height: "100vh" }} >
        <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} sqaure  style={{backgroundColor: '#f5f5dc'}}>
          <HeaderVendor/>
          <Box
            sx={{
              my: 1,
              mx: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
            <Grid container style={marginTopStyle}>
                <Grid container spacing={2}>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
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
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                fullWidth
                value={country}
                id="country"
                label="country"
                name="country"
                autoFocus
                onChange={handleCountry}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                margin="normal"
                fullWidth
                value={zipcode}
                id="zipcode"
                label="zipcode"
                name="zipcode"
                autoFocus
                onChange={handleZipCode}
              />
              </Grid>
              </Grid>
              </Grid>

              <Grid container xs={12} sm={12} md={12} style={CheckboxStyle}>
              <Grid item xs={6} sm={6} md={6} style={CheckboxPadding}>
                  <Typography variant="h6" style={CheckboxLabelStyle}>
                    BASIC FOOD OPTIONS:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <FormGroup row>
                        <FormControlLabel control={<Checkbox checked={Veg} onChange={handleBasicFoodOptions} name="Veg" />}
                        label="Veg"
                        />
                        <FormControlLabel
                          control={<Checkbox checked={NonVeg} onChange={handleBasicFoodOptions} name="Non-veg" />}
                          label="Non-veg"
                        />
                    </FormGroup>
                  </Grid>
                  </Grid>
                <Grid container xs={12} sm={12} md={12} style={CheckboxStyle}>
                   <Grid item xs={6} sm={6} md={6} style={CheckboxPadding}>
                    <Typography variant="h6" style={CheckboxLabelStyle} >
                      VENDOR ADVANCED FOOD OPTIONS:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <FormGroup row> 
                        <FormControlLabel control={<Checkbox checked={Indian} onChange={handleVendorAdvancedFoodOptions} name="Indian" />} label="Indian"/>
                        <FormControlLabel control={<Checkbox checked={Italian} onChange={handleVendorAdvancedFoodOptions} name="Italian" />} label="Italian"/> 
                        <FormControlLabel control={<Checkbox checked={Chinese} onChange={handleVendorAdvancedFoodOptions} name="Chinese" />} label="Chinese"/> 
                    </FormGroup>
                  </Grid>
                  </Grid>
                  <Grid container xs={12} sm={12} md={12} style={CheckboxStyle}>
                    <Grid item xs={6} sm={6} md={6} style={CheckboxPadding}>
                    <Typography variant="h6" style={CheckboxLabelStyle}>
                      PERIODICITY:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                    <FormGroup row> 
                      <FormControlLabel control={<Checkbox checked={Weekly} onChange={handlePeriodicity} name="Weekly" />} label="Weekly"/> 
                      <FormControlLabel control={<Checkbox checked={Monthly} onChange={handlePeriodicity} name="Monthly" />} label="Monthly"/> 
                    </FormGroup>
                  </Grid>
                  </Grid>
                  <Grid container xs={12} sm={12} md={12} style={CheckboxStyle}>
                  <Grid item xs={6} sm={6} md={6} style={CheckboxPadding}>
                    <Typography variant="h6" style={CheckboxLabelStyle}>
                      AVAILABILITY:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                  <FormGroup row> 
                  <FormControlLabel control={<Checkbox checked={Monday} onChange={handleAvailability} name="Monday" />} label="Monday"/> 
                    <FormControlLabel control={<Checkbox checked={Tuesday} onChange={handleAvailability} name="Tuesday" />} label="Tuesday"/>
                    <FormControlLabel control={<Checkbox checked={Wednesday} onChange={handleAvailability} name="Wednesday" />} label="Wednesday"/>
                    <FormControlLabel control={<Checkbox checked={Thursday} onChange={handleAvailability} name="Thursday" />} label="Thursday"/>
                    <FormControlLabel control={<Checkbox checked={Friday} onChange={handleAvailability} name="Friday" />} label="Friday"/> 
                    <FormControlLabel control={<Checkbox checked={Saturday} onChange={handleAvailability} name="Saturday" />} label="Saturday"/> 
                    <FormControlLabel control={<Checkbox checked={Sunday} onChange={handleAvailability} name="Sunday" />} label="Sunday"/>
                    </FormGroup>
                  </Grid>
                  </Grid>
                  <Grid container xs={12} sm={12} md={12} style={CheckboxStyle}>
                  <Grid item xs={6} sm={6} md={6} style={CheckboxPadding}>
                    <Typography variant="h6" style={CheckboxLabelStyle}>
                    OFFERED SIZE:
                    </Typography>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6}>
                  <FormGroup row> 
                    <FormControlLabel control={<Checkbox checked={Standard} onChange={handleVendorOfferedSize} name="Standard" />} label="Standard"/>  
                    <FormControlLabel control={<Checkbox checked={Large} onChange={handleVendorOfferedSize} name="Large" />} label="Large"/> 
                    <FormControlLabel control={<Checkbox checked={Small} onChange={handleVendorOfferedSize} name="Small" />} label="Small"/> 
                    </FormGroup>
                  </Grid>  
                  </Grid>        
              <Box textAlign='center'>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 4, mb: 4 }}
                // onClick={updateVendor}
              >
                UPDATE PROFILE
              </Button>
              </Box>
              {/* <Grid container>
                <Grid item xs>
                  <Button onClick={SignInRouteHandler} fullWidth sx={{ mt: 3, mb: 2 }}>
                    Already have an account? Log In
                  </Button>
                </Grid>
              </Grid> */}
              <Copyright sx={{ mt: 1 }} />
            </Box>
          </Box>
        </Grid>
        </Grid>

      )}
    {/* {isSignUp && <VendorDashboard/>} */}
    {isSignUp && <Navigate to="/index.html/VendorDashboard" replace={true} />}
    </ThemeProvider>
  );
}