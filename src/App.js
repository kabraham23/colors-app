import React, { Component } from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import Palette from "./Components/Palette";
import PaletteList from './Components/PaletteList';
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";

const findPalette = (id) => {
  return seedColors.find((palette) => palette.id === id);
};

const PaletteWrapper = () => {
  const { id } = useParams();
  const palette = generatePalette(findPalette(id));
  return <Palette palette={palette} />;
};

export default class App extends Component {
  render() {
    return(
      <div className="App">
        <>
          <Routes>
              <Route
                  index
                  path="/"
                  element={(routeProps) => (
                    <>
                      <Palette
                        palette={generatePalette(
                          this.findPalette(routeProps.match.params.id)
                        )} />
                        </>
                      )}  
                    />
              <Route path="/palette/:id" element={<PaletteWrapper />} />     
          </Routes>
        </>
      </div>
    )
  }
}