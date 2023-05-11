import React, { Component } from 'react';
import { Button, Typography } from "@material-ui/core";
import { ChromePicker } from 'react-color';


class NewColorPicker extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     currentColor: '#fff',
        //     colors: []
        // };
    }
    
    // handleChangeComplete = (newColor) => {
    //     this.setState({currentColor: newColor.hex})
    // }

    // addNewColor = (newColor) => {
    //     this.setState({ colors: [...this.state.colors, this.state.currentColor] }, () => console.log(this.state.colors))
        
    // }

    render() {
        return(
            <div className='ColorPicker'>
            <Typography variant="h4">Design Your Palette</Typography>
            <ChromePicker color={ this.props.currentColor } onChangeComplete={ this.props.handleChangeComplete } />
            <Button variant="contained" onClick={this.props.addNewColor} style={{backgroundColor: this.props.currentColor}}>Add Color</Button>
            <Button variant="contained" color='secondary'>Clear Palette</Button>
        </div>
        )
    }
}

// return(
//     <div className='ColorPicker'>
//     <Typography variant="h4">Design Your Palette</Typography>
//     <ChromePicker color={ this.state.currentColor } onChangeComplete={ this.handleChangeComplete } />
//     <Button variant="contained" onClick={this.addNewColor} style={{backgroundColor: this.state.currentColor}}>Add Color</Button>
//     <Button variant="contained" color='secondary'>Clear Palette</Button>
// </div>
// )

export default NewColorPicker;
   