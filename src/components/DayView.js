//Importing required modules and actions:
import React from "react";
//useDispatch- a hook from react-redux that provides access to the Redux store's dispatch function, allowing components to dispatch actions.
import { useDispatch } from "react-redux";
import { habitDone, habitNone, habitUnDone } from "../redux/features/habitSlice";

//DayView component displays a single day's information and allows user to interact with icons to update the habit status using Redux actions. 
const DayView = ({day}) => {
  // get today date
  const today=new Date();
  // get day from today date
  const todayDay=today.getDay();

  //the useDispatch hook to dispatch actions to the Redux store to manage the habit status for each day.
  const dispatch = useDispatch();

  // get date details from providing date
  const date=new Date(day.yyyy,day.mm,day.dd);

  // function call after click done icon
  const markToDone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit done action from reducer
    dispatch(habitDone(day.id));
  }
  

  // function call after click undone icon
  const markToUnDone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit undone action from reducer
    dispatch(habitUnDone(day.id))
  }
  

  // function call after click none icon
  const markToNone=()=>{
    if(day.id>todayDay){
      alert("You cannot change your next days status")
      return;
    }
    // call habit none action from reducer
    dispatch(habitNone(day.id));
  }
  


  return (
    <div className="day-container">
      <h5 className="text-center">{day.day}</h5>
      {/* The onClick event listeners are set on each icon to call the corresponding functions */}
      {/* The icons are styled differently when the habit is marked as done, undone, or none. */}
      <p className="text-center">{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <i className={day.isDone===true?"fa-solid fa-circle-check circle-icon active":"fa-solid fa-circle-check circle-icon"} onClick={markToDone}></i>
      <i className={day.isDone===false?"fa-solid fa-circle-xmark circle-icon active":"fa-solid fa-circle-xmark circle-icon"} onClick={markToUnDone}></i>
      <i className={day.isDone===""?"fa-solid fa-circle-minus circle-icon active":"fa-solid fa-circle-minus circle-icon"} onClick={markToNone}></i>
    </div>
  );
};

export default DayView;
