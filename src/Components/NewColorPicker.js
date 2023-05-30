import React, { Component } from 'react';
import { Button, Typography } from "@material-ui/core";
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'


class NewColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            currentColor: "#fff",
            newColorName: ''
        }
        this.setCurrentColor = this.setCurrentColor.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        ValidatorForm.addValidationRule('isColorNameUnique', value => 
            this.props.colors.every(
                ({name}) => name.toLowerCase() !== value.toLowerCase()
                )
        );
        ValidatorForm.addValidationRule('isColorUnique', value => 
            this.props.colors.every(
                ({color}) => color !== this.state.currentColor
                )
        );
    }
    handleChange(event) {
        this.setState({newColorName: event.target.value})
    }
    handleSubmit = () => {
        this.props.handleSubmit({color: this.state.currentColor, name: this.state.newColorName}, 
        this.setState({newColorName: ''}))
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
                <TextValidator 
                    value={this.state.newColorName} 
                    onChange={this.handleChange}
                    name='newColorName'
                    validators={["required", "isColorNameUnique", "isColorUnique"]}
                    errorMessages={["this field is required", "Color name must be unique", "Color is already used"]} 
                />
                <Button variant="contained" type='submit' style={{backgroundColor: this.state.currentColor}}>Add Color</Button>
                <Button variant="contained" color='secondary'>Clear Palette</Button>
            </ValidatorForm>
        </div>
        )
    }
}

export default NewColorPicker;
   