// import { Card } from '@mui/material';
import React, { useState } from 'react';
import Modals from '../../Common/Modals';
import ListItem from './ListItem';
import './styles.css';

const List = ({ list }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleModalOpen = (item) => {
    // console.log(item);
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
    
  };


  return(
  <div className='list-wrap'>
    {list.map((item) => (
    
      <ListItem modalOpen={()=>handleModalOpen(item)} key={item.vendorId} item={item} />
      
    
    ))}
  
  {openModal && <Modals onConfirm={handleModalClose} selectedItem={selectedItem} />}
  </div>
);
    }

export default List;

