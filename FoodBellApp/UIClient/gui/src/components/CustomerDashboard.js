import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { CssBaseline } from "@mui/material";
import Home from "../pages/Home";
import {ReactSession} from 'react-client-session';
// import { makeStyles } from '@mui/material';

// const useStyles = makeStyles();

// const CustomerDashboard =()=>{
// return (
//   <>
//     <Home/>
// </>
// );
// };

// export default CustomerDashboard;

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
};

const createHTTPPostContent = (payload) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return options;
};

const CustomerDashboard = () => {
  var profileCheck = ReactSession.get("profile");
  if (profileCheck == null) {
    window.location.reload();
  }


  const [dataSet, setDataSet] = useState(false);
  const [datalist, setDatalist] = useState([]);

  if (!dataSet) {
    fetchData(
      `http://localhost:8090/vendors/getAllVendors`,
      createHTTPGetContent()
    ).then((result) => {
      console.log("Output 1234" + result);
      setDatalist(result);
      setDataSet(true);
    });
  }

  return (
    <div>
      {dataSet && <Home data={datalist} />}
      {!dataSet && <h1>Loading</h1>}
    </div>
  );
  
};

export default CustomerDashboard;
