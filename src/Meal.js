

export function Meal({meal, showRecipe, showInfo}) {

   
  return (
    <>
      <div className='grid grid-cols-5 gap-2 p-5 bg-white w-[100%]'>

      { meal.map(({idMeal, strMeal, strMealThumb, strInstructions}) => {
        return (
          <div className='block justify-center items-center max-auto p-1  '>

      <img
      className="rounded-t-lg w-64 z-10"
            src={strMealThumb}
            alt={strMeal}
            key={idMeal}
            onClick={showInfo}
          />
          {showRecipe && <p>{strInstructions}</p>}
          <h3 className="flex italic py-2 bg-black text-white rounded-b-lg">{strMeal}</h3>
          

    </div>
        )
      })}
  
      </div>


    </>
  );


}
