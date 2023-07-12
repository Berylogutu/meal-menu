import { SearchBar } from "./SearchBar";
import { Meal } from './Meal'
import './style.css'
import { useState, useEffect } from "react";

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

export default function App() {

  const [meal, setMeal] = useState([]);
  const [showRecipe, setShowRecipe] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)

    

  useEffect(() => {
    searchMeal()
  }, []);

  const searchMeal = async () => {
    setIsLoading(true)
    const url = apiUrl + searchTerm;
    const res = await fetch(url);
    const data = await res.json();

    setMeal(data.meals)

    console.log(data.meals)
    console.log(data.meals)
    setIsLoading(false)

  }



  function handleSubmit(e) {
      e.preventDefault()

      searchMeal()


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
    
    <div className="px-2">
    <h1 className="font-bold flex text-center items-center justify-center tracking-wider p-3 text-white text-xl" >Hello, welcome to FoodZone</h1>
    
    <SearchBar
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
    handleSubmit={handleSubmit}
    isLoading={isLoading}
    
    />

    <div>
      {meal ?     <Meal 
    meal={meal}
    showRecipe={showRecipe}
    showInfo={showInfo}
          
    /> : 'Meal not found'}
    </div>



    
    </div>
  )
}
