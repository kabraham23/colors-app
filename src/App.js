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
        <Route exact path="/" element={<PaletteList />} />
        <Route 
        exact 
        path="/palette/:id" 
        render={routeProps => (
          <Palette palette={generatePalette(
            this.findPalette(routeProps.match.params.id)
            )} />
        )} />
      </Routes>
      </>
    );
  }
}

export default App;
