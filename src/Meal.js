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

    function showInfo() {
        fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => setImageInfo(data.meals[0]))

    }

  return (
    <>
    <div className='meal container'>
        <div key={meal.idMeal}>
            <h3>{meal.strCategory}</h3>
            <div className='single-meal' >
            <img src={meal.strMealThumb} alt={meal.strMeal} onClick={showInfo}/>
            {imageInfo && <p>{imageInfo.strInstructions}</p>}
            </div>
            


        </div>              
    </div>
    </>
    
  )
}

