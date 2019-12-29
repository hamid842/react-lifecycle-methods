import React, { Component } from "react";

export default class GetDerivedStateFromProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteColor: "red"
    };
  }

  // The getDerivedStateFromProps() method is called right before
  // rendering the element(s) in the DOM.

  static getDerivedStateFromProps(props, state) {
    return {
      favoriteColor: props.favColor
    };
  }

  render() {
    return (
      <div>
        <h3>In GetDerivedState component :</h3>
        <h3>My favorite color is {this.state.favoriteColor}</h3>
      </div>
    );
  }
}
