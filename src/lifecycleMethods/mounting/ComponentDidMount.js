import React, { Component } from "react";

//The componentDidMount() method is called after the component is rendered.
export default class ComponentDidMount extends Component {
  constructor(props) {
    super(props);
    this.state = { favoriteColor: "red" };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoriteColor: "yellow" });
    }, 2000);
  }
  render() {
    return (
      <div>
        <h3>
          <mark>componentDidMount</mark>
        </h3>
        <h3>My Favorite Color is {this.state.favoriteColor}</h3>
      </div>
    );
  }
}
