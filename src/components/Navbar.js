//NavBar component represents the navigation bar of a habit tracking application
//Importing required modules and actions:
import React, { useState } from "react";
import { useEffect } from "react";
//useDispatch hook that provides access to the Redux store's dispatch function, allowing components to dispatch actions.
import { useDispatch } from "react-redux";
//It will be dispatched to add a new habit to the Redux store.
import { addHabit } from "../redux/features/habitSlice"; //action creator

const Navbar = ({ name }) => {
  // call use dispatch hook a variable call dispatch
  const dispatch=useDispatch();

  // change state acording time
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const date = new Date();
    setHour(date.getHours());
  }, []);
  
  // function for add habit called when user click on Save button
  const handleSave=()=>{
    const habitName=document.getElementById("habitName").value;
    //The addHabit action is dispatched to add the new habit to the Redux store
    dispatch(addHabit(habitName));
    alert("Your habit added successfully");
    //the input field is cleared by setting its value to an empty string.
    document.getElementById("habitName").value="";
  }

  return (
    <>
      <div className="navbar">
        <h3>
          {/* acording to hour state it shows morning,afternoon,evening and night */}
          {hour <= 12
            ? "Morning"
            : hour <= 17
            ? "Afternoon"
            : hour <= 21
            ? "Evening"
            : "Night"}
        </h3>
        <div className="right-nav">
          <h5>{name}</h5>
          <button
            className="addhabit-btn"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            <i className="fa-solid fa-plus"></i> Add Habits
          </button>
        </div>
      </div>

      {/* modal for add habit form */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                New Habit
              </h5>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="habitName"
                  placeholder="Enter habit name"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
