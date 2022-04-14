import React, { useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Grid,
  Avatar,
  Typography,
  Button,
} from "@mui/material";

import { Box, ThemeProvider, createTheme } from "@mui/system";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';




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


const SubscriptionTable = ({data}) => {
  const [showButton, setShowButton] = useState(null);
  const [selectedButton,setSelectedButton]=useState([0]);

  const navigate = useNavigate();

const handleClick=(e, row_data)=>{
    setShowButton(Number(e.target.id));
    // console.log(row_data.subscriptionId);

    fetchData(`http://localhost:8090/subscriptions/deactivateSubscription/${row_data.subscriptionId}`, createHTTPPostContent()).then(
      (resultMain2) => {
        if (JSON.parse(JSON.stringify(resultMain2)).error === "true") {
          window.alert(JSON.parse(JSON.stringify(resultMain2)).errorMessage);
        } else {
          // window.alert("Deactivation Succesfull");
          navigate('/index.html/Subscription')
        }
      }
    );
   
}

// console.log(selectedButton);

  return (
   
    <TableContainer
      component={Paper}
      sx={{margin: "20px 50px 20px 40px", maxWidth: 1200, align :'center'}}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{backgroundColor:"rgb(25, 118, 210)",color:"white",fontWeight: "bold"}}>
            <TableCell >
              Vendor Email
            </TableCell>
            <TableCell >
              Food Category
            </TableCell>
            <TableCell >
              Cuisine
            </TableCell>
            <TableCell>
              Available Days
            </TableCell>
            <TableCell >
              Meal Size
            </TableCell>
            <TableCell >
              Subscription Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row,index) => (
            <TableRow
              key={row.vendorEmail}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>
                <Grid container>
                  <Grid item lg={2}>
                    <Avatar
                      alt={row.vendorEmail}
                      src="."
                      sx={{ backgroundColor: "blue" }}
                    />
                  </Grid>
                  <Grid item lg={10}>
                    <Typography
                      sx={{
                        fontWeight: "bold",
                        color: "green",
                        margin: "15px",
                      }}
                    >
                      {row.vendorEmail}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      {row.vendorEmail}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      {row.vendorEmail}
                    </Typography>
                  </Grid>
                </Grid>
              </TableCell>
              <TableCell>{row.basicFoodSelection}</TableCell>
              <TableCell>{row.advancedFoodSelection}</TableCell>
              <TableCell>{row.availedDays[0]}</TableCell>
              <TableCell>{row.mealSize}</TableCell>
              <TableCell>
                
               <Button id={index} variant="contained" onClick={(e)=>handleClick(e, row)} style={{backgroundColor:(showButton===index ) ?"grey":"rgb(25, 118, 210)"}}>Deactivate</Button>
               
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    // </ThemeProvider>
  );
};

export default SubscriptionTable;
