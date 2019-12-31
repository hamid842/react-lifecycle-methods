import React from "react";
import "./App.css";
import Constructor from "./lifecycleMethods/mounting/Constructor";
import GetDerivedStateFromProps from "./lifecycleMethods/mounting/GetDerivedStateFromProps";
import ComponentDidMount from "./lifecycleMethods/mounting/ComponentDidMount";
import Render from "./lifecycleMethods/mounting/Render";
function App() {
  return (
    <div className="App">
      <Constructor />
      <hr></hr>
      <GetDerivedStateFromProps fName="Mehdi" lName="Jalali" />
      <hr></hr>
      <Render />
      <hr></hr>
      <ComponentDidMount />
    </div>
  );
}

export default App;
