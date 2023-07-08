import { SearchBar } from "./SearchBar";
import { Meal } from './Meal'
import {style} from './style.css'
import { useState, useEffect } from "react";

export default function App() {

  const [meal, setMeal] = useState({});
  const [showRecipe, setShowRecipe] = useState(false)

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => setMeal(data.meals[0]))
      .catch(err => console.log(err));
  }, []);



  function showInfo(e) {
    const { src, alt } = e.target;

   
      setMeal(prevMeal => ({
        ...prevMeal,
        strInstructions: prevMeal.idMeal === meal.idMeal ? meal.strInstructions : prevMeal.strInstructions
      }));
    setShowRecipe(true)
    
  }

  return (
    
    <>
    <h3 className="text-red" >Hello, welcome to FoodZone</h3>
    <SearchBar />
    <Meal 
    meal={meal}
    showRecipe={showRecipe}
    showInfo={showInfo}
    
    />
    </>
  )
}
