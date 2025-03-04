import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")

  function handleAddFood() {
    const newFood = getNewSpicyFood();
    const newFoodArray = [...foods, newFood]
    setFoods(newFoodArray);
    console.log(newFood);
  }

  function handleFilterChange(event){
    setFilterBy(event.target.value)
  } 
    return (
    <div>
    <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select> 
    </div>
  )

  function handleLiClick(id){
    const newFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food, heatLevel: food.heatLevel + 1,
      };
    } else {
      return food;
    }
  });
    setFoods(newFoodArray)

  }

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
        {food.name} | Heat : {food.heat} | Cuisine : {food.cuisine}
    </li>
  ))

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>
        <li key>{foodList}</li>
      </ul>
      
    </div>
  );
}

export default SpicyFoodList;
