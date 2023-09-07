//the Habit component, which represents a single habit in the habit tracking application

import React from "react";
import { useDispatch } from "react-redux"; //provides access to the Redux store's dispatch function
import { deleteHabit } from "../redux/features/habitSlice";
import { useNavigate } from "react-router-dom"; //hook for allowing components to navigate to different routes.

const Habit = ({habit}) => {
  const today=new Date();
  const todayDay=today.getDay();
  //countDone is initialized to 0 and will be used to keep track of how many days the habit has been completed.
  let countDone=0;
  //loop for tracking habit done count
  for (let i = 0; i < habit.weekLog.length; i++) {
    if(habit.weekLog[i].isDone===true){
      countDone++;
    }
  }
  
  // call use navigate hook from react-router-dom in a navigate varriable 
  const navigate=useNavigate();

  // call use dispatch hook a variable call dispatch
  const dispatch=useDispatch();

  // function call after click delete button on habit list
  const handleDelete=()=>{
    //dispatch function allows us to dispatch the deleteHabit action
    dispatch(deleteHabit(habit.id));
    alert("your habit deleted successfully")
  }

  // this function call after clicking week view button
  // this function used for set current habit id to localstorage and navigate to its weekview page
  const setId=()=>{
    localStorage.setItem("id",habit.id)
    navigate("/week-view");
  }

  // The JSX returned by the Habit component renders a single habit's information in a styled container
  return (
    <div className="habit">
      <div className="habit-left">
        <i className="fa-solid fa-hashtag"></i>
        <div>
          <h4 style={{textTransform:"capitalize"}}>{habit.name}</h4>
          <p className="day-complete">{countDone}/{todayDay+1} days</p>
        </div>
      </div>
      <div className="habit-right">
        {/* calling the setId function to navigate to the week view page. */}
        <div className="log-btn" onClick={setId}>
          <i className="fa-solid fa-calendar-week" ></i>
          Week View
        </div>
        <i className="fa-solid fa-trash" onClick={handleDelete}></i>
      </div>
    </div>
  );
};

export default Habit;
