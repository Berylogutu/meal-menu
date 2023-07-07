import { SearchBar } from "./SearchBar";
import { Meal } from './Meal'
import {style} from './style.css'
import { useState } from "react";

export default function App() {

  return (
    
    <>
    <div className="text-red" >Hello, welcome to FoodZone</div>
    <SearchBar />
    <Meal />
    </>
  )
}
