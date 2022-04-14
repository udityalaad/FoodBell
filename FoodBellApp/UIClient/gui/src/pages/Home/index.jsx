import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import EmptyView from "../../components/Common/EmptyView";

import FilterPanel from "../../components/Home/FilterPanel";
import Header from "../../components/Home/Header";
import List from "../../components/Home/List";
import SearchBar from "../../components/Home/SearchBar";
// import { dataList } from "../../constants";
import "./styles.css";

const arraysContainCommonElement = (array1, array2) => {
  var a = array1;
  a.forEach(function (entry) {
    console.log(entry);
  });


  for (var j = 0; j < array2.length; j++) {
    console.log(array2[j]);
    console.log(array1.includes(array2[j].toLowerCase()));

    if (array1.includes(array2[j].toLowerCase())) {
      return true;
    }
  }

  return false;
};

const Home = ({data}) => {
  let updatedList = data;
  console.log(updatedList);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedMealPlan, setSelectedMealPlan] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]);
  const [list, setList] = useState(updatedList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: "Indian" },
    { id: 2, checked: false, label: "Chinese" },
    { id: 3, checked: false, label: "Italian" },
  ]);

  const [weekdays, setWeekdays] = useState([
    { id: 1, checked: false, label: "Monday" },
    { id: 2, checked: false, label: "Tuesday" },
    { id: 3, checked: false, label: "Wednesday" },
    { id: 4, checked: false, label: "Thursday" },
    { id: 5, checked: false, label: "Friday" },
   
  ]);

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const handleselectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cusinesStateList = cuisines;
    const changeCheckedCuisines = cusinesStateList.map((item) =>
    item.id=== id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(changeCheckedCuisines);
  };

  const handleChangeCheckedWeekdays = (id) => {
    const weekdaysStateList = weekdays;
    const changeCheckedWeekdays = weekdaysStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setWeekdays(changeCheckedWeekdays);
  };

  const handleSelectMealPlan = (event, value) =>
    !value ? null : setSelectedMealPlan(value);

  const handleChangedPrice = (event, value) => setSelectedPrice(value);

  const handleChangedInput = (event, value) =>
    setSearchInput(event.target.value);

  const applyFilters = () => {
    

    // //Rating Filter
    // if (selectedRating) {
    //   updatedList = updatedList.filter(
    //     (item) => parseInt(item.rating) === parseInt(selectedRating)
    //   );
    // }

    // Category Filter
    if (selectedCategory) {
      console.log(selectedCategory)
      updatedList = updatedList.filter((item) =>
        item.vendorBasicFoodOptions.includes(selectedCategory)
      );
    }

    // Cuisine Filter
    const cuisinesChecked = cuisines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (cuisinesChecked.length) {
      updatedList = updatedList.filter(
        (item) =>
          arraysContainCommonElement(cuisinesChecked, item.vendorAdvancedFoodOptions)
         
      );
    }

      // Weekdays Filter
      const weekdaysChecked = weekdays
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());

    if (weekdaysChecked.length) {
      updatedList = updatedList.filter(
        (item) =>
          arraysContainCommonElement(weekdaysChecked, item.vendorAvailability)
      );
    }

    // // Price Filter
    // const minPrice = selectedPrice[0];
    // const maxPrice = selectedPrice[1];

    // updatedList = updatedList.filter(
    //   (item) => item.price >= minPrice && item.price <= maxPrice
    // );

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.vendorName.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    setList(updatedList);
    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cuisines, selectedPrice, searchInput,weekdays]);

  return (
 
    <div>
      <Header value={searchInput} changeInput={handleChangedInput}  />
      <div className="home" style={{marginTop: 60}}>
        <div className="home_panelList-wrap">
          <div className="home_panel-wrap">
            {/* Side Panels */}
            <FilterPanel
              selectedCategory={selectedCategory}
              selectToggle={handleSelectCategory}
              selectedRating={selectedRating}
              selectRating={handleselectRating}
              cuisines={cuisines}
              changeChecked={handleChangeChecked}
              weekdays={weekdays}
              changeCheckedWeekdays={handleChangeCheckedWeekdays}
              selectedMealPlan={selectedMealPlan}
              selectMealPlan={handleSelectMealPlan}
              selectedPrice={selectedPrice}
              changedPrice={handleChangedPrice}
            />
          </div>

          <div className="home_list-wrap">
            {/* List and Empty View */}
            {resultsFound ? <List list={list} /> : <EmptyView />}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;
