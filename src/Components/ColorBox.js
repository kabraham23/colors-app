import React, { Component } from 'react'
import "./CSS/ColorBox.css"
import {CopyToClipboard} from "react-copy-to-clipboard";

export default class colorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <CopyToClipboard text={background}>
      <div style={{background}} className='ColorBox'>
        <div className='copy-container'>
          <div className='box-content'>
            <span>{name}</span>
          </div>
          <button className='copy-button'>Copy</button>
        </div>
        <span className='see-more'>More</span>
      </div>
      </CopyToClipboard>
    )
  }
}