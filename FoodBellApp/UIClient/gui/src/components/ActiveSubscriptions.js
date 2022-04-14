import React, { useState, useEffect }  from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,  { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from "@mui/material/Typography";
import { Link, Modal } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from "@mui/material/Container";
import { CssBaseline } from "@mui/material";
import HeaderVendor from "../components/Home/HeaderVendor";
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material/styles';
import axios from 'axios';

const tabstyle = {
    width: '90%',
    margin: "auto",
  };

  const themeCustom = createTheme({
    palette: {
      
      secondary: {
        // This is green.A700 as hex.
        main: '#D3D3D3',
      },
    },
  });

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:nth-of-type(even)': {
      backgroundColor: themeCustom.palette.secondary.main,
    },
  
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const scubscriptionHeading = {
    color: '#2d3436',
    padding: '12px',
    boxShadow: '0.5px 0.5px 0.5px lightgrey',
    fontSize: '2.5rem',
    fontFamily: 'ui-sans-serif',
  };

  const tableBoxShadow = {
    boxshadow : 'none',
    borderRadius : '20px !important',
  };

  const gridModalStyle = {
    boxShadow: '1px 1px 1px 1px lightgrey',
    margin: '5px',
  };

const tabrowbg = {
    backgroundColor: 'Orange',
    border: '1px solid #000',
  };

  const bgColorHome = {
    color : 'blueviolet',
  };

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const tabrow = {
    border: '1px solid #000',
  };

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

function createData(name, username, email, phone, website) {
    return { name, username, email, phone, website };
   }

   const rows = [];
 
export default function ActiveVendorSubscription() {
    const [data, setData] = useState([]);
    const [showModal, setShowTable] = useState(false);
    const [showSubscriptionTable, setShowsubScriptionTable] = useState({});
    const sessionData = JSON.parse(localStorage.getItem('__react_session__'));
    const payloadProfileData = sessionData.profile.profile;
    const email = payloadProfileData.vendorEmail;

    const handleClose = () => {
      setShowTable(false);
    }

    function getActiveSubscriptionByVendorEmail(){
      axios
      .get(`http://localhost:8090/subscriptions/getActiveSubscriptionByVendorEmail/${email}`)
      .then((res) => {
        setData(res.data);
        console.log('Result:', data);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    useEffect(() => {
        getActiveSubscriptionByVendorEmail();
      }, []);
    

    const handleCellClick = (e) => {
      axios
      .get(`http://localhost:8090/subscriptions/getSubscription/${e.target.textContent}`)
      .then((res) => {
        console.log('Result:', res);
        setShowsubScriptionTable(res.data);
        setShowTable(true);
      })
      .catch((error) => {
        console.log(error);
      });
    }

    const deactivateSubscription = (e) => {
      axios
      .post(`http://localhost:8090/subscriptions/deactivateSubscription/${e.target.id}`)
      .then((res) => {
        console.log('Result:', res);
        getActiveSubscriptionByVendorEmail();
      })
      .catch((error) => {
        console.log(error);
      });
    }

    return (
      <div style={{backgroundColor: '#f5f5dc'}}>  
        <HeaderVendor />
        <div style={{marginTop: 60}} className="order-page">
        <Typography variant='h4' align='center' style={scubscriptionHeading}> ACTIVE SUBSCRIPTIONS </Typography>
      <TableContainer style={tableBoxShadow} component={Paper}>
      <Table sx={{ minWidth: 700 }}  aria-label="customized table">
          <TableHead >
            <TableRow style={tabrowbg}>
              <StyledTableCell align='center'>Subscription Id</StyledTableCell>
              <StyledTableCell align='center'>Customer Email</StyledTableCell>
              <StyledTableCell align='center'>Start Date</StyledTableCell>
              <StyledTableCell align='center'>periodicity</StyledTableCell>
              <StyledTableCell align='center'></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell align='center'><Link onClick={handleCellClick}>{row.subscriptionId}</Link></StyledTableCell>
                <StyledTableCell align='center'>{row.customerEmail}</StyledTableCell>
                <StyledTableCell align='center'>{row.startDate}</StyledTableCell>
                <StyledTableCell align='center'>{row.periodicity}</StyledTableCell>
                <StyledTableCell align='center'>  <Button id={row.subscriptionId} onClick={deactivateSubscription} variant="contained"> DEACTIVATE </Button> </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> 
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <Grid container spacing={2} style={gridModalStyle}>
            <Grid item xs={4} style={bgColorHome}>
                Subscription Id:
            </Grid>
            <Grid item xs={8}>
                {showSubscriptionTable.subscriptionId}
            </Grid>
          </Grid>
          <Grid container spacing={2} style={gridModalStyle}>
            <Grid item xs={4} style={bgColorHome}>
              Customer Email:
            </Grid>
            <Grid item xs={8}>
                {showSubscriptionTable.customerEmail}
            </Grid>
          </Grid> 
          <Grid container spacing={2} style={gridModalStyle}>
            <Grid item xs={4} style={bgColorHome}>
                Start Date:
            </Grid>
            <Grid item xs={8}>
                {showSubscriptionTable.startDate}
            </Grid>
          </Grid> 
          <Grid container spacing={2} style={gridModalStyle}>
            <Grid item xs={4} style={bgColorHome}>
                Start Date:
            </Grid>
            <Grid item xs={8}>
                {showSubscriptionTable.startDate}
            </Grid>
          </Grid> 
          <Grid container spacing={2} style={gridModalStyle}>
            <Grid item xs={4} style={bgColorHome}>
                Basic Food Selection:
            </Grid>
            <Grid item xs={8}>
                {showSubscriptionTable.basicFoodSelection}
            </Grid>
          </Grid> 
          <Grid container spacing={2} style={gridModalStyle}>
            <Grid item xs={4} style={bgColorHome}>
                Advanced Food Selection:
            </Grid>
            <Grid item xs={8}>
                {showSubscriptionTable.advancedFoodSelection}
            </Grid>
          </Grid> 
          <Grid container spacing={2} style={gridModalStyle}>
            <Grid item xs={4} style={bgColorHome}>
                Periodicity: 
            </Grid>
            <Grid item xs={8}>
                {showSubscriptionTable.periodicity}
            </Grid>
          </Grid>         
          <Grid container spacing={2} style={gridModalStyle}>
            <Grid item xs={4} style={bgColorHome}>
                Availed Days:
            </Grid>
            <Grid item xs={8}>
                {showSubscriptionTable.availedDays}
            </Grid>
          </Grid> 
          <Grid container spacing={2} style={gridModalStyle}>
            <Grid item xs={4} style={bgColorHome}>
                Status:
            </Grid>
            <Grid item xs={8}>
                {showSubscriptionTable.active}
            </Grid>
          </Grid> 
          </Typography>
        </Box>
      </Modal>
        </div>
      </div>
    );
   }

