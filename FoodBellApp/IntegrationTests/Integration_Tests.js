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
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Image from "../images/foodBellLogo.jpg";
import LoginPage from "./loginPage";
import CustomerProfileSkipPage from "./CustomerProfileSkipPage";


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
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);

  const nameHandler=(event)=>{
    setName(event.target.value)
  }

  const mailHandler=(event)=>{
    setEmail(event.target.value)
  }

  const phoneHandler=(event)=>{
    setPhone(event.target.value)
  }

  const passwordHandler=(event)=>{
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(' ');
    setEmail(' ');
    setPhone(' ');
    setPassword(null);

    // const data = new FormData(event.currentTarget);
    // setName(data.get('name'));
    // setEmail(data.get('email'));
    // setPhone(data.get('phone'));
    // setPassword(data.get('password'));

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


  const createHTTPGetContent = () => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(payload),
    };

    return options;
  }

  const createHTTPPostContent = (payload) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    return options;
  }

  function intToDay (value) {
    if (value == 0) {
      return "Sunday";
    } else if (value == 1) {
      return "Monday";
    } else if (value == 2) {
      return "Tuesday";
    } else if (value == 3) {
      return "Wednesday";
    } else if (value == 4) {
      return "Thursday";
    } else if (value == 5) {
      return "Friday";
    } else if (value == 6) {
      return "Saturday";
    }

    return "null";
  }


  const SignUpHandler = () => {
    const urlInitial = "http://localhost:8090";
    var countTestsPassed = 0;
    var countTestsFailed = 0;

    var total = 0;
    const NO_OF_TEST_CASES = 111;

    /* ---------------------------------------------------------------- */
    /*                Integration Tests - Account Service
    /* ---------------------------------------------------------------- */
    // Test Add Account functionality
    function testAddAccount () {
      /* Add Account Positive 1 */
      var payload1 = {
        "email": "udityalaad123@_test_gmail.com",
        "phone": "+15197299026",
        "password": "password1"
      };

      fetchData(urlInitial + "/authentication/addAccount", createHTTPPostContent(payload1)).then(
        (result1) => {
          console.assert(result1 == true);

          if (result1 == true) {
            console.log('Test Passed - Add Account Positive 1');
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            };


            /* Add Account Negative 1 */
            var payload2 = {
              email: "udityalaad123@_test_gmail.com",
              phone: "+15197299026",
              password: "password1"
            };

            fetchData(urlInitial + "/authentication/addAccount", createHTTPPostContent(payload2)).then(
              (result2) => {
                console.assert(JSON.parse(JSON.stringify(result2)).error == true);

                if (JSON.parse(JSON.stringify(result2)).error == true) {
                  console.log('Test Passed - Add Account Negative 1');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log("****************************************");
              console.log("             Test Results               ");
              console.log("****************************************");
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
              console.log("****************************************");
            }

                } else {
                  console.log('Test Failed - Add Account Negative 1');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

                  total = countTestsPassed + countTestsFailed;
                  if (total === NO_OF_TEST_CASES) {
                    console.log("Total Test Cases: " +  NO_OF_TEST_CASES);
                    console.log("Passed Test Cases: " +  countTestsPassed);
                    console.log("Failed Test Cases: " +  countTestsFailed);
                  }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Account Positive 1');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }

    

    // Test 'Authenticate Account By Email' functionality
    function testAuthenticateAccountByEmail () {
      /* Add Account To Check Against - Positive 0 */
      var payload0 = {
        "email": "vipinlaad_Demo@_test_gmail.com",
        "phone": "+919673599997",
        "password": "password2"
      };

      fetchData(urlInitial + "/authentication/addAccount", createHTTPPostContent(payload0)).then(
        (result0) => {
          console.assert(result0 == true);

          if (result0 == true) {
            console.log('Test Passed - Add Account To Check Against - Positive 0');
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            };

            /* AuthenticateAccountByEmail Positive 1 */
            var email1 = payload0.email;
            var password1 = payload0.password;

            fetchData(urlInitial + "/authentication/authenticateAccountByEmail/" + email1 + "/" + password1, createHTTPGetContent()).then(
              (result1) => {
                console.assert(result1 == true);

                if (result1 == true) {
                  console.log('Test Passed - AuthenticateAccountByEmail 1');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            };

                } else {
                  console.log('Test Failed - AuthenticateAccountByEmail Positive 1');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

            /* AuthenticateAccountByEmail Negative 1 */
            var email2 = payload0.email;
            var password2 = "test2Password";

            fetchData(urlInitial + "/authentication/authenticateAccountByEmail/" + email2 + "/" + password2, createHTTPGetContent()).then(
              (result2) => {
                console.assert(result2 == false);

                if (result2 == false) {
                  console.log('Test Passed - AuthenticateAccountByEmail Negative 1');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                } else {
                  console.log('Test Failed - AuthenticateAccountByEmail Negative 1');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Account To Check Against - Positive 0');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }



    // Test 'Authenticate Account By Phone' functionality
    function testAuthenticateAccountByPhone () {
      /* Add Account To Check Against - Positive 0 */
      var payload0 = {
        "email": "account3_Demo@_test_gmail.com",
        "phone": "+910101010101",
        "password": "password3"
      };

      fetchData(urlInitial + "/authentication/addAccount", createHTTPPostContent(payload0)).then(
        (result0) => {
          console.assert(result0 == true);

          if (result0 == true) {
            console.log('Test Passed - Add Account To Check Against - Positive 0');
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            };

            /* AuthenticateAccountByPhone Positive 1 */
            var phone1 = payload0.phone;
            var password1 = payload0.password;

            fetchData(urlInitial + "/authentication/authenticateAccountByPhone/" + phone1 + "/" + password1, createHTTPGetContent()).then(
              (result1) => {
                console.assert(result1 == true);

                if (result1 == true) {
                  console.log('Test Passed - AuthenticateAccountByPhone 1');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            };

                } else {
                  console.log('Test Failed - AuthenticateAccountByPhone Positive 1');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );


            /* AuthenticateAccountByPhone Negative 1 */
            var phone2 = payload0.phone;
            var password2 = "test2Password";

            fetchData(urlInitial + "/authentication/authenticateAccountByPhone/" + phone2 + "/" + password2, createHTTPGetContent()).then(
              (result2) => {
                console.assert(result2 == false);

                if (result2 == false) {
                  console.log('Test Passed - AuthenticateAccountByPhone Negative 1');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                } else {
                  console.log('Test Failed - AuthenticateAccountByPhone Negative 1');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Account To Check Against - Positive 0');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }
    /* ---------------------------------------------------------------- */
    /* ---------------------------------------------------------------- */




    /* ---------------------------------------------------------------- */
    /*          Integration Tests - Customer Service
    /* ---------------------------------------------------------------- */
    // Test Add Customer functionality
    function testAddCustomer_and_updateCustomer () {
      /* Add Customer Positive 1 */
      var payload1 = {
        "customerName": "Uditya",
        "customerEmail": "udityalaad123@_test_gmail.com",
        "customerPhone": "+15197299026",
        "address": {
          "propertyNo" : "1",
          "streetName" : "Street 1",
          "city" : "Waterloo",
          "province" : "ON",
          "country" : "CA",
          "zipCode" : "N2J 4L4"
        },
        "customerDOB": "1997-08-08",
        "foodPreference": "Non-veg",
        "advancedFoodPreference": "Indian",
        "periodicityPreference": "Daily"
      };


      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload1)).then(
        (result1) => {
          console.assert(JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail);

          if (JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail) {
            console.log('Test Passed - Add Customer Positive 1');
            var customerID1 = JSON.parse(JSON.stringify(result1)).customerId;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


            /* Update Customer Positive 1 */
            var payload2 = {
              "customerId": customerID1,
              "customerName": "Uditya - Update",
              "customerEmail": "udityalaad123@_test_gmail.com",
              "customerPhone": "+15197299026",
              "address": {
                "addressId": "5",
                "propertyNo" : "1",
                "streetName" : "Street 1",
                "city" : "Waterloo",
                "province" : "ON",
                "country" : "CA",
                "zipCode" : "N2J 4L4"
              },
              "customerDOB": "1997-08-08",
              "foodPreference": "Non-veg",
              "advancedFoodPreference": "Indian",
              "periodicityPreference": "Daily"
            };

            fetchData(urlInitial + "/customers/updateCustomer", createHTTPPostContent(payload2)).then(
              (result2) => {
                console.assert(JSON.parse(JSON.stringify(result2)).customerName == JSON.parse(JSON.stringify(payload2)).customerName);

                if (JSON.parse(JSON.stringify(result2)).customerName == JSON.parse(JSON.stringify(payload2)).customerName) {
                  console.log('Test Passed - Update Customer Positive 1');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                } else {
                  console.log('Test Failed - Update Customer Positive 1');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );


            /* Add Customer Negative 1 */
            var payload3 = {
              "customerName": "Uditya",
              "customerEmail": "udityalaad123@_test_gmail.com",
              "customerPhone": "+15197299026",
              "address": {
                "propertyNo" : "1",
                "streetName" : "Street 1",
                "city" : "Waterloo",
                "province" : "ON",
                "country" : "CA",
                "zipCode" : "N2J 4L4"
              },
              "customerDOB": "1997-08-08",
              "foodPreference": "Non-veg",
              "advancedFoodPreference": "Indian",
              "periodicityPreference": "Daily"
            };

            fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload3)).then(
              (result3) => {
                console.assert(JSON.parse(JSON.stringify(result3)).error == true);

                if (JSON.parse(JSON.stringify(result3)).error == true) {
                  console.log('Test Passed - Add Customer Negative 1');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                } else {
                  console.log('Test Failed - Add Customer Negative 1');

                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer Positive 1');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }


    // Test 'Get Customer' functionality
    function testGetCustomer () {
       /* Add Customer Positive 0 */
       var payload0 = {
        "customerName": "Vipin",
        "customerEmail": "vipinlaad_Demo@_test_gmail.com",
        "customerPhone": "+919673599997",
        "address": {
          "city" : "Toronto",
          "province" : "ON",
          "country" : "CA"
        },
        "customerDOB": "2002-11-17",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Italian",
        "periodicityPreference": "Weekly,Monday"
      };
      

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0)).then(
        (result0) => {
          console.assert(JSON.parse(JSON.stringify(result0)).customerEmail == JSON.parse(JSON.stringify(payload0)).customerEmail);

          if (JSON.parse(JSON.stringify(result0)).customerEmail == JSON.parse(JSON.stringify(payload0)).customerEmail) {
            console.log('Test Passed - Add Customer Positive 0');
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
            

            /* GetCustomer Positive 1 */
            var customerId = payload0.customerId;

            fetchData(urlInitial + "/customers/getCustomer/" + customerId , createHTTPGetContent()).then(
              (result1) => {
                console.assert(JSON.parse(JSON.stringify(result1)).customerId == customerId);

                if (JSON.parse(JSON.stringify(result1)).customerId == customerId) {
                  console.log('Test Passed - GetCustomer 1');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            };

                } else {
                  console.log('Test Failed - GetCustomer Positive 1');
                  
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer Positive 0');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }


    // Test 'Get All Customers' functionality
    function testGetAllCustomers () {
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer 3",
        "customerEmail": "customer3_Demo@_test_gmail.com",
        "customerPhone": "+911111111110",
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
     

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
       (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
            

            /* Add Customer to check against Positive 0_b */
            var payload0_b = {
              "customerName": "Customer 4",
              "customerEmail": "customer4_Demo@_test_gmail.com",
              "customerPhone": "+911111211110",
              "address": {
                "city" : "Toronto",
                "province" : "ON",
                "country" : "CA"
              },
              "customerDOB": "2005-02-07",
              "foodPreference": "Veg",
              "advancedFoodPreference": "Japanese",
              "periodicityPreference": "Weekly,Friday"
            };

            fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).customerEmail == JSON.parse(JSON.stringify(payload0_b)).customerEmail);

                if (JSON.parse(JSON.stringify(result0_b)).customerEmail == JSON.parse(JSON.stringify(payload0_b)).customerEmail) {
                  console.log('Test Passed - Add Customer to check against Positive 0b');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                  

                  /* GetAllCustomers Positive 1 */
                  // var customerId_a = payload0_a.customerId;
                  // var customerId_b = payload0_b.customerId;

                  fetchData(urlInitial + "/customers/getAllCustomers", createHTTPGetContent()).then(
                    (result1) => {
                      var resLength = parseInt(result1.length);

                      console.assert(resLength >= 2);

                      if (resLength >= 2) {
                        // console.assert(JSON.parse(JSON.stringify(result1[resLength - 1])).customerId != null
                        //     && JSON.parse(JSON.stringify(result1[resLength - 2])).customerId != null);

                        // if (JSON.parse(JSON.stringify(result1[resLength - 1])).customerId != null
                        //     && JSON.parse(JSON.stringify(result1[resLength - 2])).customerId != null) {
                          console.log('Test Passed - GetAllCustomers Positive 1');
                          countTestsPassed++;
                          console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            };

                        // } else {
                        //   console.log('Test Failed - GetAllCustomers Positive 1');
                        //   countTestsFailed++;
                        //   console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                        // }

                      } else {
                        console.log('Test Failed - GetAllCustomers Positive 1');
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );

                } else {
                  console.log('Test Failed - Add Customer to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }


    // Test 'Get Customer By Email' functionality
    function testGetCustomerByEmail () {
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer 5",
        "customerEmail": "customer5_Demo@_test_gmail.com",
        "customerPhone": "+911111311110",
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
     

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
       (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

            /* GetCustomerByEmail */
            var customerEmail0_a = result0_a.customerEmail;

            fetchData(urlInitial + "/customers/getCustomerByEmail/" + customerEmail0_a, createHTTPGetContent()).then(
              (result1) => {
                console.assert(JSON.parse(JSON.stringify(result1)).customerId == JSON.parse(JSON.stringify(result0_a)).customerId
                    && JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(result0_a)).customerEmail);

                if (JSON.parse(JSON.stringify(result1)).customerId == JSON.parse(JSON.stringify(result0_a)).customerId
                    && JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(result0_a)).customerEmail) {
                  console.log('Test Passed - GetCustomerByEmail Positive 1');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                } else {
                  console.log('Test Failed - GetCustomerByEmail Positive 1');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );
          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }
    /* ---------------------------------------------------------------- */
    /* ---------------------------------------------------------------- */




    /* ---------------------------------------------------------------- */
    /*          Integration Tests - Vendor Service
    /* ---------------------------------------------------------------- */
    // Test Add Vendor functionality
    function testAddVendor_and_updateVendor () {
      /* Add Vendor Positive 1 */
      var payload1 = {
        "vendorName": "Vendor 1",
        "vendorEmail": "vendor1_Dummy@_test_gmail.com",
        "vendorPhone": "+910000000001",
        "address": {
          "propertyNo" : "1",
          "streetName" : "Street 1",
          "city" : "Waterloo",
          "province" : "ON",
          "country" : "CA",
          "zipCode" : "N2J 4L4"
        },
        "vendorBasicFoodOptions": ["Veg", "Non-veg"],
        "vendorAdvancedFoodOptions": ["Indian", "Italian", "Chinese"],
        "vendorPeriodicityOptions": ["Weekly"],
        "vendorAvailability": ["Monday", "Tuesday"],
        "vendorOfferedSize": ["Small", "Standard", "Large"]
      };

      

      fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload1)).then(
        (result1) => {
          console.assert(JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);


          if (JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {
            console.log('Test Passed - Add Vendor Positive 1');
            var vendorID1 = JSON.parse(JSON.stringify(result1)).vendorId;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


            /* Update Vendor Positive 1 */
            var payload2 = {
              "vendorId": vendorID1,
              "vendorName": "Vendor 1 - Update",
              "vendorEmail": "vendor1_Dummy@_test_gmail.com",
              "vendorPhone": "+910000000001",
              "address": {
                "addresId": "10",
                "propertyNo" : "1",
                "streetName" : "Street 1",
                "city" : "Waterloo",
                "province" : "ON",
                "country" : "CA",
                "zipCode" : "N2J 4L4"
              },
              "vendorBasicFoodOptions": ["Veg", "Non-veg"],
              "vendorAdvancedFoodOptions": ["Indian", "Italian", "Chinese"],
              "vendorPeriodicityOptions": ["Weekly"],
              "vendorAvailability": ["Monday", "Tuesday"],
              "vendorOfferedSize": ["Small", "Large"]
            };

            fetchData(urlInitial + "/vendors/updateVendor", createHTTPPostContent(payload2)).then(
              (result2) => {
                console.assert(JSON.parse(JSON.stringify(result2)).vendorName == JSON.parse(JSON.stringify(payload2)).vendorName);

                if (JSON.parse(JSON.stringify(result2)).vendorName == JSON.parse(JSON.stringify(payload2)).vendorName) {
                  console.log('Test Passed - Update Vendor Positive 1');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                } else {
                  console.log('Test Failed - Update Vendor Positive 1');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );


            /* Add Vendor Negative 1 */
            var payload3 = {
              "vendorName": "Vendor 1",
              "vendorEmail": "vendor1_Dummy@_test_gmail.com",
              "vendorPhone": "+910000000001",
              "address": {
                "propertyNo" : "1",
                "streetName" : "Street 1",
                "city" : "Waterloo",
                "province" : "ON",
                "country" : "CA",
                "zipCode" : "N2J 4L4"
              },
              "vendorBasicFoodOptions": ["Veg", "Non-veg"],
              "vendorAdvancedFoodOptions": ["Indian", "Italian", "Chinese"],
              "vendorPeriodicityOptions": ["Weekly"],
              "vendorAvailability": ["Monday", "Tuesday"],
              "vendorOfferedSize": ["Small", "Large"]
            };

            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload3)).then(
              (result3) => {
                console.assert(JSON.parse(JSON.stringify(result3)).error == true);

                if (JSON.parse(JSON.stringify(result3)).error == true) {
                  console.log('Test Passed - Add Vendor Negative 1');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                } else {
                  console.log('Test Failed - Add Vendor Negative 1');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Vendor Positive 1');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }


    // Test 'Get Vendor' functionality
    function testGetVendor () {
      /* Add Vendor to check against Positive 0 */
      var payload0 = {
        "vendorName": "Vendor 2",
        "vendorEmail": "vendor2_Dummy@_test_gmail.com",
        "vendorPhone": "+910000000002",
        "address": {
          "city" : "Kitchener",
          "province" : "ON",
          "country" : "CA"
        },
        "vendorBasicFoodOptions": ["Veg", "Non-veg"],
        "vendorAdvancedFoodOptions": ["Italian", "Indian"],
        "vendorPeriodicityOptions": ["Daily", "Weekly"],
        "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "vendorOfferedSize": ["Standard"]
      };
      

      fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0)).then(
        (result0) => {
          console.assert(JSON.parse(JSON.stringify(result0)).vendorEmail == JSON.parse(JSON.stringify(payload0)).vendorEmail);

          if (JSON.parse(JSON.stringify(result0)).vendorEmail == JSON.parse(JSON.stringify(payload0)).vendorEmail) {
            console.log('Test Passed - Add Vendor to check against Positive 0');
            var vendorId0 = JSON.parse(JSON.stringify(result0)).vendorId;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


            /* GetVendor Positive 1 */
            var vendorId = vendorId0;

            fetchData(urlInitial + "/vendors/getVendor/" + vendorId , createHTTPGetContent()).then(
              (result1) => {
                console.assert(JSON.parse(JSON.stringify(result1)).vendorId == vendorId);

                if (JSON.parse(JSON.stringify(result1)).vendorId == vendorId) {
                  console.log('Test Passed - GetVendor 1');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            };

                } else {
                  console.log('Test Failed - GetVendor Positive 1');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );
        

          } else {
            console.log('Test Failed - Add Vendor to check against Positive 0');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );          
    }


    
    // Test 'Get All Vendors' functionality
    function testGetAllVendors () {
      /* Add Vendor to check against Positive 0_a */
      var payload0_a = {
        "vendorName": "Vendor 3",
        "vendorEmail": "vendor3_Dummy@_test_gmail.com",
        "vendorPhone": "+910000000003",
        "vendorBasicFoodOptions": ["Veg"],
        "vendorAdvancedFoodOptions": ["Indian"],
        "vendorPeriodicityOptions": ["Daily"],
        "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "vendorOfferedSize": ["Standard", "Large"]
      };
      

      fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_a)).then(
        (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).vendorEmail == JSON.parse(JSON.stringify(payload0_a)).vendorEmail);

          if (JSON.parse(JSON.stringify(result0_a)).vendorEmail == JSON.parse(JSON.stringify(payload0_a)).vendorEmail) {
            console.log('Test Passed - Add Vendor to check against Positive 0_a');
            var vendorId0_a = JSON.parse(JSON.stringify(result0_a)).vendorId;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

            /* Add Vendor to check against Positive 0_b */
            var payload0_b = {
              "vendorName": "Vendor 4",
              "vendorEmail": "vendor4_Dummy@_test_gmail.com",
              "vendorPhone": "+910000000004",
              "vendorBasicFoodOptions": ["Veg"],
              "vendorAdvancedFoodOptions": ["Indian"],
              "vendorPeriodicityOptions": ["Daily"],
              "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "vendorOfferedSize": ["Standard", "Large"]
            };
            
      
            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail);

                if (JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail) {
                  console.log('Test Passed - Add Vendor to check against Positive 0_b');
                  var vendorId0_b = JSON.parse(JSON.stringify(result0_b)).vendorId;
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
      
      
                  /* GetVendor Positive 1 */
                  // var vendorId_a = vendorId0_a;
                  // var vendorId_b = vendorId0_b;
                  
                  fetchData(urlInitial + "/vendors/getAllVendors", createHTTPGetContent()).then(
                    (result1) => {
                      var resLength = parseInt(result1.length);

                      console.assert(resLength >= 2);


                      if (resLength >= 2) {
                        // if (JSON.parse(JSON.stringify(result1[resLength - 1])).vendorId != null
                        //     && JSON.parse(JSON.stringify(result1[resLength - 2])).vendorId != null) {
                          console.log('Test Passed - GetAllVendors Positive 1');
                          countTestsPassed++;
                          console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            };

                        // } else {
                        //   console.log('Test Failed - GetAllVendors Positive 1');
                        //   countTestsFailed++;
                        //   console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                        // }

                      } else {
                        console.log('Test Failed - GetAllVendors Positive 1');
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );
              
      
                } else {
                  console.log('Test Failed - Add Vendor to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );
          } else {
            console.log('Test Failed - Add Vendor to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );          
    }


    
    // Test 'Get Vendor By Email' functionality
    function testGetVendorByEmail () {
      /* Add Vendor to check against Positive 0_a */
      var payload0_a = {
        "vendorName": "Vendor 5",
        "vendorEmail": "vendor5_Dummy@_test_gmail.com",
        "vendorPhone": "+910000200001",
        "vendorBasicFoodOptions": ["Veg"],
        "vendorAdvancedFoodOptions": ["Chinese", "Indian"],
        "vendorPeriodicityOptions": ["Daily"],
        "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "vendorOfferedSize": ["Standard", "Large"]
      };
      

      fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_a)).then(
        (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).vendorEmail == JSON.parse(JSON.stringify(payload0_a)).vendorEmail);

          if (JSON.parse(JSON.stringify(result0_a)).vendorEmail == JSON.parse(JSON.stringify(payload0_a)).vendorEmail) {
            console.log('Test Passed - Add Vendor to check against Positive 0_a');
            var vendorId0_a = JSON.parse(JSON.stringify(result0_a)).vendorId;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

            /* GetVendorByEmail */
            var vendorEmail0_a = result0_a.vendorEmail;

            fetchData(urlInitial + "/vendors/getVendorByEmail/" + vendorEmail0_a, createHTTPGetContent()).then(
              (result1) => {
                console.assert(JSON.parse(JSON.stringify(result1)).vendorId == JSON.parse(JSON.stringify(result0_a)).vendorId
                    && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(result0_a)).vendorEmail);

                if (JSON.parse(JSON.stringify(result1)).vendorId == JSON.parse(JSON.stringify(result0_a)).vendorId
                    && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(result0_a)).vendorEmail) {
                  console.log('Test Passed - GetVendorByEmail Positive 1');
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                } else {
                  console.log('Test Failed - GetVendorByEmail Positive 1');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );
      
            
          } else {
            console.log('Test Failed - Add Vendor to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );          
    }
    /* ---------------------------------------------------------------- */
    /* ---------------------------------------------------------------- */




    /* ---------------------------------------------------------------- */
    /*          Integration Tests - User Profile Service
    /* ---------------------------------------------------------------- */
    // Test 'Get UserProfile By Email' functionality
    function testGetUserProfileByEmail () {
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer _user_profile_ 1",
        "customerEmail": "customer_userProfile_1_Demo@_test_gmail.com",
        "customerPhone": "+911555311111",
        "address": {
          "city" : "Kitchener",
          "province" : "ON",
          "country" : "CA"
        },
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
      

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
        (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            var customerEmail0_a = JSON.parse(JSON.stringify(result0_a)).customerEmail;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

            /* Add Vendor to check against Positive 0_b */
            var payload0_b = {
              "vendorName": "Vendor _user_profile_ 1",
              "vendorEmail": "vendor_userProfile_1_Demo@_test_gmail.com",
              "vendorPhone": "+911555311112",
              "address": {
                "city" : "Waterloo",
                "province" : "ON",
                "country" : "CA"
              },
              "vendorBasicFoodOptions": ["Veg"],
              "vendorAdvancedFoodOptions": ["Chinese", "Indian"],
              "vendorPeriodicityOptions": ["Daily"],
              "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "vendorOfferedSize": ["Standard", "Large"]
            };
            
      
            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail);

                if (JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail) {
                  console.log('Test Passed - Add Vendor to check against Positive 0_b');
                  var vendorEmail0_b = JSON.parse(JSON.stringify(result0_b)).vendorEmail;
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                  /* GetUserProfileByEmail - with Customer's Email */
                  fetchData(urlInitial + "/userProfiles/getUserProfileByEmail/" + customerEmail0_a, createHTTPGetContent()).then(
                    (result1) => {
                      console.assert(JSON.parse(JSON.stringify(result1)).profileType == "Customer"
                          && JSON.parse(JSON.stringify(result1)).profile.customerEmail == JSON.parse(JSON.stringify(result0_a)).customerEmail);

                      if (JSON.parse(JSON.stringify(result1)).profileType == "Customer"
                          && JSON.parse(JSON.stringify(result1)).profile.customerEmail == JSON.parse(JSON.stringify(result0_a)).customerEmail) {
                        console.log("Test Passed - GetUserProfileByEmail - with Customer's Email - Positive 1");
                        countTestsPassed++;
                        console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                      } else {
                        console.log("Test Failed - GetUserProfileByEmail - with Customer's Email - Positive 1");
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );


                  /* GetUserProfileByEmail - with Vendor's Email */
                  fetchData(urlInitial + "/userProfiles/getUserProfileByEmail/" + vendorEmail0_b, createHTTPGetContent()).then(
                    (result2) => {
                      console.assert(JSON.parse(JSON.stringify(result2)).profileType == "Vendor"
                          && JSON.parse(JSON.stringify(result2)).profile.vendorEmail == JSON.parse(JSON.stringify(result0_b)).vendorEmail);

                      if (JSON.parse(JSON.stringify(result2)).profileType == "Vendor"
                          && JSON.parse(JSON.stringify(result2)).profile.vendorEmail == JSON.parse(JSON.stringify(result0_b)).vendorEmail) {
                        console.log("Test Passed - GetUserProfileByEmail - with Vendor's Email - Positive 2");
                        countTestsPassed++;
                        console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                      } else {
                        console.log("Test Failed - GetUserProfileByEmail - with Vendor's Email - Positive 2");
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );



                  /* GetUserProfileByEmail - with Email that does not exist in either Customer/Vendor */
                  var testUserProfile_dummyEmail1 = "testUserProfile_dummyEmail1_@_test_@gmail.com";

                  fetchData(urlInitial + "/userProfiles/getUserProfileByEmail/" + testUserProfile_dummyEmail1, createHTTPGetContent()).then(
                    (result3) => {
                      console.assert(JSON.parse(JSON.stringify(result3)).error == true);
                      
                      if (JSON.parse(JSON.stringify(result3)).error == true) {
                        console.log('Test Passed - GetUserProfileByEmail - with Email that does not exist in either Customer/Vendor - Negative 1');
                        countTestsPassed++;
                        console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
      
                      } else {
                        console.log('Test Failed - GetUserProfileByEmail - with Email that does not exist in either Customer/Vendor - Negative 1');
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );
              
      
                } else {
                  console.log('Test Failed - Add Vendor to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );
          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );          
    }
    /* ---------------------------------------------------------------- */
    /* ---------------------------------------------------------------- */




    /* ---------------------------------------------------------------- */
    /*          Integration Tests - Subscription Service
    /* ---------------------------------------------------------------- */
    // Test Add Subscription functionality
    function testAddSubscription () {
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer _sub_ 3",
        "customerEmail": "customer_sub_3_Demo@_test_gmail.com",
        "customerPhone": "+911111221110",
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
     

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
       (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            var customerEmail0_a = JSON.parse(JSON.stringify(result0_a)).customerEmail;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
            

            /* Add Vendor to check against Positive 0_b */
            var payload0_b = {
              "vendorName": "Vendor _sub_ 3",
              "vendorEmail": "vendor_sub_3_Dummy@_test_gmail.com",
              "vendorPhone": "+910000220001",
              "vendorBasicFoodOptions": ["Veg"],
              "vendorAdvancedFoodOptions": ["Italian", "Indian"],
              "vendorPeriodicityOptions": ["Daily"],
              "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "vendorOfferedSize": ["Standard", "Large"]
            };
      
            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail);

                if (JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail) {
                  console.log('Test Passed - Add Vendor to check against Positive 0_b');
                  var vendorEmail0_b = JSON.parse(JSON.stringify(result0_b)).vendorEmail;
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
      
      
                  /* Add Subscription Positive 1 */
                  var payload1 = {
                    "vendorEmail": vendorEmail0_b,
                    "customerEmail": customerEmail0_a,
                    "startDate": "2020-10-01",
                    "basicFoodSelection": "Veg",
                    "advancedFoodSelection": "Indian",
                    "periodicity": "Weekly",
                    "availedDays": ["Monday"],
                    "mealSize": "Large",
                    "active": "true"
                  };

                  fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload1)).then(
                    (result1) => {
                      console.assert(JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                          && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);

                      if (JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                          && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {
                        console.log('Test Passed - Add Subscription Positive 1');
                        countTestsPassed++;
                        console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                        /* Add Subscription Negative 1 */
                        var payload2 = {
                          "vendorEmail": 2128,
                          "customerEmail": customerEmail0_a,
                          "startDate": "2020-10-01",
                          "basicFoodSelection": "Veg",
                          "advancedFoodSelection": "Indian",
                          "periodicity": "Weekly",
                          "availedDays": ["Monday"],
                          "mealSize": "Small",
                          "active": "true"
                        };

                        fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload2)).then(
                          (result2) => {
                            console.assert(JSON.parse(JSON.stringify(result2)).error == true);

                            if (JSON.parse(JSON.stringify(result2)).error == true) {
                              console.log('Test Passed - Add Subscription Negative 1');
                              countTestsPassed++;
                              console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                            } else {
                              console.log('Test Failed - Add Subscription Negative 1');
                              countTestsFailed++;
                              console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                            }
                          }
                        );

                        /* Add Subscription Negative 2 */
                        var payload3 = {
                          "vendorEmail": vendorEmail0_b,
                          "customerEmail": 1238,
                          "startDate": "2020-10-01",
                          "basicFoodSelection": "Veg",
                          "advancedFoodSelection": "Indian",
                          "periodicity": "Weekly",
                          "availedDays": ["Monday"],
                          "mealSize": "Small",
                          "active": "true"
                        };

                        fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload3)).then(
                          (result3) => {
                            console.assert(JSON.parse(JSON.stringify(result3)).error == true);

                            if (JSON.parse(JSON.stringify(result3)).error == true) {
                              console.log('Test Passed - Add Subscription Negative 2');

                              countTestsPassed++;
                              console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                            } else {
                              console.log('Test Failed - Add Subscription Negative 2');
                              countTestsFailed++;
                              console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                            }
                          }
                        );

                      } else {
                        console.log('Test Failed - Add Subscription Positive 1');
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );
              
      
                } else {
                  console.log('Test Failed - Add Vendor to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }


    // Test 'Get Subscription' functionality
    function testGetSubscription () {
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer _sub_ 4",
        "customerEmail": "customer_sub_4_Demo@_test_gmail.com",
        "customerPhone": "+911111221114",
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
     

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
       (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            var customerEmail0_a = JSON.parse(JSON.stringify(result0_a)).customerEmail;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
            

            /* Add Vendor to check against Positive 0_b */
            var payload0_b = {
              "vendorName": "Vendor _sub_ 4",
              "vendorEmail": "vendor_sub_4_Dummy@_test_gmail.com",
              "vendorPhone": "+910000220004",
              "vendorBasicFoodOptions": ["Veg"],
              "vendorAdvancedFoodOptions": ["Chinese", "Indian"],
              "vendorPeriodicityOptions": ["Daily"],
              "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "vendorOfferedSize": ["Standard", "Large"]
            };
      
            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail);

                if (JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail) {
                  console.log('Test Passed - Add Vendor to check against Positive 0_b');
                  var vendorEmail0_b = JSON.parse(JSON.stringify(result0_b)).vendorEmail;
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
      
      
                  /* Add Subscription Positive 1 */
                  var payload1 = {
                    "vendorEmail": vendorEmail0_b,
                    "customerEmail": customerEmail0_a,
                    "startDate": "2021-07-25",
                    "basicFoodSelection": "Non-veg",
                    "advancedFoodSelection": "Italian",
                    "periodicity": "Weekly",
                    "availedDays": ["Wednesday"],
                    "mealSize": "Standard",
                    "active": "true"
                  };

                  fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload1)).then(
                    (result1) => {
                      console.assert(JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                          && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);

                      if (JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                          && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {
                        console.log('Test Passed - Add Subscription Positive 1');
                        var subscriptionId1 = JSON.parse(JSON.stringify(result1)).subscriptionId;
                        countTestsPassed++;
                        console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                        /* GetSubscription Positive 1 */
                        fetchData(urlInitial + "/subscriptions/getSubscription/" + subscriptionId1 , createHTTPGetContent()).then(
                          (result1) => {
                            console.assert(JSON.parse(JSON.stringify(result1)).subscriptionId == subscriptionId1);

                            if (JSON.parse(JSON.stringify(result1)).subscriptionId == subscriptionId1) {
                              console.log('Test Passed - GetSubscription Positive 1');
                              countTestsPassed++;
                              console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            };

                            } else {
                              console.log('Test Failed - GetSubscription Positive 1');
                              countTestsFailed++;
                              console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                            }
                          }
                        );

                      } else {
                        console.log('Test Failed - Add Subscription Positive 1');
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );
              
      
                } else {
                  console.log('Test Failed - Add Vendor to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }


    

    // Test 'Get Subscription By customerEmail' functionality
    function testGetSubscriptionByCustomerEmail () {
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer _sub_ 5",
        "customerEmail": "customer_sub_5_Demo@_test_gmail.com",
        "customerPhone": "+911111221115",
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
     

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
       (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            var customerEmail0_a = JSON.parse(JSON.stringify(result0_a)).customerEmail;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
            

            /* Add Vendor to check against Positive 0_b */
            var payload0_b = {
              "vendorName": "Vendor _sub_ 5",
              "vendorEmail": "vendor_sub_5_Dummy@_test_gmail.com",
              "vendorPhone": "+910000220005",
              "vendorBasicFoodOptions": ["Veg"],
              "vendorAdvancedFoodOptions": ["Italian", "Indian"],
              "vendorPeriodicityOptions": ["Daily"],
              "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "vendorOfferedSize": ["Standard", "Large"]
            };
      
            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail);

                if (JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail) {
                  console.log('Test Passed - Add Vendor to check against Positive 0_b');
                  var vendorEmail0_b = JSON.parse(JSON.stringify(result0_b)).vendorEmail;
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

      
                  // /* Add Customer to check against Positive 0_c */
                  // var payload0_c = {
                  //   "customerName": "Customer _sub_ 6",
                  //   "customerEmail": "customer_sub_6_Demo@_test_gmail.com",
                  //   "customerPhone": "+911111221116",
                  //   "customerDOB": "2005-02-07",
                  //   "foodPreference": "Veg",
                  //   "advancedFoodPreference": "Japanese",
                  //   "periodicityPreference": "Weekly,Friday"
                  // };
                

                  // fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_c)).then(
                  // (result0_c) => {
                  //     console.assert(JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail);

                  //     if (JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail) {
                  //       console.log('Test Passed - Add Customer to check against Positive 0_c');
                  //       var customerEmail0_c = JSON.parse(JSON.stringify(result0_c)).customerEmail;
                  //       countTestsPassed++;
                  //       console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                        

                        /* Add Vendor to check against Positive 0_d */
                        var payload0_d = {
                          "vendorName": "Vendor _sub_ 6",
                          "vendorEmail": "vendor_sub_6_Dummy@_test_gmail.com",
                          "vendorPhone": "+910000220006",
                          "vendorBasicFoodOptions": ["Veg"],
                          "vendorAdvancedFoodOptions": ["Italian", "Indian"],
                          "vendorPeriodicityOptions": ["Daily"],
                          "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                          "vendorOfferedSize": ["Standard", "Large"]
                        };
                  
                        fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_d)).then(
                          (result0_d) => {
                            console.assert(JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail);

                            if (JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail) {
                              console.log('Test Passed - Add Vendor to check against Positive 0_d');
                              var vendorEmail0_d = JSON.parse(JSON.stringify(result0_d)).vendorEmail;
                              countTestsPassed++;
                              console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                  
                  
                              /* Add Subscription Positive 1 */
                              var payload1 = {
                                "vendorEmail": vendorEmail0_b,
                                "customerEmail": customerEmail0_a,
                                "startDate": "2021-11-12",
                                "basicFoodSelection": "Non-veg",
                                "advancedFoodSelection": "Italian",
                                "periodicity": "Weekly",
                                "availedDays": ["Tuesday"],
                                "mealSize": "Small",
                                "active": "false"
                              };

                              fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload1)).then(
                                (result1) => {
                                  console.assert(JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);

                                  if (JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {
                                    console.log('Test Passed - Add Subscription Positive 1');
                                    var subscriptionId1 = JSON.parse(JSON.stringify(result1)).subscriptionId;

                                    countTestsPassed++;
                                    console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                                    /* Add Subscription Positive 2 */
                                    var payload2 = {
                                      "vendorEmail": vendorEmail0_d,
                                      "customerEmail": customerEmail0_a,
                                        "startDate": "2020-04-17",
                                        "basicFoodSelection": "Veg",
                                        "advancedFoodSelection": "Indian",
                                        "periodicity": "Daily",
                                        "availedDays": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                        "mealSize": "Large",
                                        "active": "false",
                                        "lastDeliveryDate": null
                                      };

                                    fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload2)).then(
                                      (result2) => {
                                        console.assert(JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                            && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail);

                                        if (JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                            && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail) {
                                          console.log('Test Passed - Add Subscription Positive 2');
                                          var subscriptionId2 = JSON.parse(JSON.stringify(result2)).subscriptionId;

                                          countTestsPassed++;
                                          console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                                          /* GetSubscriptionByCustomerEmail Positive 1 */
                                          fetchData(urlInitial + "/subscriptions/getSubscriptionByCustomerEmail/" + customerEmail0_a , createHTTPGetContent()).then(
                                            (resultMain1) => {
                                              var resMainLength = parseInt(resultMain1.length);

                                              console.assert(resMainLength >= 2);

                                              if (resMainLength >= 2) {
                                                // console.assert(JSON.parse(JSON.stringify(resultMain1[resMainLength - 1])).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 1])).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail
                                                    
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 2])).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 2])).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);
                                                // if (JSON.parse(JSON.stringify(resultMain1[resMainLength - 1])).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 1])).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail
                                                    
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 2])).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 2])).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {

                                                  console.log('Test Passed - GetSubscriptionByCustomerEmail Positive 1');
                                                  countTestsPassed++;
                                                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            };
  
                                                // } else {
                                                //   console.log('Test Failed - GetSubscriptionByCustomerEmail Positive 1');
                                                //   countTestsFailed++;
                                                //   console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                // }

                                              } else {
                                                console.log('Test Failed - GetSubscriptionByCustomerEmail Positive 1');
                                                countTestsFailed++;
                                                console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                              }
                                            }
                                          );

                                        } else {
                                          console.log('Test Failed - Add Subscription Positive 2');
                                          countTestsFailed++;
                                          console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                        }
                                      }
                                    );

                                  } else {
                                    console.log('Test Failed - Add Subscription Positive 1');
                                    countTestsFailed++;
                                    console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                  }
                                }
                              );
                  
                            } else {
                              console.log('Test Failed - Add Vendor to check against Positive 0_d');
                              countTestsFailed++;
                              console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                            }
                          }
                        );

                  //     } else {
                  //       console.log('Test Failed - Add Customer to check against Positive 0_c');
                  //       countTestsFailed++;
                  //       console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                  //     }
                  //   }
                  // );
      
                } else {
                  console.log('Test Failed - Add Vendor to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }


    // Test 'Get Subscription By vendorEmail' functionality
    function testGetSubscriptionByVendorEmail () {
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer _sub_ 7",
        "customerEmail": "customer_sub_7_Demo@_test_gmail.com",
        "customerPhone": "+911111221117",
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
     

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
       (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            var customerEmail0_a = JSON.parse(JSON.stringify(result0_a)).customerEmail;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
            

            /* Add Vendor to check against Positive 0_b */
            var payload0_b = {
              "vendorName": "Vendor _sub_ 7",
              "vendorEmail": "vendor_sub_7_Dummy@_test_gmail.com",
              "vendorPhone": "+910000220007",
              "vendorBasicFoodOptions": ["Veg"],
              "vendorAdvancedFoodOptions": ["Chinese", "Indian"],
              "vendorPeriodicityOptions": ["Daily"],
              "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "vendorOfferedSize": ["Standard", "Large"]
            };
      
            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail);

                if (JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail) {
                  console.log('Test Passed - Add Vendor to check against Positive 0_b');
                  var vendorEmail0_b = JSON.parse(JSON.stringify(result0_b)).vendorEmail;
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

      
                  /* Add Customer to check against Positive 0_c */
                  var payload0_c = {
                    "customerName": "Customer _sub_ 8",
                    "customerEmail": "customer_sub_8_Demo@_test_gmail.com",
                    "customerPhone": "+911111221118",
                    "customerDOB": "2005-02-07",
                    "foodPreference": "Veg",
                    "advancedFoodPreference": "Japanese",
                    "periodicityPreference": "Weekly,Friday"
                  };
                

                  fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_c)).then(
                  (result0_c) => {
                      console.assert(JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail);

                      if (JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail) {
                        console.log('Test Passed - Add Customer to check against Positive 0_c');
                        var customerEmail0_c = JSON.parse(JSON.stringify(result0_c)).customerEmail;
                        countTestsPassed++;
                        console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                        

                        // /* Add Vendor to check against Positive 0_d */
                        // var payload0_d = {
                        //   "vendorName": "Vendor _sub_ 8",
                        //   "vendorEmail": "vendor_sub_8_Dummy@_test_gmail.com",
                        //   "vendorPhone": "+910000220008",
                        //   "vendorBasicFoodOptions": ["Veg"],
                        //   "vendorAdvancedFoodOptions": ["Chinese", "Indian"],
                        //   "vendorPeriodicityOptions": ["Daily"],
                        //   "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                        //   "vendorOfferedSize": ["Standard", "Large"]
                        // };
                  
                        // fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_d)).then(
                        //   (result0_d) => {
                        //     console.assert(JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail);
                  
                        //     if (JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail) {
                        //       console.log('Test Passed - Add Vendor to check against Positive 0_d');
                        //       var vendorEmail0_d = JSON.parse(JSON.stringify(result0_d)).vendorEmail;
                        //       countTestsPassed++;
                        //       console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                  
                  
                              /* Add Subscription Positive 1 */
                              var payload1 = {
                                "vendorEmail": vendorEmail0_b,
                                "customerEmail": customerEmail0_a,
                                "startDate": "2021-11-12",
                                "basicFoodSelection": "Non-veg",
                                "advancedFoodSelection": "Italian",
                                "periodicity": "Weekly",
                                "availedDays": ["Tuesday"],
                                "mealSize": "Small",
                                "active": "false",
                                "lastDeliveryDate": null
                              };

                              fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload1)).then(
                                (result1) => {
                                  console.assert(JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);

                                  if (JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {
                                    console.log('Test Passed - Add Subscription Positive 1');
                                    var subscriptionId1 = JSON.parse(JSON.stringify(result1)).subscriptionId;

                                    countTestsPassed++;
                                    console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                                    /* Add Subscription Positive 2 */
                                    var payload2 = {
                                      "vendorEmail": vendorEmail0_b,
                                      "customerEmail": customerEmail0_c,
                                        "startDate": "2020-04-17",
                                        "basicFoodSelection": "Veg",
                                        "advancedFoodSelection": "Indian",
                                        "periodicity": "Daily",
                                        "availedDays": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                        "mealSize": "Large",
                                        "active": "false"
                                      };

                                    fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload2)).then(
                                      (result2) => {
                                        console.assert(JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                            && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail);

                                        if (JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                            && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail) {
                                          console.log('Test Passed - Add Subscription Positive 2');
                                          var subscriptionId2 = JSON.parse(JSON.stringify(result2)).subscriptionId;

                                          countTestsPassed++;
                                          console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                                          /* GetSubscriptionByVendorEmail Positive 1 */
                                          fetchData(urlInitial + "/subscriptions/getSubscriptionByVendorEmail/" + vendorEmail0_b , createHTTPGetContent()).then(
                                            (resultMain1) => {
                                              var resMainLength = parseInt(resultMain1.length);

                                              console.assert(resMainLength >= 2);
                                              
                                              if (resMainLength >= 2) {
                                                // console.assert(JSON.parse(JSON.stringify(resultMain1[resMainLength - 1])).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 1])).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail
                                                    
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 2])).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 2])).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);

                                                // if (JSON.parse(JSON.stringify(resultMain1[resMainLength - 1])).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 1])).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail
                                                    
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 2])).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 2])).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {

                                                  console.log('Test Passed - testGetSubscriptionByVendorEmail Positive 1');
                                                  countTestsPassed++;
                                                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            };
  
                                                // } else {
                                                //   console.log('Test Failed - testGetSubscriptionByVendorEmail Positive 1');
                                                //   countTestsFailed++;
                                                //   console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                // }

                                              } else {
                                                console.log('Test Failed - testGetSubscriptionByVendorEmail Positive 1');
                                                countTestsFailed++;
                                                console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                              }
                                            }
                                          );

                                        } else {
                                          console.log('Test Failed - Add Subscription Positive 2');
                                          
                                          countTestsFailed++;
                                          console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                        }
                                      }
                                    );

                                  } else {
                                    console.log('Test Failed - Add Subscription Positive 1');
                                    countTestsFailed++;
                                    console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                  }
                                }
                              );
                  
                        //     } else {
                        //       console.log('Test Failed - Add Vendor to check against Positive 0_d');
                        //       countTestsFailed++;
                        //       console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                        //     }
                        //   }
                        // );

                      } else {
                        console.log('Test Failed - Add Customer to check against Positive 0_c');
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );
              
      
                } else {
                  console.log('Test Failed - Add Vendor to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }



    // Test 'Get All Subscriptions' functionality
    function testGetAllSubscriptions () {
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer _sub_ 9",
        "customerEmail": "customer_sub_9_Demo@_test_gmail.com",
        "customerPhone": "+911111221119",
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
     

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
       (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            var customerEmail0_a = JSON.parse(JSON.stringify(result0_a)).customerEmail;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
            

            /* Add Vendor to check against Positive 0_b */
            var payload0_b = {
              "vendorName": "Vendor _sub_ 9",
              "vendorEmail": "vendor_sub_9_Dummy@_test_gmail.com",
              "vendorPhone": "+910000220009",
              "vendorBasicFoodOptions": ["Veg"],
              "vendorAdvancedFoodOptions": ["Italian", "Indian"],
              "vendorPeriodicityOptions": ["Daily"],
              "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "vendorOfferedSize": ["Standard", "Large"]
            };
      
            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail);

                if (JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail) {
                  console.log('Test Passed - Add Vendor to check against Positive 0_b');
                  var vendorEmail0_b = JSON.parse(JSON.stringify(result0_b)).vendorEmail;
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

      
                  /* Add Customer to check against Positive 0_c */
                  var payload0_c = {
                    "customerName": "Customer _sub_ 10",
                    "customerEmail": "customer_sub_10_Demo@_test_gmail.com",
                    "customerPhone": "+911111221120",
                    "customerDOB": "2005-02-07",
                    "foodPreference": "Veg",
                    "advancedFoodPreference": "Japanese",
                    "periodicityPreference": "Weekly,Friday"
                  };
                

                  fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_c)).then(
                  (result0_c) => {
                      console.assert(JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail);

                      if (JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail) {
                        console.log('Test Passed - Add Customer to check against Positive 0_c');
                        var customerEmail0_c = JSON.parse(JSON.stringify(result0_c)).customerEmail;
                        countTestsPassed++;
                        console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                        

                        /* Add Vendor to check against Positive 0_d */
                        var payload0_d = {
                          "vendorName": "Vendor _sub_ 8",
                          "vendorEmail": "vendor_sub_8_Dummy@_test_gmail.com",
                          "vendorPhone": "+910000220008",
                          "vendorBasicFoodOptions": ["Veg"],
                          "vendorAdvancedFoodOptions": ["Italian", "Indian"],
                          "vendorPeriodicityOptions": ["Daily"],
                          "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                          "vendorOfferedSize": ["Standard", "Large"]
                        };
                  
                        fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_d)).then(
                          (result0_d) => {
                            console.assert(JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail);

                            if (JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail) {
                              console.log('Test Passed - Add Vendor to check against Positive 0_d');
                              var vendorEmail0_d = JSON.parse(JSON.stringify(result0_d)).vendorEmail;
                              countTestsPassed++;
                              console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                  
                  
                              /* Add Subscription Positive 1 */
                              var payload1 = {
                                "vendorEmail": vendorEmail0_b,
                                "customerEmail": customerEmail0_a,
                                "startDate": "2021-11-12",
                                "basicFoodSelection": "Non-veg",
                                "advancedFoodSelection": "Italian",
                                "periodicity": "Weekly",
                                "availedDays": ["Tuesday"],
                                "mealSize": "Standard",
                                "active": "false"
                              };

                              fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload1)).then(
                                (result1) => {
                                  console.assert(JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);

                                  if (JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {
                                    console.log('Test Passed - Add Subscription Positive 1');
                                    var subscriptionId1 = JSON.parse(JSON.stringify(result1)).subscriptionId;

                                    countTestsPassed++;
                                    console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                                    /* Add Subscription Positive 2 */
                                    var payload2 = {
                                      "vendorEmail": vendorEmail0_d,
                                      "customerEmail": customerEmail0_c,
                                        "startDate": "2020-04-17",
                                        "basicFoodSelection": "Veg",
                                        "advancedFoodSelection": "Chinese",
                                        "periodicity": "Daily",
                                        "availedDays": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                        "mealSize": "Large",
                                        "active": "false"
                                      };

                                    fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload2)).then(
                                      (result2) => {
                                        console.assert(JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                        && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail);

                                        if (JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                            && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail) {
                                          console.log('Test Passed - Add Subscription Positive 2');
                                          var subscriptionId2 = JSON.parse(JSON.stringify(result2)).subscriptionId;
                                          countTestsPassed++;
                                          console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                                          /* GetAllSubscriptions Positive 1 */
                                          fetchData(urlInitial + "/subscriptions/getAllSubscriptions", createHTTPGetContent()).then(
                                            (resultMain1) => {
                                              var resMainLength = parseInt(resultMain1.length);

                                              console.assert(resMainLength >= 2);

                                              if (resMainLength >= 2) {
                                                // console.assert(JSON.parse(JSON.stringify(resultMain1[resMainLength - 1])).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 1])).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail
                                                    
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 2])).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 2])).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);

                                                // if (JSON.parse(JSON.stringify(resultMain1[resMainLength - 1])).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 1])).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail
                                                    
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 2])).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                                //     && JSON.parse(JSON.stringify(resultMain1[resMainLength - 2])).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {

                                                  console.log('Test Passed - testGetAllSubscriptions Positive 1');
                                                  countTestsPassed++;
                                                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            };
  
                                                // } else {
                                                //   console.log('Test Failed - testGetAllSubscriptions Positive 1');
                                                //   countTestsFailed++;
                                                //   console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                // }

                                              } else {
                                                console.log('Test Failed - testGetAllSubscriptions Positive 1');
                                                countTestsFailed++;
                                                console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                              }
                                            }
                                          );

                                        } else {
                                          console.log('Test Failed - Add Subscription Positive 2');
                                          countTestsFailed++;
                                          console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                        }
                                      }
                                    );

                                  } else {
                                    console.log('Test Failed - Add Subscription Positive 1');
                                    countTestsFailed++;
                                    console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                  }
                                }
                              );
                          
                  
                            } else {
                              console.log('Test Failed - Add Vendor to check against Positive 0_d');
                              countTestsFailed++;
                              console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                            }
                          }
                        );

                      } else {
                        console.log('Test Failed - Add Customer to check against Positive 0_c');
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );
              
      
                } else {
                  console.log('Test Failed - Add Vendor to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }


    // Test 'GetActiveSubscriptionByCustomerEmail' functionality
    function testGetActiveSubscriptionByCustomerEmail () {
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer _sub_ 11",
        "customerEmail": "customer_sub_11_Demo@_test_gmail.com",
        "customerPhone": "+911111231111",
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
     

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
       (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            var customerEmail0_a = JSON.parse(JSON.stringify(result0_a)).customerEmail;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
            

            /* Add Vendor to check against Positive 0_b */
            var payload0_b = {
              "vendorName": "Vendor _sub_ 12",
              "vendorEmail": "vendor_sub_12_Dummy@_test_gmail.com",
              "vendorPhone": "+910000220010",
              "vendorBasicFoodOptions": ["Veg"],
              "vendorAdvancedFoodOptions": ["Chinese", "Indian"],
              "vendorPeriodicityOptions": ["Daily"],
              "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "vendorOfferedSize": ["Standard", "Large"]
            };
      
            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail);

                if (JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail) {
                  console.log('Test Passed - Add Vendor to check against Positive 0_b');
                  var vendorEmail0_b = JSON.parse(JSON.stringify(result0_b)).vendorEmail;
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

      
                  /* Add Customer to check against Positive 0_c */
                  var payload0_c = {
                    "customerName": "Customer _sub_ 13",
                    "customerEmail": "customer_sub_13_Demo@_test_gmail.com",
                    "customerPhone": "+911111221121",
                    "customerDOB": "2005-02-07",
                    "foodPreference": "Veg",
                    "advancedFoodPreference": "Japanese",
                    "periodicityPreference": "Weekly,Friday"
                  };
                

                  fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_c)).then(
                  (result0_c) => {
                      console.assert(JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail);

                      if (JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail) {
                        console.log('Test Passed - Add Customer to check against Positive 0_c');
                        var customerEmail0_c = JSON.parse(JSON.stringify(result0_c)).customerEmail;
                        countTestsPassed++;
                        console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                        

                        /* Add Vendor to check against Positive 0_d */
                        var payload0_d = {
                          "vendorName": "Vendor _sub_ 14",
                          "vendorEmail": "vendor_sub_14_Dummy@_test_gmail.com",
                          "vendorPhone": "+910500220011",
                          "vendorBasicFoodOptions": ["Veg"],
                          "vendorAdvancedFoodOptions": ["Italian", "Indian"],
                          "vendorPeriodicityOptions": ["Daily"],
                          "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                          "vendorOfferedSize": ["Standard", "Large"]
                        };
                  
                        fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_d)).then(
                          (result0_d) => {
                            console.assert(JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail);

                            if (JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail) {
                              console.log('Test Passed - Add Vendor to check against Positive 0_d');
                              var vendorEmail0_d = JSON.parse(JSON.stringify(result0_d)).vendorEmail;
                              countTestsPassed++;
                              console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                  
                  
                              /* Add Subscription Positive 1 */
                              var payload1 = {
                                "vendorEmail": vendorEmail0_b,
                                "customerEmail": customerEmail0_a,
                                "startDate": "2021-11-12",
                                "basicFoodSelection": "Non-veg",
                                "advancedFoodSelection": "Italian",
                                "periodicity": "Weekly",
                                "availedDays": ["Tuesday"],
                                "mealSize": "Standard",
                                "active": "true"
                              };

                              fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload1)).then(
                                (result1) => {
                                  console.assert(JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);

                                  if (JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {
                                    console.log('Test Passed - Add Subscription Positive 1');
                                    var subscriptionId1 = JSON.parse(JSON.stringify(result1)).subscriptionId;

                                    countTestsPassed++;
                                    console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                                    /* Add Subscription Positive 2 */
                                    var payload2 = {
                                      "vendorEmail": vendorEmail0_d,
                                      "customerEmail": customerEmail0_a,
                                        "startDate": "2020-04-17",
                                        "basicFoodSelection": "Veg",
                                        "advancedFoodSelection": "Chinese",
                                        "periodicity": "Daily",
                                        "availedDays": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                        "mealSize": "Small",
                                        "active": "false"
                                      };

                                    fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload2)).then(
                                      (result2) => {
                                        console.assert(JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                        && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail);

                                        if (JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                            && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail) {
                                          console.log('Test Passed - Add Subscription Positive 2');
                                          var subscriptionId2 = JSON.parse(JSON.stringify(result2)).subscriptionId;
                                          countTestsPassed++;
                                          console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                                          /* GetActiveSubscriptionByCustomerEmail Positive 1 */
                                          fetchData(urlInitial + "/subscriptions/getActiveSubscriptionByCustomerEmail/" + customerEmail0_a, createHTTPGetContent()).then(
                                            (resultMain1) => {
                                              var resMainLength = parseInt(resultMain1.length);

                                              console.assert(resMainLength >= 1);

                                              if (resMainLength >= 1) {
                                                for (var i = 0; i < resMainLength; i++) {
                                                  console.assert(JSON.parse(JSON.stringify(resultMain1[i])).active == "true");

                                                  if (JSON.parse(JSON.stringify(resultMain1[i])).active == "true") {
                                                    console.log('Test Passed - testGetActiveSubscriptionByCustomerEmail Positive 1');
                                                    countTestsPassed++;
                                                    console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                  } else {
                                                    console.log('Test Failed - testGetActiveSubscriptionByCustomerEmail Positive 1');
                                                    countTestsFailed++;
                                                    console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                  }
                                                }

                                              } else {
                                                console.log('Test Failed - testGetActiveSubscriptionByCustomerEmail Positive 1');
                                                countTestsFailed++;
                                                console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                              }
                                            }
                                          );

                                        } else {
                                          console.log('Test Failed - Add Subscription Positive 2');
                                          countTestsFailed++;
                                          console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                        }
                                      }
                                    );

                                  } else {
                                    console.log('Test Failed - Add Subscription Positive 1');
                                    countTestsFailed++;
                                    console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                  }
                                }
                              );
                          
                  
                            } else {
                              console.log('Test Failed - Add Vendor to check against Positive 0_d');
                              countTestsFailed++;
                              console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                            }
                          }
                        );

                      } else {
                        console.log('Test Failed - Add Customer to check against Positive 0_c');
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );
              
      
                } else {
                  console.log('Test Failed - Add Vendor to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }
    
    

    // Test 'GetActiveSubscriptionByVendorEmail' functionality
    function testGetActiveSubscriptionByVendorEmail () {
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer _sub_ 15",
        "customerEmail": "customer_sub_15_Demo@_test_gmail.com",
        "customerPhone": "+911111231115",
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
     

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
       (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            var customerEmail0_a = JSON.parse(JSON.stringify(result0_a)).customerEmail;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
            

            /* Add Vendor to check against Positive 0_b */
            var payload0_b = {
              "vendorName": "Vendor _sub_ 16",
              "vendorEmail": "vendor_sub_16_Dummy@_test_gmail.com",
              "vendorPhone": "+910000220011",
              "vendorBasicFoodOptions": ["Veg"],
              "vendorAdvancedFoodOptions": ["Chinese", "Indian"],
              "vendorPeriodicityOptions": ["Daily"],
              "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "vendorOfferedSize": ["Standard", "Large"]
            };
      
            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail);

                if (JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail) {
                  console.log('Test Passed - Add Vendor to check against Positive 0_b');
                  var vendorEmail0_b = JSON.parse(JSON.stringify(result0_b)).vendorEmail;
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

      
                  /* Add Customer to check against Positive 0_c */
                  var payload0_c = {
                    "customerName": "Customer _sub_ 17",
                    "customerEmail": "customer_sub_17_Demo@_test_gmail.com",
                    "customerPhone": "+911111221122",
                    "customerDOB": "2005-02-07",
                    "foodPreference": "Veg",
                    "advancedFoodPreference": "Japanese",
                    "periodicityPreference": "Weekly,Friday"
                  };
                

                  fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_c)).then(
                  (result0_c) => {
                      console.assert(JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail);

                      if (JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail) {
                        console.log('Test Passed - Add Customer to check against Positive 0_c');
                        var customerEmail0_c = JSON.parse(JSON.stringify(result0_c)).customerEmail;
                        countTestsPassed++;
                        console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                        

                        /* Add Vendor to check against Positive 0_d */
                        var payload0_d = {
                          "vendorName": "Vendor _sub_ 18",
                          "vendorEmail": "vendor_sub_18_Dummy@_test_gmail.com",
                          "vendorPhone": "+910000220012",
                          "vendorBasicFoodOptions": ["Veg"],
                          "vendorAdvancedFoodOptions": ["Chinese", "Indian"],
                          "vendorPeriodicityOptions": ["Daily"],
                          "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                          "vendorOfferedSize": ["Standard", "Large"]
                        };
                  
                        fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_d)).then(
                          (result0_d) => {
                            console.assert(JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail);

                            if (JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail) {
                              console.log('Test Passed - Add Vendor to check against Positive 0_d');
                              var vendorEmail0_d = JSON.parse(JSON.stringify(result0_d)).vendorEmail;
                              countTestsPassed++;
                              console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                  
                  
                              /* Add Subscription Positive 1 */
                              var payload1 = {
                                "vendorEmail": vendorEmail0_b,
                                "customerEmail": customerEmail0_a,
                                "startDate": "2021-11-12",
                                "basicFoodSelection": "Non-veg",
                                "advancedFoodSelection": "Italian",
                                "periodicity": "Weekly",
                                "availedDays": ["Tuesday"],
                                "mealSize": "Standard",
                                "active": "true"
                              };

                              fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload1)).then(
                                (result1) => {
                                  console.assert(JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);

                                  if (JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {
                                    console.log('Test Passed - Add Subscription Positive 1');
                                    var subscriptionId1 = JSON.parse(JSON.stringify(result1)).subscriptionId;

                                    countTestsPassed++;
                                    console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                                    /* Add Subscription Positive 2 */
                                    var payload2 = {
                                      "vendorEmail": vendorEmail0_b,
                                      "customerEmail": customerEmail0_c,
                                        "startDate": "2020-04-17",
                                        "basicFoodSelection": "Veg",
                                        "advancedFoodSelection": "Chinese",
                                        "periodicity": "Daily",
                                        "availedDays": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                        "mealSize": "Standard",
                                        "active": "false"
                                      };

                                    fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload2)).then(
                                      (result2) => {
                                        console.assert(JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                        && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail);

                                        if (JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                            && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail) {
                                          console.log('Test Passed - Add Subscription Positive 2');
                                          var subscriptionId2 = JSON.parse(JSON.stringify(result2)).subscriptionId;
                                          countTestsPassed++;
                                          console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                                          /* GetActiveSubscriptionByVendorEmail Positive 1 */
                                          fetchData(urlInitial + "/subscriptions/getActiveSubscriptionByVendorEmail/" + vendorEmail0_b, createHTTPGetContent()).then(
                                            (resultMain1) => {
                                              var resMainLength = parseInt(resultMain1.length);

                                              console.assert(resMainLength >= 1);

                                              if (resMainLength >= 1) {
                                                for (var i = 0; i < resMainLength; i++) {
                                                  console.assert(JSON.parse(JSON.stringify(resultMain1[i])).active == "true");

                                                  if (JSON.parse(JSON.stringify(resultMain1[i])).active == "true") {
                                                    console.log('Test Passed - testGetActiveSubscriptionByVendorEmail Positive 1');
                                                    countTestsPassed++;
                                                    console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                  } else {
                                                    console.log('Test Failed - testGetActiveSubscriptionByVendorEmail Positive 1');
                                                    countTestsFailed++;
                                                    console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                  }
                                                }

                                              } else {
                                                console.log('Test Failed - testGetActiveSubscriptionByVendorEmail Positive 1');
                                                countTestsFailed++;
                                                console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                              }
                                            }
                                          );

                                        } else {
                                          console.log('Test Failed - Add Subscription Positive 2');
                                          countTestsFailed++;
                                          console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                        }
                                      }
                                    );

                                  } else {
                                    console.log('Test Failed - Add Subscription Positive 1');
                                    countTestsFailed++;
                                    console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                  }
                                }
                              );
                          
                  
                            } else {
                              console.log('Test Failed - Add Vendor to check against Positive 0_d');
                              countTestsFailed++;
                              console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                            }
                          }
                        );

                      } else {
                        console.log('Test Failed - Add Customer to check against Positive 0_c');
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );
              
      
                } else {
                  console.log('Test Failed - Add Vendor to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }


    // Test 'ActivateSubscription' & 'DeactivateSubscription'  functionality
    function testActivateSubscription_and_DeactivateSubscription () {
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer _sub_ 19",
        "customerEmail": "customer_sub_19_Demo@_test_gmail.com",
        "customerPhone": "+911111231116",
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
      

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
       (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            var customerEmail0_a = JSON.parse(JSON.stringify(result0_a)).customerEmail;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
            

            /* Add Vendor to check against Positive 0_b */
            var payload0_b = {
              "vendorName": "Vendor _sub_ 20",
              "vendorEmail": "vendor_sub_20_Dummy@_test_gmail.com",
              "vendorPhone": "+910000220013",
              "vendorBasicFoodOptions": ["Veg"],
              "vendorAdvancedFoodOptions": ["Chinese", "Indian"],
              "vendorPeriodicityOptions": ["Daily"],
              "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "vendorOfferedSize": ["Standard", "Large"]
            };
      
            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail);

                if (JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail) {
                  console.log('Test Passed - Add Vendor to check against Positive 0_b');
                  var vendorEmail0_b = JSON.parse(JSON.stringify(result0_b)).vendorEmail;
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

      
                  /* Add Customer to check against Positive 0_c */
                  var payload0_c = {
                    "customerName": "Customer _sub_ 21",
                    "customerEmail": "customer_sub_21_Demo@_test_gmail.com",
                    "customerPhone": "+911111221123",
                    "customerDOB": "2005-02-07",
                    "foodPreference": "Veg",
                    "advancedFoodPreference": "Japanese",
                    "periodicityPreference": "Weekly,Friday"
                  };
                

                  fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_c)).then(
                  (result0_c) => {
                      console.assert(JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail);

                      if (JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail) {
                        console.log('Test Passed - Add Customer to check against Positive 0_c');
                        var customerEmail0_c = JSON.parse(JSON.stringify(result0_c)).customerEmail;
                        countTestsPassed++;
                        console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                        

                        /* Add Vendor to check against Positive 0_d */
                        var payload0_d = {
                          "vendorName": "Vendor _sub_ 22",
                          "vendorEmail": "vendor_sub_22_Dummy@_test_gmail.com",
                          "vendorPhone": "+910050220013",
                          "vendorBasicFoodOptions": ["Veg"],
                          "vendorAdvancedFoodOptions": ["Italian", "Indian"],
                          "vendorPeriodicityOptions": ["Daily"],
                          "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                          "vendorOfferedSize": ["Standard", "Large"]
                        };
                  
                        fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_d)).then(
                          (result0_d) => {
                            console.assert(JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail);

                            if (JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail) {
                              console.log('Test Passed - Add Vendor to check against Positive 0_d');
                              var vendorEmail0_d = JSON.parse(JSON.stringify(result0_d)).vendorEmail;
                              countTestsPassed++;
                              console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                  
                  
                              /* Add Subscription Positive 1 */
                              var payload1 = {
                                "vendorEmail": vendorEmail0_b,
                                "customerEmail": customerEmail0_a,
                                "startDate": "2021-11-12",
                                "basicFoodSelection": "Non-veg",
                                "advancedFoodSelection": "Italian",
                                "periodicity": "Weekly",
                                "availedDays": ["Tuesday"],
                                "mealSize": "Small",
                                "active": "true"
                              };

                              fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload1)).then(
                                (result1) => {
                                  console.assert(JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);

                                  if (JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {
                                    console.log('Test Passed - Add Subscription Positive 1');
                                    var subscriptionId1 = JSON.parse(JSON.stringify(result1)).subscriptionId;

                                    countTestsPassed++;
                                    console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                                    /* Add Subscription Positive 2 */
                                    var payload2 = {
                                      "vendorEmail": vendorEmail0_b,
                                      "customerEmail": customerEmail0_c,
                                      "startDate": "2020-04-17",
                                      "basicFoodSelection": "Veg",
                                      "advancedFoodSelection": "Indian",
                                      "periodicity": "Daily",
                                      "availedDays": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                      "mealSize": "Large",
                                      "active": "false"
                                    };

                                    fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload2)).then(
                                      (result2) => {
                                        console.assert(JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                        && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail);

                                        if (JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                            && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail) {
                                          console.log('Test Passed - Add Subscription Positive 2');
                                          var subscriptionId2 = JSON.parse(JSON.stringify(result2)).subscriptionId;
                                          countTestsPassed++;
                                          console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                                          /* ActivateSubscription Positive 1 */
                                          fetchData(urlInitial + "/subscriptions/activateSubscription/" + subscriptionId2, createHTTPPostContent()).then(
                                            (resultMain1) => {
                                              console.assert(JSON.parse(JSON.stringify(resultMain1)).active == "true");

                                              if (JSON.parse(JSON.stringify(resultMain1)).active == "true") {
                                                console.log('Test Passed - testActivateSubscription Positive 1');
                                                countTestsPassed++;
                                                console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                
                                              } else {
                                                console.log('Test Failed - testActivateSubscription Positive 1');
                                                countTestsFailed++;
                                                console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                              }
                                            }
                                          );
                                          


                                          /* DeactivateSubscription Positive 1 */
                                          fetchData(urlInitial + "/subscriptions/deactivateSubscription/" + subscriptionId1, createHTTPPostContent()).then(
                                            (resultMain2) => {
                                              console.assert(JSON.parse(JSON.stringify(resultMain2)).active == "false");

                                              if (JSON.parse(JSON.stringify(resultMain2)).active == "false") {
                                                console.log('Test Passed - testDeactivateSubscription Positive 1');
                                                countTestsPassed++;
                                                console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                
                                              } else {
                                                console.log('Test Failed - testDeactivateSubscription Positive 1');
                                                countTestsFailed++;
                                                console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                              }
                                            }
                                          );

                                        } else {
                                          console.log('Test Failed - Add Subscription Positive 2');
                                          countTestsFailed++;
                                          console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                        }
                                      }
                                    );

                                  } else {
                                    console.log('Test Failed - Add Subscription Positive 1');
                                    countTestsFailed++;
                                    console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                  }
                                }
                              );
                          
                  
                            } else {
                              console.log('Test Failed - Add Vendor to check against Positive 0_d');
                              countTestsFailed++;
                              console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                            }
                          }
                        );

                      } else {
                        console.log('Test Failed - Add Customer to check against Positive 0_c');
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );
              
      
                } else {
                  console.log('Test Failed - Add Vendor to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }



    // Test 'getPendingOrdersByCustomerEmail' & 'getPendingOrdersByVendorEmail'  functionality
    function test_getPendingOrdersByCustomerEmail_and_getPendingOrdersByVendorEmail () {
      var date = new Date();
      var today_day = date.getDay();

      var dd = date.getDate();
      if (dd < 10) {
        dd = "0" + dd;
      }

      var mm = date.getMonth() + 1;
      if (mm < 10) {
        mm = "0" + mm;
      }
      var yyyy = date.getFullYear();

      var today = yyyy + "-" + mm + "-" + dd;
      
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer _sub_ 24",
        "customerEmail": "customer_sub_24_Demo@_test_gmail.com",
        "customerPhone": "+911111231117",
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
      

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
       (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            var customerEmail0_a = JSON.parse(JSON.stringify(result0_a)).customerEmail;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
            

            /* Add Vendor to check against Positive 0_b */
            var payload0_b = {
              "vendorName": "Vendor _sub_ 25",
              "vendorEmail": "vendor_sub_25_Dummy@_test_gmail.com",
              "vendorPhone": "+911111231118",
              "vendorBasicFoodOptions": ["Veg"],
              "vendorAdvancedFoodOptions": ["Italian", "Indian"],
              "vendorPeriodicityOptions": ["Daily"],
              "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "vendorOfferedSize": ["Standard", "Large"]
            };
      
            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail);

                if (JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail) {
                  console.log('Test Passed - Add Vendor to check against Positive 0_b');
                  var vendorEmail0_b = JSON.parse(JSON.stringify(result0_b)).vendorEmail;
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

      
                  /* Add Customer to check against Positive 0_c */
                  var payload0_c = {
                    "customerName": "Customer _sub_ 26",
                    "customerEmail": "customer_sub_26_Demo@_test_gmail.com",
                    "customerPhone": "+911111231119",
                    "customerDOB": "2005-02-07",
                    "foodPreference": "Veg",
                    "advancedFoodPreference": "Japanese",
                    "periodicityPreference": "Weekly,Friday"
                  };
                

                  fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_c)).then(
                  (result0_c) => {
                      console.assert(JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail);

                      if (JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail) {
                        console.log('Test Passed - Add Customer to check against Positive 0_c');
                        var customerEmail0_c = JSON.parse(JSON.stringify(result0_c)).customerEmail;
                        countTestsPassed++;
                        console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                        

                        /* Add Vendor to check against Positive 0_d */
                        var payload0_d = {
                          "vendorName": "Vendor _sub_ 27",
                          "vendorEmail": "vendor_sub_27_Dummy@_test_gmail.com",
                          "vendorPhone": "+911111231120",
                          "vendorBasicFoodOptions": ["Veg"],
                          "vendorAdvancedFoodOptions": ["Italian", "Indian"],
                          "vendorPeriodicityOptions": ["Daily"],
                          "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                          "vendorOfferedSize": ["Standard", "Large"]
                        };
                  
                        fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_d)).then(
                          (result0_d) => {
                            console.assert(JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail);

                            if (JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail) {
                              console.log('Test Passed - Add Vendor to check against Positive 0_d');
                              var vendorEmail0_d = JSON.parse(JSON.stringify(result0_d)).vendorEmail;
                              countTestsPassed++;
                              console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                  
                  
                              /* Add Subscription Positive 1 */
                              var payload1 = {
                                "vendorEmail": vendorEmail0_b,
                                "customerEmail": customerEmail0_a,
                                "startDate": "2021-11-12",
                                "basicFoodSelection": "Non-veg",
                                "advancedFoodSelection": "Italian",
                                "periodicity": "Daily",
                                "availedDays": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                "mealSize": "Small",
                                "active": "true"
                              };

                              fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload1)).then(
                                (result1) => {
                                  console.assert(JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);

                                  if (JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {
                                    console.log('Test Passed - Add Subscription Positive 1');
                                    var subscriptionId1 = JSON.parse(JSON.stringify(result1)).subscriptionId;

                                    countTestsPassed++;
                                    console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                                    /* Add Subscription Positive 2 */
                                    var payload2 = {
                                      "vendorEmail": vendorEmail0_b,
                                      "customerEmail": customerEmail0_a,
                                      "startDate": "2020-01-17",
                                      "basicFoodSelection": "Veg",
                                      "advancedFoodSelection": "Italian",
                                      "periodicity": "Daily",
                                      "availedDays": ["Saturday", "Monday", "Tuesday"],
                                      "mealSize": "Standard",
                                      "active": "true",
                                      "lastDeliveryDate": "2020-03-15"
                                    };

                                    fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload2)).then(
                                      (result2) => {
                                        console.assert(JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                        && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail);

                                        if (JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                            && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail) {
                                          console.log('Test Passed - Add Subscription Positive 2');
                                          var subscriptionId2 = JSON.parse(JSON.stringify(result2)).subscriptionId;
                                          countTestsPassed++;
                                          console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                                          /* Add Subscription Positive 3 */
                                          var payload3 = {
                                            "vendorEmail": vendorEmail0_b,
                                            "customerEmail": customerEmail0_a,
                                            "startDate": "2020-04-17",
                                            "basicFoodSelection": "Veg",
                                            "advancedFoodSelection": "Italian",
                                            "periodicity": "Daily",
                                            "availedDays": ["Wednesday", "Thursday", "Friday", "Saturday"],
                                            "mealSize": "Small",
                                            "active": "true",
                                            "lastDeliveryDate": today.toString()
                                          };
                                          
                                          fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload3)).then(
                                            (result3) => {
                                              console.assert(JSON.parse(JSON.stringify(result3)).customerEmail == JSON.parse(JSON.stringify(payload3)).customerEmail
                                              && JSON.parse(JSON.stringify(result3)).vendorEmail == JSON.parse(JSON.stringify(payload3)).vendorEmail);

                                              if (JSON.parse(JSON.stringify(result3)).customerEmail == JSON.parse(JSON.stringify(payload3)).customerEmail
                                                  && JSON.parse(JSON.stringify(result3)).vendorEmail == JSON.parse(JSON.stringify(payload3)).vendorEmail) {
                                                console.log('Test Passed - Add Subscription Positive 3');
                                                var subscriptionId3 = JSON.parse(JSON.stringify(result3)).subscriptionId;
                                                countTestsPassed++;
                                                console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                                                /* getPendingOrdersByCustomerEmail Positive 1 */
                                                fetchData(urlInitial + "/subscriptions/getPendingOrdersByCustomerEmail/" + customerEmail0_a, createHTTPGetContent()).then(
                                                  (resultMain1) => {
                                                    var resMainLength = parseInt(resultMain1.length);

                                                    console.assert(resMainLength >= 1);
                                                    
                                                    if (resMainLength >= 1) {
                                                      for (var i = 0; i < resMainLength; i++) {
                                                        var current = JSON.parse(JSON.stringify(resultMain1[i]));

                                                        console.assert(current.customerEmail == customerEmail0_a
                                                                        && current.active == "true"
                                                                        && current.availedDays.includes(intToDay(today_day)));

                                                        if (current.customerEmail == customerEmail0_a
                                                              && current.active == "true"
                                                              && current.availedDays.includes(intToDay(today_day))) {
                                                          
                                                          console.assert(today.toString() != current.lastDeliveryDate)
                                                          
                                                          if (today.toString() != current.lastDeliveryDate) {
                                                            console.log('Test Passed - testGetPendingOrdersByCustomerEmail Positive 1');
                                                            countTestsPassed++;
                                                            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                          } else {
                                                            console.log('Test Failed - testGetPendingOrdersByCustomerEmail Positive 1');
                                                            countTestsFailed++;
                                                            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                          }
                                                        } else {
                                                          console.log('Test Failed - testGetPendingOrdersByCustomerEmail Positive 1');
                                                          countTestsFailed++;
                                                          console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                        }
                                                      }

                                                    } else {
                                                      console.log('Test Failed - testGetPendingOrdersByCustomerEmail Positive 1');
                                                      countTestsFailed++;
                                                      console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                    }
                                                  }
                                                );

                                                
                                                
                                                /* getPendingOrdersByVendorEmail Positive 1 */
                                                fetchData(urlInitial + "/subscriptions/getPendingOrdersByVendorEmail/" + vendorEmail0_b, createHTTPGetContent()).then(
                                                  (resultMain2) => {
                                                    var resMainLength = parseInt(resultMain2.length);

                                                    console.assert(resMainLength >= 1);
                                                    
                                                    if (resMainLength >= 1) {
                                                      for (var i = 0; i < resMainLength; i++) {
                                                        var current = JSON.parse(JSON.stringify(resultMain2[i]));

                                                        console.assert(current.vendorEmail == vendorEmail0_b
                                                                        && current.active == "true"
                                                                        && current.availedDays.includes(intToDay(today_day)));

                                                        if (current.vendorEmail == vendorEmail0_b
                                                              && current.active == "true"
                                                              && current.availedDays.includes(intToDay(today_day))) {
                                                          
                                                          console.log(today.toString());

                                                          console.assert(today.toString() != current.lastDeliveryDate)
                                                          
                                                          if (today.toString() != current.lastDeliveryDate) {
                                                            console.log('Test Passed - testGetPendingOrdersByVendorEmail Positive 1');
                                                            countTestsPassed++;
                                                            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                          } else {
                                                            console.log('Test Failed - testGetPendingOrdersByVendorEmail Positive 1');
                                                            countTestsFailed++;
                                                            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                          }
                                                        } else {
                                                          console.log('Test Failed - testGetPendingOrdersByVendorEmail Positive 1');
                                                          countTestsFailed++;
                                                          console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                        }
                                                      }

                                                    } else {
                                                      console.log('Test Failed - testGetPendingOrdersByVendorEmail Positive 1');
                                                      countTestsFailed++;
                                                      console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                    }
                                                  }
                                                );

                                              } else {
                                                console.log('Test Failed - Add Subscription Positive 3');
                                                countTestsFailed++;
                                                console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                              }
                                            }
                                          );

                                        } else {
                                          console.log('Test Failed - Add Subscription Positive 2');
                                          countTestsFailed++;
                                          console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                        }
                                      }
                                    );

                                  } else {
                                    console.log('Test Failed - Add Subscription Positive 1');
                                    countTestsFailed++;
                                    console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                  }
                                }
                              );
                          
                  
                            } else {
                              console.log('Test Failed - Add Vendor to check against Positive 0_d');
                              countTestsFailed++;
                              console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                            }
                          }
                        );

                      } else {
                        console.log('Test Failed - Add Customer to check against Positive 0_c');
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );
              
      
                } else {
                  console.log('Test Failed - Add Vendor to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }



    // Test 'getCompletedOrdersByCustomerEmail' & 'getCompletedOrdersByVendorEmail'  functionality
    function test_getCompletedOrdersByCustomerEmail_and_getCompletedOrdersByVendorEmail () {
      var date = new Date();
      var today_day = date.getDay();

      var dd = date.getDate();
      if (dd < 10) {
        dd = "0" + dd;
      }
      var mm = date.getMonth() + 1;
      if (mm < 10) {
        mm = "0" + mm;
      }
      var yyyy = date.getFullYear();

      var today = yyyy + "-" + mm + "-" + dd;

      
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer _sub_ 28",
        "customerEmail": "customer_sub_28_Demo@_test_gmail.com",
        "customerPhone": "+911111231121",
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
      

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
       (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            var customerEmail0_a = JSON.parse(JSON.stringify(result0_a)).customerEmail;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
            

            /* Add Vendor to check against Positive 0_b */
            var payload0_b = {
              "vendorName": "Vendor _sub_ 29",
              "vendorEmail": "vendor_sub_29_Dummy@_test_gmail.com",
              "vendorPhone": "+911111231122",
              "vendorBasicFoodOptions": ["Veg"],
              "vendorAdvancedFoodOptions": ["Indian"],
              "vendorPeriodicityOptions": ["Daily"],
              "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "vendorOfferedSize": ["Standard", "Large"]
            };
      
            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail);

                if (JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail) {
                  console.log('Test Passed - Add Vendor to check against Positive 0_b');
                  var vendorEmail0_b = JSON.parse(JSON.stringify(result0_b)).vendorEmail;
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

      
                  /* Add Customer to check against Positive 0_c */
                  var payload0_c = {
                    "customerName": "Customer _sub_ 30",
                    "customerEmail": "customer_sub_30_Demo@_test_gmail.com",
                    "customerPhone": "+911111231123",
                    "customerDOB": "2005-02-07",
                    "foodPreference": "Veg",
                    "advancedFoodPreference": "Japanese",
                    "periodicityPreference": "Weekly,Friday"
                  };
                

                  fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_c)).then(
                  (result0_c) => {
                      console.assert(JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail);

                      if (JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail) {
                        console.log('Test Passed - Add Customer to check against Positive 0_c');
                        var customerEmail0_c = JSON.parse(JSON.stringify(result0_c)).customerEmail;
                        countTestsPassed++;
                        console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                        

                        /* Add Vendor to check against Positive 0_d */
                        var payload0_d = {
                          "vendorName": "Vendor _sub_ 31",
                          "vendorEmail": "vendor_sub_31_Dummy@_test_gmail.com",
                          "vendorPhone": "+911111231124",
                          "vendorBasicFoodOptions": ["Veg"],
                          "vendorAdvancedFoodOptions": ["Chinese", "Indian"],
                          "vendorPeriodicityOptions": ["Daily"],
                          "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                          "vendorOfferedSize": ["Standard", "Large"]
                        };
                  
                        fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_d)).then(
                          (result0_d) => {
                            console.assert(JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail);

                            if (JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail) {
                              console.log('Test Passed - Add Vendor to check against Positive 0_d');
                              var vendorEmail0_d = JSON.parse(JSON.stringify(result0_d)).vendorEmail;
                              countTestsPassed++;
                              console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                  
                  
                              /* Add Subscription Positive 1 */
                              var payload1 = {
                                "vendorEmail": vendorEmail0_b,
                                "customerEmail": customerEmail0_a,
                                "startDate": "2021-11-12",
                                "basicFoodSelection": "Non-veg",
                                "advancedFoodSelection": "Italian",
                                "periodicity": "Daily",
                                "availedDays": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                "mealSize": "Large",
                                "active": "true"
                              };

                              fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload1)).then(
                                (result1) => {
                                  console.assert(JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);

                                  if (JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {
                                    console.log('Test Passed - Add Subscription Positive 1');
                                    var subscriptionId1 = JSON.parse(JSON.stringify(result1)).subscriptionId;

                                    countTestsPassed++;
                                    console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                                    /* Add Subscription Positive 2 */
                                    var payload2 = {
                                      "vendorEmail": vendorEmail0_b,
                                      "customerEmail": customerEmail0_a,
                                      "startDate": "2020-01-17",
                                      "basicFoodSelection": "Veg",
                                      "advancedFoodSelection": "Indian",
                                      "periodicity": "Daily",
                                      "availedDays": ["Saturday", "Monday", "Tuesday"],
                                      "mealSize": "Large",
                                      "active": "true",
                                      "lastDeliveryDate": "2020-03-15"
                                    };

                                    fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload2)).then(
                                      (result2) => {
                                        console.assert(JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                        && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail);

                                        if (JSON.parse(JSON.stringify(result2)).customerEmail == JSON.parse(JSON.stringify(payload2)).customerEmail
                                            && JSON.parse(JSON.stringify(result2)).vendorEmail == JSON.parse(JSON.stringify(payload2)).vendorEmail) {
                                          console.log('Test Passed - Add Subscription Positive 2');
                                          var subscriptionId2 = JSON.parse(JSON.stringify(result2)).subscriptionId;
                                          countTestsPassed++;
                                          console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                                          /* Add Subscription Positive 3 */
                                          var payload3 = {
                                            "vendorEmail": vendorEmail0_b,
                                            "customerEmail": customerEmail0_a,
                                            "startDate": "2020-04-17",
                                            "basicFoodSelection": "Veg",
                                            "advancedFoodSelection": "Indian",
                                            "periodicity": "Daily",
                                            "availedDays": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                            "mealSize": "Small",
                                            "active": "true",
                                            "lastDeliveryDate": today.toString()
                                          };
                                          
                                          fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload3)).then(
                                            (result3) => {
                                              console.assert(JSON.parse(JSON.stringify(result3)).customerEmail == JSON.parse(JSON.stringify(payload3)).customerEmail
                                              && JSON.parse(JSON.stringify(result3)).vendorEmail == JSON.parse(JSON.stringify(payload3)).vendorEmail);

                                              if (JSON.parse(JSON.stringify(result3)).customerEmail == JSON.parse(JSON.stringify(payload3)).customerEmail
                                                  && JSON.parse(JSON.stringify(result3)).vendorEmail == JSON.parse(JSON.stringify(payload3)).vendorEmail) {
                                                console.log('Test Passed - Add Subscription Positive 3');
                                                var subscriptionId3 = JSON.parse(JSON.stringify(result3)).subscriptionId;
                                                countTestsPassed++;
                                                console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                                                /* getCompletedOrdersByCustomerEmail Positive 1 */
                                                fetchData(urlInitial + "/subscriptions/getCompletedOrdersByCustomerEmail/" + customerEmail0_a, createHTTPGetContent()).then(
                                                  (resultMain1) => {
                                                    var resMainLength = parseInt(resultMain1.length);

                                                    console.assert(resMainLength >= 1);
                                                    
                                                    if (resMainLength >= 1) {
                                                      for (var i = 0; i < resMainLength; i++) {
                                                        var current = JSON.parse(JSON.stringify(resultMain1[i]));

                                                        console.assert(current.customerEmail == customerEmail0_a
                                                          && current.active == "true");
                                                        
                                                        if (current.customerEmail == customerEmail0_a
                                                              && current.active == "true") {
                                                          
                                                          if (!current.availedDays.includes(intToDay(today_day))) {
                                                            console.assert(!current.availedDays.includes(intToDay(today_day)));

                                                            console.log('Test Passed - testGetCompletedOrdersByCustomerEmail Positive 1');
                                                            countTestsPassed++;
                                                            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                                                          } else if (today.toString() == current.lastDeliveryDate) {
                                                            console.assert(today.toString() == current.lastDeliveryDate);

                                                            console.log('Test Passed - testGetCompletedOrdersByCustomerEmail Positive 1');
                                                            countTestsPassed++;
                                                            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                                                          } else {
                                                            console.log('Test Failed - testGetCompletedOrdersByCustomerEmail Positive 1');
                                                            countTestsFailed++;
                                                            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                          }
                                                        } else {
                                                          console.log('Test Failed - testGetCompletedOrdersByCustomerEmail Positive 1');
                                                          countTestsFailed++;
                                                          console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                        }
                                                      }

                                                    } else {
                                                      console.log('Test Failed - testGetCompletedOrdersByCustomerEmail Positive 1');
                                                      countTestsFailed++;
                                                      console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                    }
                                                  }
                                                );

                                                
                                                
                                                /* getCompletedOrdersByVendorEmail Positive 1 */
                                                fetchData(urlInitial + "/subscriptions/getCompletedOrdersByVendorEmail/" + vendorEmail0_b, createHTTPGetContent()).then(
                                                  (resultMain2) => {
                                                    var resMainLength = parseInt(resultMain2.length);

                                                    console.assert(resMainLength >= 1);
                                                    
                                                    if (resMainLength >= 1) {
                                                      for (var i = 0; i < resMainLength; i++) {
                                                        var current = JSON.parse(JSON.stringify(resultMain2[i]));

                                                        console.assert(current.vendorEmail == vendorEmail0_b
                                                          && current.active == "true");
                                                        
                                                        if (current.vendorEmail == vendorEmail0_b
                                                              && current.active == "true") {
                                                          
                                                          if (!current.availedDays.includes(intToDay(today_day))) {
                                                            console.assert(!current.availedDays.includes(intToDay(today_day)));

                                                            console.log('Test Passed - testGetCompletedOrdersByVendorEmail Positive 1');
                                                            countTestsPassed++;
                                                            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

                                                          } else if (today.toString() == current.lastDeliveryDate) {
                                                            console.assert(today.toString() == current.lastDeliveryDate);

                                                            console.log('Test Passed - testGetCompletedOrdersByVendorEmail Positive 1');
                                                            countTestsPassed++;
                                                            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                            
                                                          } else {
                                                            console.log('Test Failed - testGetCompletedOrdersByVendorEmail Positive 1');
                                                            countTestsFailed++;
                                                            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                          }
                                                        } else {
                                                          console.log('Test Failed - testGetCompletedOrdersByVendorEmail Positive 1');
                                                          countTestsFailed++;
                                                          console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                        }
                                                      }

                                                    } else {
                                                      console.log('Test Failed - testGetCompletedOrdersByVendorEmail Positive 1');
                                                      countTestsFailed++;
                                                      console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                                    }
                                                  }
                                                );

                                              } else {
                                                console.log('Test Failed - Add Subscription Positive 3');
                                                countTestsFailed++;
                                                console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                              }
                                            }
                                          );

                                        } else {
                                          console.log('Test Failed - Add Subscription Positive 2');
                                          countTestsFailed++;
                                          console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                        }
                                      }
                                    );

                                  } else {
                                    console.log('Test Failed - Add Subscription Positive 1');
                                    countTestsFailed++;
                                    console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                  }
                                }
                              );
                          
                  
                            } else {
                              console.log('Test Failed - Add Vendor to check against Positive 0_d');
                              countTestsFailed++;
                              console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                            }
                          }
                        );

                      } else {
                        console.log('Test Failed - Add Customer to check against Positive 0_c');
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );
              
      
                } else {
                  console.log('Test Failed - Add Vendor to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }



    // Test 'markDelivered' functionality
    function testMarkDelivered () {
      var date = new Date();
      var today_day = date.getDay();

      var dd = date.getDate();
      if (dd < 10) {
        dd = "0" + dd;
      }
      var mm = date.getMonth() + 1;
      if (mm < 10) {
        mm = "0" + mm;
      }
      var yyyy = date.getFullYear();

      var today = yyyy + "-" + mm + "-" + dd;

      
      /* Add Customer to check against Positive 0_a */
      var payload0_a = {
        "customerName": "Customer _sub_ 32",
        "customerEmail": "customer_sub_32_Demo@_test_gmail.com",
        "customerPhone": "+911111231125",
        "customerDOB": "2005-02-07",
        "foodPreference": "Veg",
        "advancedFoodPreference": "Japanese",
        "periodicityPreference": "Weekly,Friday"
      };
      

      fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_a)).then(
       (result0_a) => {
          console.assert(JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail);

          if (JSON.parse(JSON.stringify(result0_a)).customerEmail == JSON.parse(JSON.stringify(payload0_a)).customerEmail) {
            console.log('Test Passed - Add Customer to check against Positive 0_a');
            var customerEmail0_a = JSON.parse(JSON.stringify(result0_a)).customerEmail;
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
            

            /* Add Vendor to check against Positive 0_b */
            var payload0_b = {
              "vendorName": "Vendor _sub_ 33",
              "vendorEmail": "vendor_sub_33_Dummy@_test_gmail.com",
              "vendorPhone": "+911111231126",
              "vendorBasicFoodOptions": ["Veg"],
              "vendorAdvancedFoodOptions": ["Chinese", "Indian"],
              "vendorPeriodicityOptions": ["Daily"],
              "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "vendorOfferedSize": ["Standard", "Large"]
            };
      
            fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_b)).then(
              (result0_b) => {
                console.assert(JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail);

                if (JSON.parse(JSON.stringify(result0_b)).vendorEmail == JSON.parse(JSON.stringify(payload0_b)).vendorEmail) {
                  console.log('Test Passed - Add Vendor to check against Positive 0_b');
                  var vendorEmail0_b = JSON.parse(JSON.stringify(result0_b)).vendorEmail;
                  countTestsPassed++;
                  console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }

      
                  /* Add Customer to check against Positive 0_c */
                  var payload0_c = {
                    "customerName": "Customer _sub_ 34",
                    "customerEmail": "customer_sub_34_Demo@_test_gmail.com",
                    "customerPhone": "+911111231127",
                    "customerDOB": "2005-02-07",
                    "foodPreference": "Veg",
                    "advancedFoodPreference": "Japanese",
                    "periodicityPreference": "Weekly,Friday"
                  };
                

                  fetchData(urlInitial + "/customers/addCustomer", createHTTPPostContent(payload0_c)).then(
                  (result0_c) => {
                      console.assert(JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail);

                      if (JSON.parse(JSON.stringify(result0_c)).customerEmail == JSON.parse(JSON.stringify(payload0_c)).customerEmail) {
                        console.log('Test Passed - Add Customer to check against Positive 0_c');
                        var customerEmail0_c = JSON.parse(JSON.stringify(result0_c)).customerEmail;
                        countTestsPassed++;
                        console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                        

                        /* Add Vendor to check against Positive 0_d */
                        var payload0_d = {
                          "vendorName": "Vendor _sub_ 35",
                          "vendorEmail": "vendor_sub_35_Dummy@_test_gmail.com",
                          "vendorPhone": "+911111231128",
                          "vendorBasicFoodOptions": ["Veg"],
                          "vendorAdvancedFoodOptions": ["Indian"],
                          "vendorPeriodicityOptions": ["Daily"],
                          "vendorAvailability": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                          "vendorOfferedSize": ["Standard", "Large"]
                        };
                  
                        fetchData(urlInitial + "/vendors/addVendor", createHTTPPostContent(payload0_d)).then(
                          (result0_d) => {
                            console.assert(JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail);

                            if (JSON.parse(JSON.stringify(result0_d)).vendorEmail == JSON.parse(JSON.stringify(payload0_d)).vendorEmail) {
                              console.log('Test Passed - Add Vendor to check against Positive 0_d');
                              var vendorEmail0_d = JSON.parse(JSON.stringify(result0_d)).vendorEmail;
                              countTestsPassed++;
                              console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                  
                  
                              /* Add Subscription Positive 1 */
                              var payload1 = {
                                "vendorEmail": vendorEmail0_b,
                                "customerEmail": customerEmail0_a,
                                "startDate": "2021-11-12",
                                "basicFoodSelection": "Non-veg",
                                "advancedFoodSelection": "Italian",
                                "periodicity": "Daily",
                                "availedDays": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                "mealSize": "Large",
                                "active": "true",
                                "lastDeliveryDate": "2022-03-11"
                              };

                              fetchData(urlInitial + "/subscriptions/addSubscription", createHTTPPostContent(payload1)).then(
                                (result1) => {
                                  console.assert(JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail);

                                  if (JSON.parse(JSON.stringify(result1)).customerEmail == JSON.parse(JSON.stringify(payload1)).customerEmail
                                      && JSON.parse(JSON.stringify(result1)).vendorEmail == JSON.parse(JSON.stringify(payload1)).vendorEmail) {
                                    console.log('Test Passed - Add Subscription Positive 1');
                                    var subscriptionId1 = JSON.parse(JSON.stringify(result1)).subscriptionId;

                                    countTestsPassed++;
                                    console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }


                                    /* markDelivered Positive 1 */
                                    fetchData(urlInitial + "/subscriptions/markDelivered/" + subscriptionId1, createHTTPPostContent()).then(
                                      (resultMain1) => {
                                        console.assert(JSON.parse(JSON.stringify(resultMain1)).active == "true"   &&   JSON.parse(JSON.stringify(resultMain1)).lastDeliveryDate == today.toString());
                                        console.log(JSON.parse(JSON.stringify(resultMain1)).active);
                                        console.log(JSON.parse(JSON.stringify(resultMain1)).lastDeliveryDate);
                                        console.log(today.toString());

                                        if (JSON.parse(JSON.stringify(resultMain1)).active == "true" && JSON.parse(JSON.stringify(resultMain1)).lastDeliveryDate == today.toString()) {
                                          console.log('Test Passed - testMarkDelivered Positive 1');
                                          countTestsPassed++;
                                          console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                          
                                        } else {
                                          console.log('Test Failed - testMarkDelivered Positive 1');
                                          countTestsFailed++;
                                          console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                        }
                                      }
                                    );
                                    
                                  } else {
                                    console.log('Test Failed - Add Subscription Positive 1');
                                    countTestsFailed++;
                                    console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                                  }
                                }
                              );
                            
                            } else {
                              console.log('Test Failed - Add Vendor to check against Positive 0_d');
                              countTestsFailed++;
                              console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                            }
                          }
                        );

                      } else {
                        console.log('Test Failed - Add Customer to check against Positive 0_c');
                        countTestsFailed++;
                        console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                      }
                    }
                  );
                  
                } else {
                  console.log('Test Failed - Add Vendor to check against Positive 0_b');
                  countTestsFailed++;
                  console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
                }
              }
            );

          } else {
            console.log('Test Failed - Add Customer to check against Positive 0_a');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );
    }



    // Test 'GetCost' functionality
    function testGetCost () {
      // GetCost 1
      fetchData(urlInitial + "/subscriptions/getCost/Standard/Veg/Indian/2", createHTTPGetContent()).then(
       (result1) => {
          console.assert(result1 == 140);

          if (result1 == 140) {
            console.log('Test Passed - GetCost Positive 1');
            countTestsPassed++;
            console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          } else {
            console.log('Test Failed - GetCost Positive 1');
            countTestsFailed++;
            console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
          }
        }
      );


      // GetCost 2
      fetchData(urlInitial + "/subscriptions/getCost/Large/Non-veg/Italian/6", createHTTPGetContent()).then(
        (result2) => {
           console.assert(result2 == 250);
 
           if (result2 == 250) {
             console.log('Test Passed - GetCost Positive 2');
             countTestsPassed++;
             console.log ('Total Passed Test Cases: ' + countTestsPassed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
           } else {
             console.log('Test Failed - GetCost Positive 2');
             countTestsFailed++;
             console.log ('Total Failed Test Cases: ' + countTestsFailed);

            total = countTestsPassed + countTestsFailed;
            if (total === NO_OF_TEST_CASES) {
              console.log ("****************************************");
              console.log ("             Test Results               ");
              console.log ("****************************************");
              console.log ("Total Test Cases: " +  NO_OF_TEST_CASES);
              console.log ("Passed Test Cases: " +  countTestsPassed);
              console.log ("Failed Test Cases: " +  countTestsFailed);
              console.log ("****************************************");
            }
           }
         }
       );
    }
    /* ---------------------------------------------------------------- */
    /* ---------------------------------------------------------------- */



    // // Run Integration Tests - Account Service
    testAddAccount();
    testAuthenticateAccountByEmail();
    testAuthenticateAccountByPhone();

    // Run Integration Tests - Customer Service
    testAddCustomer_and_updateCustomer();
    testGetCustomer();
    testGetAllCustomers();
    testGetCustomerByEmail();

    // Run Integration Tests - Vendor Service
    testAddVendor_and_updateVendor();
    testGetVendor();
    testGetAllVendors();
    testGetVendorByEmail();

    // Run Integration Tests - User Profile Service
    testGetUserProfileByEmail();


    // Run Integration Tests - Subscription Service
    testAddSubscription();
    testGetSubscription();
    testGetSubscriptionByCustomerEmail();
    testGetSubscriptionByVendorEmail();
    testGetAllSubscriptions();

    testGetActiveSubscriptionByCustomerEmail();
    testGetActiveSubscriptionByVendorEmail();

    testActivateSubscription_and_DeactivateSubscription();
    test_getPendingOrdersByCustomerEmail_and_getPendingOrdersByVendorEmail();
    test_getCompletedOrdersByCustomerEmail_and_getCompletedOrdersByVendorEmail();

    testMarkDelivered();


    // Run Integration Tests - Get Cost Service
    testGetCost();
    
    // while (1) {
    //   var total = countTestsPassed + countTestsFailed;

    //   if (total === 111) {
    //     console.log("Total Test Cases: " +  (countTestsPassed + countTestsFailed));
    //     console.log("Passed Test Cases: " +  countTestsPassed);
    //     console.log("Failed Test Cases: " +  countTestsFailed);
        
    //     break;
    //   }
    // }
  };

  return (
    <ThemeProvider theme={theme}>
      {isSignUp && (
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
                >
                  <FormControlLabel
                    value="vendor"
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
                margin="small"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                autoFocus
                value={name}
                onChange={nameHandler}
                
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={mailHandler}
              />
              <TextField
                margin="normal"
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
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={passwordHandler}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                onClick={SignUpHandler}
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
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      )}
      {!isSignUp && <LoginPage />}
     
    </ThemeProvider>
  );
}


