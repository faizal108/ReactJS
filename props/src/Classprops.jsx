import React, { Component } from 'react'

export default class Classprops extends Component {
  render() {
    return (
      <div>
        Hello {this.props.name} Welcome to my React app!!
        <address>{this.props.place}</address>
      </div>
    )
  }
}
