import React, { Component } from 'react';
import ColorBox from './ColorBox';

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    }
    gatherShades(palette, colorToFilterBy){
        let shades = [];
        let allColors = palette.colors;
        console.log("all colors", allColors)

        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
                
            );
            console.log("key name", allColors[key])
            console.log("shades", shades)
            console.log("color", this.palette.id.color)
        }
        return shades.slice(1);
        
    }
    render() {
        const colorBoxes = this._shades.map(color => (
            <ColorBox 
                key={color.id.level} 
                name={color.name}
                background={color.hex} 
                showLink={false} 
            />
        ));
        return (
            <div className='Palette'>
                <h1>Single Color Palette </h1>
                <div className='Palette-colors'>{colorBoxes}</div>
            </div>
        )
    }
}

export default SingleColorPalette;