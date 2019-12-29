import React from "react";
import "./App.css";
import Constructor from "./lifecycleMethods/mounting/Constructor";
import GetDerivedStateFromProps from "./lifecycleMethods/mounting/GetDerivedStateFromProps";

function App() {
  return (
    <div className="App">
      <Constructor />
      <GetDerivedStateFromProps favColor="yellow" />
    </div>
  );
}

export default App;
