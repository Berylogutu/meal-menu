import React from 'react'


export function SearchBar({searchTerm, setSearchTerm, isLoading, handleSubmit}) {
    

  return (
    <>
    <form className='p-10' onSubmit={handleSubmit} >
        <input className='overflow-hidden w-[75%] p-1 rounded-lg outline-none'
        type='text' 
        name='search'
        placeholder='Search for meals or keywords'
        autoComplete='off'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        disabled={isLoading}
        />
        <button 
        className='btn primary-btn bg-white p-1 rounded-lg mx-1' 
        type='submit'
        >Search
 
        </button>
    </form>
    
    </>
  )
}

