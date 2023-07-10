import React from 'react'

export function SearchBar({searchTerm, setSearchTerm, isLoading, handleSubmit}) {
    

  return (
    <>
    <form onSubmit={handleSubmit} >
        <input 
        type='text' 
        name='search'
        placeholder='Search for meals or keywords'
        autoComplete='off'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        disabled={isLoading}
        />
        <button 
        className='btn primary-btn' 
        type='submit'
        >Search</button>
    </form>
    
    </>
  )
}

