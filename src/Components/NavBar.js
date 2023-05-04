import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'rc-slider/assets/index.css';
import Select from '@material-ui/core/Select';
import Slider from 'rc-slider';
import './CSS/NavBar.css';
import { MenuItem } from '@material-ui/core';


export default class NavBar extends Component {
    constructor(props){
        super(props);
        this.state = {format: 'hex'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({ format: e.target.value });
        this.props.handleChange(e.target.value);
    }
  render() {
    const { level, changeLevel } = this.props;
    const { format } = this.state
    return (
      <header className='NavBar'>
        <div className='logo'>
          <Link to="/">reactcolorpicker</Link>
        </div>
        {this.props.showingAllColors && (
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
        )}
        <Select value={format} onChange={this.handleChange}>
            <MenuItem value="hex" >HEX - #FFFFFF </MenuItem>
            <MenuItem value="rgb" >RGB - rgb(255, 255, 255) </MenuItem>
            <MenuItem value="rgba" >RGBA - rgba(255, 255, 255, 1.0) </MenuItem>
        </Select>
      </header>
    )
  }
}
