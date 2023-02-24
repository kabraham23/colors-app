import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './CSS/NavBar.css';


export default class NavBar extends Component {
  render() {
    const {level, changeLevel} = this.props;
    return (
      <header className='NavBar'>
        <div className='logo'>
            <a href="#">colorpicker</a>
            </div>
            <div className='slider-container'>
                <span>Level: {level}</span>
            <div className='slider'>
          <Slider 
          defaultValue={level} 
          min={100} 
          max={900} 
          step={100} 
          onChange={changeLevel} />
        
        </div>
        </div>
      </header>
    )
  }
}
