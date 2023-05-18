import React, { Component } from 'react';
import { Button, Typography } from "@material-ui/core";
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'


class NewColorPicker extends Component {
    render() {
        return(
            <div className='ColorPicker'>
            <Typography variant="h4">Design Your Palette</Typography>
            <ChromePicker color={ this.props.currentColor } onChangeComplete={ this.props.handleChangeComplete } />
            <ValidatorForm onSubmit={this.props.addNewColor}>
                <TextValidator value={this.props.handleNewName} onChange={this.props.addNewName} />
            </ValidatorForm>
            <Button variant="contained" type='submit' onClick={this.props.addNewColor} style={{backgroundColor: this.props.currentColor}}>Add Color</Button>
            <Button variant="contained" color='secondary'>Clear Palette</Button>
        </div>
        )
    }
}

export default NewColorPicker;
   