import React from 'react'
import { useState } from 'react'

export function SearchBar(props) {
    const [searchItem, setSearchItem] = useState('')

    function onSearch(e) {
      
      setSearchItem(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log('submitted')

    }

  return (
    <>
    <form onSubmit={handleSubmit} >
        <input 
        type='text' 
        name='search'
        placeholder='Please enter meal name here'
        autoComplete='off'
        value={searchItem}
        onChange={onSearch}
        />
        <button type='submit'>Submit</button>
    </form>
    
    </>
  )
}

