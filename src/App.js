import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForms from "./components/TextForms";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether the darkmode is on or off
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#312d2d";
      showAlert("Darkmode has been activated", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Lightmode has been activated", "success");
    }
  };
  return(
    <>
      {/* <Navbar title="Textutils" aboutText= "About TextUtils"/> */}
      {/* <Router> */}

      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/"> */}
            <TextForms
              showAlert={showAlert}
              heading="Enter the text to analyze below"
              mode={mode}
            />
          {/* </Route>
        </Switch> */}
        
      </div>
     {/* </Router> */}

    </>
  );
}

export default App;
