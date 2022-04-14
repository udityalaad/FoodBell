import React,{useState} from 'react';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles.css';
import PriceCal from "../PriceCal";
import {ReactSession} from 'react-client-session';
import { OutlinedInput } from "@mui/material";
import { useTheme } from "@emotion/react";



const Message = ({title,message,onConfirm,subscribe}) => {
 const [showMessage,setShowMessage]=useState(false);
 
  const handleMessageClick=()=>{
   window.location.reload();
  }

  return (
    <div>
    <div className='backdrop' onClick={onConfirm}>
      <Card className='modal'>
        <header className='header'>
          <h2>{title}</h2>
        </header>
        <div className='content'>
          <p>{message}</p>
        </div>
      <footer className='actions'>
      <Button onClick={handleMessageClick}>Okay</Button>
      </footer>
      </Card>
  </div>
    </div>
  )
}

export default Message;


