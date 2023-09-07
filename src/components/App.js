//Importing required modules:
import React from "react";
import { Route, Routes } from "react-router-dom";
//These components will be rendered when specific routes are matched.
import Home from "./Home";
import WeekView from "./WeekView";

const App = () => {
  
  
  return (
    <>
    {/* The Routes component is used as a wrapper to define different routes for the application. */}
    <Routes>
      {/* when the "/" route is matched, the Home component will be rendered */}
      <Route path="/" element={<Home/>}/>
      <Route path="/week-view" element={<WeekView/>}/>
    </Routes>
    </>
  );
};

export default App;
