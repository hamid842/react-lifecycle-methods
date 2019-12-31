import React, { Component } from "react";

export default class GetDerivedStateFromProps2 extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }
  static getDerivedStateFromProps(props, state) {
    return { favoriteColor: props.favcol };
  }
  changeColor = () => {
    this.setState({ favoriteColor: "blue" });
  };
  render() {
    return (
      <div>
        <h3>
          <mark>getDerivedStateFromProps :</mark>
        </h3>
        <h3>My Favorite Color is {this.state.favoriteColor}</h3>
        <button type="button" onClick={this.changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
