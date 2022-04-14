import { Button, Card, Typography } from '@mui/material'
import React from 'react'
import './styles.css';
import {Link} from "react-router-dom";

const PriceCal = ({price,addSubscription,onConfirm,foodCat,cuisineType,mealType}) => {
  console.log("hello at price");
  return (
      <div>
    <div className='backdropPrice'  >
    <Card className="modalPrice">
    <div className="priceHeader">
      Total Price :  $ {price}
      </div>
      <footer className='actionsPrice'>
      <Button variant="contained" onClick={addSubscription}>Subscribe</Button>
      <Button variant="contained" onClick={onConfirm}>Cancel</Button>
      </footer>
      </Card>
  </div>
  </div>
);

};

export default PriceCal;
    
