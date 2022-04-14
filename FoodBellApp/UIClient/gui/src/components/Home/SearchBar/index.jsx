import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './styles.css';
const SearchBar = ({value,changeInput}) => {
  return (
    
   
    <div className='searchBar-wrap'>
    <SearchIcon className='searchBar-icon'/>
    <input
        type='text'
        placeholder='Search the Vendors'
        value={value}
        onChange={changeInput}

    />
    </div>
  )
}

export default SearchBar
