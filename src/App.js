import React from "react";
import "./App.css";
import Constructor from "./lifecycleMethods/mounting/Constructor";
import GetDerivedStateFromProps from "./lifecycleMethods/mounting/GetDerivedStateFromProps";
import ComponentDidMount from "./lifecycleMethods/mounting/ComponentDidMount";
import Render from "./lifecycleMethods/mounting/Render";
import GetDerivedStateFromProps2 from "./lifecycleMethods/updating/GetDerivedStateFromProps2";
import ComponentShouldUpdate from "./lifecycleMethods/updating/ComponentShouldUpdate";
function App() {
  return (
    <div className="App">
      <h1>=======MOUNTING=======</h1>
      <Constructor />
      <hr></hr>
      <GetDerivedStateFromProps fName="Mehdi" lName="Jalali" />
      <hr></hr>
      <Render />
      <hr></hr>
      <ComponentDidMount />
      <hr></hr>
      <h1>=======UPDATING=======</h1>
      <GetDerivedStateFromProps2 favcol="yellow" />
      <hr></hr>
      <ComponentShouldUpdate />
      <hr></hr>
    </div>
  );
}

export default App;
