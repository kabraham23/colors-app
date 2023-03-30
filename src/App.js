import React, { Component } from "react";
import { Route, Routes } from 'react-router-dom';
import Palette from "./Components/Palette";
import PaletteList from './Components/PaletteList';
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";

class App extends Component {
  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id;
    })
  }
  render() {
    return (
      <>
      <Routes>
        <Route path="/" exact element={
          <PaletteList palettes={seedColors} />
        } />
        <Route  
        path="/palette/:id" 
        exact element={routeProps => (
          <Palette palette={generatePalette(
            this.findPalette(routeProps.match.params.id)
            )} />
        )
        } />
      </Routes>
      </>
    );
  }
}

export default App;
