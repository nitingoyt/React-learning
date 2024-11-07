import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //dark mode enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title={"TextUtils"}
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About />}>   
          </Route> 
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} >
          </Route>
        </Routes>   
      </div>
      </Router>
    </>
  );
}

export default App;
