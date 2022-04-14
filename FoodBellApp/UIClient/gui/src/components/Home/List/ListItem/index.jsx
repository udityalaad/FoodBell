import { SignalCellularNull } from "@mui/icons-material";
import { Card, CardActionArea, Fab } from "@mui/material";
import React, { useState } from "react";
import Modals from "../../../Common/Modals";
import "./styles.css";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import LocationOnIcon from '@mui/icons-material/LocationOn';

// const ListItem = ({
//   item: { coverSrc, title, price, deliveryFee, serviceTime, rating },
// }) => (
//   <div className='listItem-wrap'>
//     {/* <img src={coverSrc} alt='' /> */}
//     <header>
//       <h4>{title}</h4>
//       <span>🌟{rating}</span>
//     </header>
//     <footer>
//       <p>
//         <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
//       </p>
//       <p>
//         <b>${price}</b>
//       </p>
//     </footer>
//   </div>
// );

// export default ListItem;

const ListItem = ({
  item: {
    vendorName,
    vendorEmail,
    vendorPhone,
    vendorOfferedSize,
    vendorAvailability,
    address,
  },
  modalOpen,
}) => {
  return (
    <Card onClick={modalOpen}>
      <CardActionArea>
        <div className="card">
          <div className="top">
            <p className="name">{vendorName}</p>

            <span className="name">
              <CallIcon />
              {vendorPhone}
            </span>
            {/* <img className="circle-img" src={props.img} alt="avatar_img" /> */}
          </div>
          <div className="bottom">
            <div className="iconText">
              <EmailIcon />
              {vendorEmail}
            </div>
            <div className="iconLoc">
              <LocationOnIcon />
              {address.city},{address.province}
            </div>
            {/* <div className="info">{vendorOfferedSize}
            </div> */}
            <div className="info">
              {vendorOfferedSize.map((size) => (
                <Button
                  variant="outlined"
                  sx={{ borderRadius: "8px",color:"#25A69A",margin:"2px"}}
                >
                  {size}
                </Button>
              ))}
            </div>

            {/* <div className="info">{vendorAvailability}</div> */}
            <div className="info">
              {vendorAvailability.map((day) => (
              
                <Fab
                  variant="contained"
                  size="small" 
                  sx={{backgroundColor:"beige",color:"black",margin:"5px"}}
                >
                  {day.slice(0, 3)}
                </Fab>
              
              ))}
            </div>
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default ListItem;
