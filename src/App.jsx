import { useState } from 'react'
import './App.css'
import InfoCard from "./infoCard.jsx";
import Counter from "./counter.jsx";

const assignments = [
    {
        id: 1,
        title: "Assignment 1",
        description: "Assignment 1 is to create a basic react website using vite"
    },
    {
        id: 2,
        title: "Assignment 2",
        description: "Assignment 2 is to upgrade that react website using jsx components"
    },
    {
        id: 3,
        title: "Assignment 3",
        description: "Assignment 3 is to add dynamic data structures to showcase react's reactivity"
    }
]


function App() {

  return (
    <>
      <h1>MI 449 React Exercise</h1>
      <div className="card">
        <Counter/>
      </div>
      <InfoCard assignments={assignments}/>
    </>
  )
}

export default App
