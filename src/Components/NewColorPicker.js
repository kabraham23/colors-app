import React, { Component } from 'react';
import { Button, Typography } from "@material-ui/core";
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'


class NewColorPicker extends Component {
    constructor(props) {
        super(props)
        this.state = {currentColor: "#ffffff", newColorName: ""}
        this.setCurrentColor = this.setCurrentColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log("handled ", event.target.value)
        this.setState({newColorName: event.target.value})
    }

    handleSubmit = () => {
        this.props.handleSubmit({color: this.state.currentColor, name: this.state.newColorName})
    }

    setCurrentColor = (color) => {
        this.setState({currentColor: color.hex})
    }

    render() {
        return(
            <div className='ColorPicker'>
            <Typography variant="h4">Design Your Palette</Typography>
            <ChromePicker color={ this.state.currentColor } onChangeComplete={ this.setCurrentColor } />
            <ValidatorForm onSubmit={this.handleSubmit}>
            <TextValidator value={this.state.newColorName} onChange={this.handleChange} />            
            <Button variant="contained" type='submit' style={{backgroundColor: this.state.currentColor}}>Add Color</Button>
            <Button variant="contained" color='secondary'>Clear Palette</Button>
            </ValidatorForm>

        </div>
        )
    }
}

export default NewColorPicker;
   
// return(
//     <div className='ColorPicker'>
//     <Typography variant="h4">Design Your Palette</Typography>
//     <ChromePicker color={ this.props.currentColor } onChangeComplete={ this.props.handleChangeComplete } />
//     <ValidatorForm onSubmit={this.props.addNewColor}>
//         <TextValidator value={this.props.newName.newName} onChange={this.props.addNewName} />
//     </ValidatorForm>
//     <Button variant="contained" type='submit' onClick={this.props.addNewColor} style={{backgroundColor: this.props.currentColor}}>Add Color</Button>
//     <Button variant="contained" color='secondary'>Clear Palette</Button>
// </div>
// )