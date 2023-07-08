import { useState, useEffect } from 'react';

export function Meal() {
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
      <div className='meal container'>
        <div key={meal.idMeal}>
          <h3>{meal.strCategory}</h3>
          <div className='single-meal'>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              key={meal.idMeal}
              onClick={showInfo}
            />
            {showRecipe && <p>{meal.strInstructions}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
