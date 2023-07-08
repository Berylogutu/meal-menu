import { SearchBar } from "./SearchBar";
import { Meal } from './Meal'
import './style.css'
import { useState, useEffect } from "react";

export default function App() {

  const [meal, setMeal] = useState({});
  const [showRecipe, setShowRecipe] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

    

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(data => setMeal(data.meals[0]))
      .catch(err => console.log(err));
  }, []);

  function onSearch(e) {
     console.log(e.target.value) 
    setSearchTerm(e.target.value)
  }

  function handleSubmit(e, searchTerm) {
      e.preventDefault()
    if(searchTerm === '' ){
      return 'Please enter a serach term'
    } else if (searchTerm === null) {
      return 'Sorry, meal not found'
    } else if(searchTerm === meal.strCategory) {
      setMeal(prevMeal => ({searchTerm}))
    }

  }



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
    
    <SearchBar
    searchTerm={searchTerm}
    onSearch={onSearch}
    handleSubmit={handleSubmit}
    
    />
    <Meal 
    meal={meal}
    showRecipe={showRecipe}
    showInfo={showInfo}
    
    />
    </>
  )
}
