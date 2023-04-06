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

export default function App() {
  return (
      <div className="App">
          <Routes>
              <Route
                  index
                  path="/"
                  element={<h1>Homepage</h1>}
              />
              <Route path="/palette/:id" element={<PaletteWrapper />} />
          </Routes>
      </div>
  );
}