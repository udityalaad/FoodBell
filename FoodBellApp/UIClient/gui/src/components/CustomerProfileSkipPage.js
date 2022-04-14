import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "../images/foodBellLogo.jpg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import LoginPage from "./loginPage";
import FormGroup from "@mui/material/FormGroup";
import Header from "./Home/Header";
import CustomerDashboard from "./CustomerDashboard";
import { ReactSession } from "react-client-session";
import { Link } from "react-router-dom";

const theme = createTheme();

export default function CustomerProfileSkipPage({searchInput,handleChangedInput}) {
  var profile = ReactSession.get("profile");

  const [isUpdate, setisUpdate] = useState(false);
  const [veg, setVeg] = useState(false);
  const [nonveg, setNonVeg] = useState(false);
 

  const [advFoodPref, setadvFoodPref] = useState("");
  const [mexi, setmexi] = useState(false);
  const [indi, setindi] = useState(false);
  const [itali, setitali] = useState(false);
  const [chine, setchine] = useState(true);
  const [periodicityPref, setperiodicityPref] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
  };

  const updateHandler = () => {
    setisUpdate(true);
    
  };

  const foodOption2 = (event) => {
    setadvFoodPref(event.target.value);
  };
  const foodOption3 = (event) => {
    setperiodicityPref(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      {!isUpdate && (
        <Grid container component="main"  sx={{ height: "100vh" }}>
        <Grid item xs={12} sm={12} md={12} component={Paper} elevation={6} sqaure>
          <Header value={searchInput} changeInput={handleChangedInput}/>
          <Box
            sx={{
              my: 1,
              mx: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Typography component="h2" variant="h5">
              Add account Details
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid container>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      margin="dense"
                      // padding="10px 10px 10px 10px"
                      required
                      fullWidth
                      id="House no."
                      label="House no."
                      name="House no."
                      value="2"
                      autoComplete="House no."
                      autoFocus
                    
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="Street Name"
                      label="Street Name"
                      name="Street Name"
                      value="Philip"
                      autoComplete="Street Name"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="City"
                      label="City"
                      name="City"
                      value="Waterloo"
                      autoComplete="City"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="Province"
                      label="Province"
                      name="Province"
                      value="Ontario"
                      autoComplete="Province"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="Country"
                      label="Country"
                      name="Country"
                      value="Canada"
                      autoComplete="Country"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      margin="dense"
                      required
                      fullWidth
                      id="Zip Code"
                      label="Zip Code"
                      name="Zip Code"
                      value="N2T2A1"
                      autoComplete="Zip Code"
                      autoFocus
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      margin="dense"
                      fullWidth
                      id="date"
                      label="Date of Birth"
                      type="date"
                      defaultValue=" "
                      // sx={{ width: 250 }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item>
                      <Typography variant="subtitle1">
                        Basic Food Options:
                      </Typography>
                    </Grid>
                    <Grid item>
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={veg}
                              onChange={() => {
                                veg === true ? setVeg(false) : setVeg(true);
                              }}
                              name="veg"
                            />
                          }
                          label="Veg"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={nonveg}
                              onChange={() => {
                                nonveg === true
                                  ? setNonVeg(false)
                                  : setNonVeg(true);
                              }}
                              name="veg"
                            />
                          }
                          label="Non Veg"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>
                  <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={4}>
                      <Typography variant="subtitle1">
                        Advanced Food Preference:
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={mexi}
                              onChange={() => {
                                mexi === true ? setmexi(false) : setmexi(true);
                              }}
                              name="Mexican"
                            />
                          }
                          label="Mexican"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={indi}
                              onChange={() => {
                                indi === true
                                  ? setindi(false)
                                  : setindi(true);
                              }}
                              name="Indian"
                            />
                          }
                          label="Indian"
                        />

                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={itali}
                              onChange={() => {
                                itali === true
                                  ? setitali(false)
                                  : setitali(true);
                              }}
                              name="Italian"
                            />
                          }
                          label="Italian"
                        />
                      </FormGroup>
                    </Grid>
                  </Grid>


                  <FormControl fullWidth margin="normal">
                    <InputLabel id="demo-simple-select-label">
                      Periodicity Preference
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={periodicityPref}
                      label="Periodicity Preference"
                      onChange={foodOption3}
                    >
                      <MenuItem value={6}>Daily</MenuItem>
                      <MenuItem value={7}>Weekly,Sunday</MenuItem>
                      <MenuItem value={8}>Weekly,Monday</MenuItem>
                      <MenuItem value={9}>Weekly,Tuesday</MenuItem>
                      <MenuItem value={10}>Weekly,Wednesday</MenuItem>
                      <MenuItem value={11}>Weekly,Thursday</MenuItem>
                      <MenuItem value={12}>Weekly,Friday</MenuItem>
                      <MenuItem value={13}>Weekly,Saturday</MenuItem>
                      <MenuItem value={14}>Weekly,Sunday</MenuItem>
                      <MenuItem value={15}>Weekend</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid container>
                  <Grid item xs>
                  {/* <Link to='/index.html/CustomerDashboard'> */}
                    <Button
                      type="submit"
                      variant="contained"
                      onClick={updateHandler}
                      align={"center"}
                    >
                      Update
                    </Button>
                    {/* </Link> */}
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        </Grid>
      )}

      {isUpdate && <CustomerDashboard/>}
    </ThemeProvider>
  );
}
