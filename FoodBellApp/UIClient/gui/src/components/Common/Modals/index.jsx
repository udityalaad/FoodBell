import React from "react";
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


function getStyles(day, days, theme) {
  return {
    fontWeight:
    days.indexOf(day) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}


const Modals = ({onConfirm,selectedItem}) => {
  console.log(selectedItem);
  const theme = useTheme();
  const [foodCat, setFoodCat] = React.useState(null);
  const [foodCuisine, setFoodCuisine] = React.useState(null);
  const [mealPlan, setMealPlan] = React.useState(null);
  const [days, setAvailableDays] = React.useState([]);
  const [getPrice, setGetPrice] = React.useState(false);
  const [price, setPrice] = React.useState(0);
  

  const handleChangeFoodCat = (event) => {
    console.log(event);
    
  };
  const handleChangeFoodCuisine = (event) => {
   console.log(event);
  };
  const handleChangeMealPlan = (event) => {
    console.log(event);
  };

  const handleDaysChange = (event) => {
    const {
      target: { value },
    } = event;
    setAvailableDays(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

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

  
  const handleGetPrice = () => {
    console.log("1");
    console.log(mealPlan);
    console.log(foodCat);
    console.log(foodCuisine);
    console.log(days);

    fetchData(`http://localhost:8090/subscriptions/getCost/${mealPlan}/${foodCat}/${foodCuisine}/${days.length}`, createHTTPGetContent()).then(
      (result1) => {
        console.log("1");
        console.log("1");
        console.log(`http://localhost:8090/subscriptions/getCost/${mealPlan}/${foodCat}/${foodCuisine}/${days.length}`);
        setPrice(result1);
        console.log(result1);
        setGetPrice(true);
       }
     );
      }
  

  function findToday () {
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
      return today;
  }

  const handleAddSubscription=()=>{
    var profileCheck = ReactSession.get("profile");

    /* Add Subscription Negative 2 */
    var payload3 = {
      "vendorEmail": selectedItem.vendorEmail,
      "customerEmail": profileCheck.profile.customerEmail,
      "startDate": findToday(),
      "basicFoodSelection": foodCat,
      "advancedFoodSelection": foodCuisine,
      "mealSize": mealPlan,
      "availedDays": days,
      "active": "true"
    };

  

    fetchData("http://localhost:8090/subscriptions/addSubscription", createHTTPPostContent(payload3)).then(
      (result3) => {
        if (JSON.parse(JSON.stringify(result3)).error===true){
        console.log(result3);
          window.alert(payload3);
        }
        else{
          
        }
       
        window.location.reload();
      }
    );
    }

  return (
    
    <div>
    {!getPrice &&<div className='backdrop'  >
      <Card className="modal"> 
      <FormControl fullWidth   >
        <InputLabel id="demo-simple-select-label" style={{margin:"20px 20px 20px 20px"}}>Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={foodCat}
          label="Category"
          onChange={handleChangeFoodCat}
          style={{margin:"20px 20px 20px 20px"}}
        >
        {selectedItem.vendorBasicFoodOptions.map((foodOpt) =>
        <MenuItem value={foodOpt} onClick={()=>setFoodCat(foodOpt)} key={foodOpt}>{foodOpt}</MenuItem>
        )}
         
        </Select>
      
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{margin:"20px 20px 20px 20px"}}>Cuisine</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={foodCuisine}
          label="Cuisine"
          onChange={handleChangeFoodCuisine}
          style={{margin:"20px 20px 20px 20px"}}
        >
        {selectedItem.vendorAdvancedFoodOptions.map((cuisineType)=><MenuItem value={cuisineType} onClick={()=> setFoodCuisine(cuisineType)} key={cuisineType}>{cuisineType}</MenuItem>)}
        </Select>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" style={{margin:"20px 20px 20px 20px"}}>Meal Plan</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={mealPlan}
          label="MealPlan"
          onChange={handleChangeMealPlan}
          style={{margin:"20px 20px 20px 20px"}}
        >
        {selectedItem.vendorOfferedSize.map((mealSize)=><MenuItem value={mealSize} onClick={()=> setMealPlan(mealSize)} key={mealSize}>{mealSize}</MenuItem>)}
        </Select>
      </FormControl>
      <div>
      <FormControl fullWidth>
        <InputLabel id="demo-multiple-name-label" style={{margin:"20px 20px 20px 20px"}}>Days</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          multiple
          value={days}
          onChange={handleDaysChange}
          input={<OutlinedInput label="Days" />}
          // MenuProps={MenuProps}
          style={{margin:"20px 20px 20px 20px"}}
        >
          {selectedItem.vendorAvailability.map((day) => (
            <MenuItem
              key={day}
              value={day}
              // style={getStyles(day, days, theme)}
            >
              {day}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
        <footer className='actions'>
        <Button variant="contained" onClick={handleGetPrice} disabled={!foodCat || !foodCuisine || !mealPlan || !days} style={{margin:"10px"}}>Get Price</Button>
        <Button variant="contained" onClick={onConfirm} style={{margin:"10px"}}>Back</Button>
        </footer>
        </Card>
    </div>}
    {getPrice && <PriceCal price={price} addSubscription={handleAddSubscription} onConfirm={onConfirm} foodCat={foodCat} cuisineType={foodCuisine} mealType={mealPlan} />}
    </div>
  );
};

export default Modals;




