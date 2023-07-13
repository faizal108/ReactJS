import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  UpdateHover = ()=>{
    this.setState({count : this.state.count + 1})
  }
  render() {
    const { count } = this.state;
    return (
      <div>
        <button onMouseOver={this.UpdateHover}> You hover {count} time.</button>
      </div>
    );
  }
}

export default Counter;
