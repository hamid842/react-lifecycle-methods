import React, { Component } from "react";

//The render() method is required,
//and is the method that actual outputs HTML to the DOM.
export default class Render extends Component {
  render() {
    return (
      <div>
        hello from <mark>render</mark>
      </div>
    );
  }
}
