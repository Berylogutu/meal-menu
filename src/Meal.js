import React from 'react'
import { useState, useEffect } from 'react'

export function Meal() {

    const [meal, setMeal] = useState([''])
    const [imageInfo, setImageInfo] = useState([''])
 

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => setMeal(data.meals[0]))
        
    }, [])

    
    
    function showInfo(id) {
      

        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
            const meal = data.meals[0]
            setImageInfo(
                id === meal.idMeal ? meal.strInstructions : meal
            )})

    }

    

  return (
    <>
    <div className='meal container'>
        <div>
            <h3>{meal.strCategory}</h3>
            <div className='single-meal' >
            <img src={meal.strMealThumb} alt={meal.strMeal} key={meal.idMeal}onClick={() => showInfo(meal.idMeal)}/>
            {imageInfo && <p>{imageInfo.strInstructions}</p>}
            </div>
            


        </div>              
    </div>
    </>
    
  )
}

