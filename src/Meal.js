

export function Meal({meal}) {

   
  return (
    <>
      <div className='grid grid-cols-5 gap-2 p-5 bg-white w-[100%]'>

      { meal.map(({idMeal, strMeal, strMealThumb, strInstructions}) => {
        return (
          <div className='block justify-center items-center max-auto p-1 '>

      <img
      className="rounded-t-lg w-64 z-10"
            src={strMealThumb}
            alt={strMeal}
            key={idMeal}
      />
      <div className=' py-2 bg-black text-white rounded-b-lg max-w-lg max-h-lg'>
        <h3 className="flex">{strMeal}</h3>
        <a href={'https://www.themealdb.com/meal/' + idMeal} target='_blank' rel="noreferrer" className="italic text-sm bg-orange" >See Recipe</a>
      </div>
          
          

    </div>
        )
      })}
  
      </div>


    </>
  );


}
