import React, { Component } from "react";

// The constructor() method is called before anything else,
// when the component is initiated, and it is the natural
//place to set up the initial state and other initial values.

export default class Constructor extends Component {
  //The constructor method is called,
  //by React, every time you make a component:

  constructor(props) {
    super(props);

    this.state = {
      favoriteColor: "red"
    };
  }

  render() {
    return (
      <div>
        <h3>Constructor method : </h3>
        <h3>My favorite color is {this.state.favoriteColor}</h3>
      </div>
    );
  }
}
