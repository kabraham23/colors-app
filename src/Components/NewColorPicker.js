import React, { Component } from 'react';
import { Button, Typography } from "@material-ui/core";
import { ChromePicker } from 'react-color';


class NewColorPicker extends Component {
     state = {
            background: '#fff',
        };

    handleChangeComplete = (color) => {
        this.setState({background: color.hex})
    }
    render() {
        return(
            <div className='ColorPicker'>
            <Typography variant="h4">Design Your Palette</Typography>
        <div>
            <Button variant="contained" color='secondary'>Clear Palette</Button>
            <Button variant="contained" color="primary">Random Color</Button>
        </div>
        <ChromePicker color={ this.state.background } onChangeComplete={ this.handleChangeComplete } />
        <Button variant="contained" color='primary'>Add Color</Button>
        </div>
        )
    }
}

export default NewColorPicker;
   