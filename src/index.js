// This code is a JavaScript code snippet that uses the React library to render a React application on a web page.
// Importing required modules:
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
//React Router component that provides client-side routing functionality
import { BrowserRouter as Router } from "react-router-dom";
//store is an instance of a Redux store, which is used to manage the application's state.
import store from "./redux/store";
// Provider is a Redux component that wraps the entire application and allows it to access the Redux store.
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {/* It renders the App component wrapped in a Provider to allow access to the Redux store */}
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
