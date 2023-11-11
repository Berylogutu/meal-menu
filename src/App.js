import { SearchBar } from "./SearchBar";
import { Meal } from './Meal'
import './style.css'
import { useState, useEffect } from "react";

const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

export default function App() {

  const [meal, setMeal] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function searchMeal(){
    setIsLoading(true)
    const url = apiUrl + searchTerm;
    const res = await fetch(url);
    const data = await res.json();

    setMeal(data.meals)

    console.log(data.meals)
    setIsLoading(false)

  }   




  useEffect(() => {
    searchMeal();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps


  function handleSubmit(e) {
      e.preventDefault()

      searchMeal()


  }


 return (
    
    <div className="px-2">
    <h1 className="font-bold flex text-center items-center justify-center tracking-wider p-3 text-white text-xl" >
      Hello, welcome to FoodZone
    </h1>
    
    <SearchBar
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
    handleSubmit={handleSubmit}
    isLoading={isLoading}
    
    />

    <div>
      {meal ?    
      <Meal 
        key={meal.idMeal}
        meal={meal}
              
      /> : 'Meal not found'}
    </div>



    
    </div>
  )
}
