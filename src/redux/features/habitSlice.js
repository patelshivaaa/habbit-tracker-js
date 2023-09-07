//A Redux slice here habitSlice is a collection of reducer logic and action creators that manage a specific piece of the application's state.
import { createSlice } from "@reduxjs/toolkit";
let id = 1; //track the unique ID of each habit


export const habitSlice = createSlice({
  name: "habits",
  initialState: [],
  reducers: {
    //These reducers specify how the state should be updated in response to dispatched actions.
    addHabit: (state, action) => {
      // Reducer logic for adding a new habit 
      const today=new Date();
      let day=today.getDate();
      const month= today.getMonth();
      const year =today.getFullYear();

      const habit = {
        id: id++,
        name: action.payload,
        weekLog: [
          {
            id: 0,
            day: "Sunday",
            dd:day,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 1,
            day: "Monday",
            dd:day+1,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 2,
            day: "Tuesday",
            dd:day+2,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 3,
            day: "Wednesday",
            dd:day+3,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 4,
            day: "Thursday",
            dd:day+4,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 5,
            day: "Friday",
            dd:day+5,
            mm:month,
            yyyy:year,
            isDone: "",
          },
          {
            id: 6,
            day: "Saturday",
            dd:day+6,
            mm:month,
            yyyy:year,
            isDone: "",
          },
        ],
      };
      const tempHabits = [...state, habit];
      return tempHabits;
    },
    
    //Each reducer takes the current state (state) and an action object as arguments 
    //and returns the new state after applying the required changes.

    deleteHabit: (state, action) => {
      //Reducer logic for deleting a habit goes here
      const tempHabits = state.filter((habit) => habit.id !== action.payload);
      return tempHabits;
    },
    habitDone: (state, action) => {
      //Reducer logic for marking a habit as done
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone=true;
        }
      }
      return tempHabits;
    },

    habitUnDone: (state, action) => {
      //Reducer logic for marking a habit as undone
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone=false;
        }
      }
      return tempHabits;
    },

    habitNone: (state, action) => {
      //Reducer logic for setting a habit as none
      let tempHabits = state;
      for (let i = 0; i < tempHabits.length; i++) {
        if (tempHabits[i].id === Number(localStorage.getItem("id"))) {
          tempHabits[i].weekLog[action.payload].isDone="";
        }
      }
      return tempHabits;
  },
}});

// Action creators are generated for each case reducer function
export const { addHabit, deleteHabit,habitDone,habitUnDone,habitNone } = habitSlice.actions;

//the reducer function is exported to be used in the Redux store.
export default habitSlice.reducer;
