import React from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import Palette from "./Components/Palette";
import PaletteList from './Components/PaletteList';
import SingleColorPalette from './Components/SingleColorPalette';
import NewPalette from "./Components/NewPalette";
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";

const findPalette = (id) => {
  return seedColors.find((palette) => palette.id === id);
};

// const savePalette = (newPalette) => {
//   console.log(newPalette)
// }

const PaletteWrapper = () => {
  const { id } = useParams();
  const palette = generatePalette(findPalette(id));
  return <Palette palette={palette} />;
};

const ColorWrapper = () => {
  const { id, colorId } = useParams();
  const palette = generatePalette(findPalette(id));
  return <SingleColorPalette palette={palette} colorId={colorId} />;
};

export default function App() {
    return(
      <div className="App">
        <>
          <Routes>
              <Route path="palette/new" element={<NewPalette  />} />
              <Route path="/" element={<PaletteList palettes={seedColors} /> } />
              <Route path="/palette/:id" element={<PaletteWrapper />} />     
              <Route path="/palette/:id/:colorId" element={<ColorWrapper />}/>
          </Routes>
        </>
      </div>
    )
  }

