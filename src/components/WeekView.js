//WeekView component displays information about a specific habit for the entire week, including each day's details
//Importing required modules and components
import React from "react";
import { Link } from "react-router-dom";
import DayView from "./DayView";
import Navbar from "./Navbar";
//Using useSelector to access the Redux state and getting the selected habit:
import { useSelector } from "react-redux";

const WeekView = () => {
  // call use selector hook to access the habits state from the Redux store and retrieves the selected habit's information based on the ID stored in the localStorage.
  //The habitsState is an array obtained from the Redux store and it contains data about multiple habits.
  let habitsState=useSelector((state)=>state.habits);
  
  // getting habit from habits state acording to local storage id and set it on habit
  let habit={}
  for(let i=0;i<habitsState.length;i++){
    if(habitsState[i].id===Number(localStorage.getItem("id"))){
      habit=habitsState[i];
    }
  }
  
  return (
    <>
      <Navbar name="Week View" />
      <h1 className="text-center" style={{textTransform:"capitalize"}}>{habit.name}</h1>
      {/* "days-container" is used to display the habit status for each day of the week. */}
      <div className="days-container">
        {/* The map function is used to iterate over each day's log in the habit.weekLog array and render a DayView component for each day. */}
        {habit.weekLog.map((day,index)=><DayView day={day} key={index}/>)}
      </div>
      <div className="d-grid gap-2 col-6 mx-auto mt-5">
        <button className="btn btn-primary" type="button">
          {/* it allows the user to navigate back to the main page  */}
          <Link to="/">Back to Detail View</Link>
        </button>
      </div>
    </>
  );
};

export default WeekView;
