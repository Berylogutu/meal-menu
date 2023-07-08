import React from 'react'
import { useState } from 'react'
import { Meal } from './Meal'

export function SearchBar({searchTerm, onSearch, handleSubmit}) {
    

  return (
    <>
    <form onSubmit={handleSubmit} >
        <input 
        type='text' 
        name='search'
        placeholder='Search for meals or keywords'
        autoComplete='off'
        value={searchTerm}
        onChange={onSearch}
        />
        <button className='btn primary-btn' type='submit'>Search</button>
    </form>
    
    </>
  )
}

