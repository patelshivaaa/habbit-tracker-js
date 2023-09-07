//This code sets up a Redux store using the @reduxjs/toolkit library
import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './features/habitSlice'; //Redux reducer function imported

const store=configureStore({
  //reducer to manage habits slice of application's state
  //all state changes related to habits will be handled by this reducer
  reducer: {
    habits: habitReducer,
  },
});
export default store;