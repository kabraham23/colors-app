import React, { Component } from 'react'
import "./CSS/ColorBox.css"
import { Link } from 'react-router-dom';
import {CopyToClipboard} from "react-copy-to-clipboard";
import chroma from 'chroma-js';

export default class colorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState(){
    this.setState({copied: true}, () => {
      setTimeout(() => this.setState({copied: false}), 1500);
    })
  }
  render() {
    const { name, background, paletteId, id, showLink } = this.props;
    const {copied} = this.state
    const isDarkColor = chroma(background).luminance() <= 0.07;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
      <div style={{background}} className='ColorBox'>
      <div style={{background}} className={`copy-overlay ${copied && 'show'}`} />
      <div className={`copy-msg ${copied && 'show'}`}>
        <h1>copied!</h1>
        <p>{this.props.background}</p>
      </div>
        <div className='copy-container'>
          <div className='box-content'>
            <span className={isDarkColor && 'light-text'}>{name}</span>
          </div>
          <button className='copy-button'>Copy</button>
        </div>
        {showLink && (
        <Link to={`/palette/${paletteId}/${id}`} onClick={e => e.stopPropagation()}>
          <span className='see-more'>More</span>
        </Link>
        )}
      </div>
      </CopyToClipboard>
    )
  }
}