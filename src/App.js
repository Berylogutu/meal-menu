import { SearchBar } from "./SearchBar";
import { Meal } from './Meal'
import {style} from './style.css'
import { useState } from "react";

export default function App() {

  return (
    
    <>
    <h3 className="text-red" >Hello, welcome to FoodZone</h3>
    <SearchBar />
    <Meal />
    </>
  )
}
