import React, { Component } from "react";

export default class GetDerivedStateFromProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "Hamid",
      lastName: "Mohamadi"
    };
  }

  // The getDerivedStateFromProps() method is called right before
  // rendering the element(s) in the DOM.

  static getDerivedStateFromProps(props, state) {
    return {
      firstName: props.fName,
      lastName: props.lName
    };
  }

  render() {
    return (
      <div>
        <h3>
          <mark> GetDerivedStateFromProps : </mark>
        </h3>
        <h3>
          My name is {this.state.firstName} -{this.state.lastName}
        </h3>
      </div>
    );
  }
}
