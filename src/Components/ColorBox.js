import React, { Component } from 'react'
import "./CSS/ColorBox.css"

export default class colorBox extends Component {
  render() {
    return (
      <div style={{background: this.props.background}} className='ColorBox'>
        <span>{this.props.name}</span>
        <span>MORE</span>
      </div>
    )
  }
}
