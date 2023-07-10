

export function Meal({meal, showRecipe, showInfo}) {

   
  return (
    <>
      <div className='meal-container'>

      { meal.map(({idMeal, strMeal, strMealThumb, strInstructions}) => {
        return (
          <>
          <h3>{strMeal}</h3>
      <div className='single-meal'>
      <img
            src={strMealThumb}
            alt={strMeal}
            key={idMeal}
            onClick={showInfo}
          />
          {showRecipe && <p>{strInstructions}</p>}
      </div>
    </>
        )
      })}
  
      </div>


    </>
  );


}
