import React, { Component } from "react";

// In the shouldComponentUpdate() method you can return a Boolean value that specifies
// whether React should continue with the rendering or not.

// این متد برای زمانی است که آیا اجازه بدهیم که کامپوننت با پراپرتی جدید رندر بشود یا نه

export default class ComponentShouldUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: "red"
    };
  }

  changeColor = () => {
    this.setState({
      color: "yellow"
    });
  };

  shouldComponentUpdate(nextProps) {
    return nextProps.color != this.state.color;
    // or return false/true
  }

  render() {
    const { color } = this.state;
    return (
      <div>
        <h3>
          <mark>ComponentShouldUpdate</mark>
        </h3>

        <h3>My favorite color is {color}</h3>
        <button onClick={this.changeColor}>Change color</button>
      </div>
    );
  }
}
