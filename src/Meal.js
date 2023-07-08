

export function Meal({meal, showRecipe, showInfo}) {
 
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
