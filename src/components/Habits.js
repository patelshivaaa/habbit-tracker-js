import React from 'react';
import Habit from './Habit'; //component used to display information about a single habit.
import { useSelector } from "react-redux";

// Habits functional component represents a list of habits in a habit tracking application
const Habits = () => {

  // call use selector hook to access the 'habits' state from the Redux store
  //The state["habits"] is used to access the habits state from the Redux store
  let habitsState=useSelector((state)=>state["habits"])
  
  return (
    <div className='habits'>
      {/* The map function is used to iterate over each habit in the habitsState array. */}
      {habitsState.map((habit)=><Habit habit={habit} key={habit.id}/>)}
    </div>
  )
}

export default Habits
