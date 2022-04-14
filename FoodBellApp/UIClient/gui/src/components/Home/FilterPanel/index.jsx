import React from "react";
import { categoryList, ratingList, mealPlanList } from "../../../constants";
import CheckboxProton from "../../Common/CheckboxProton";
import FilterListToggle from "../../Common/FilterListToggle";
import SliderProton from "../../Common/SliderProton";
import "./styles.css";

const FilterPanel = ({selectedCategory, selectToggle, selectedRating,selectRating,cuisines,changeChecked,selectedMealPlan,selectMealPlan,selectedPrice,changedPrice,weekdays,changeCheckedWeekdays}) => {
  
  
  return (
    <div>
      {/* category */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>

      {/* cuisine */}
      <div className="input-group">
        <p className="label">Cuisines</p>
        {cuisines.map((cuisine) => (
          <CheckboxProton 
          key={cuisine.id}
          optionsAvailable={cuisine} 
          changeChecked={changeChecked}
          />
        ))}
      </div>

      {/* Weekdays*/}
      <div className="input-group">
        <p className="label">Weekdays</p>
        {weekdays.map((weekday) => (
          <CheckboxProton 
          key={weekday.id}
          optionsAvailable={weekday} 
          changeChecked={changeCheckedWeekdays}
          />
        ))}
      </div>

      {/* mealplan */}
      <div className="input-group">
        <p className="label">MealPlan</p>
        <FilterListToggle
          options={mealPlanList}
          value={selectedMealPlan}
          selectToggle={selectMealPlan}
        />
      </div>

      {/* rating */}
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>

        {/* pricing*/}
        <div className="input-group">
        <p className="label-range">Price Range</p>
        <SliderProton 
        value={selectedPrice}
        changedPrice={changedPrice}
        />
      </div>


    </div>
  );
};

export default FilterPanel;
