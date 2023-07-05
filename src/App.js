import { SearchBar } from "./SearchBar";
import { Meal } from './Meal'
import {style} from './style.css'
import { useState } from "react";

export default function App() {

  return (
    
    <>
    <h4>Hello, welcome to FoodZone</h4>
    <SearchBar />
    <Meal />
    </>
  )
}
