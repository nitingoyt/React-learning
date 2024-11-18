import { app } from "./firebase";
import { useState } from "react";
import "./App.css";
import Logout from "./pages/logout";
import AppHeader from "./components/Header/appHeader";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    
      <div className="app">
        <h1>Signup From</h1>
        <SignupPage />
        <AppHeader />
        <SigninPage />
      </div>
      
    </>
  );
}

export default App;
