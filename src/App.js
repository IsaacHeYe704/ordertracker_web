import "./App.css";
import React from "react";
//components

import { withRouter, Route } from "react-router-dom";
import Home from "./Home";

function App(props) {
  
 
  return (
    <div className="App">
      <Route
        path="/:orderNumber"
        children={<Home />}
      />
      <Route
        path="/"
        exact
        children={<><h1 > you must add your order number to the link, like this: <br></br><span>https://ruachtracker.web.app/<label style={{color:"red"}}>611261389</label></span></h1>
                  
                  </>
        }
      />
    </div>
  );
}

export default withRouter(App);
