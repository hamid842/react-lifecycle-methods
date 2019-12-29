import React from "react";
import "./App.css";
import Constructor from "./lifecycleMethods/mounting/Constructor";
import GetDerivedStateFromProps from "./lifecycleMethods/mounting/GetDerivedStateFromProps";

function App() {
  return (
    <div className="App">
      <Constructor />
      <GetDerivedStateFromProps fName="Mehdi" lName="Jalali" />
    </div>
  );
}

export default App;
