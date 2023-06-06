import React from "react";
import { Route, Routes, useParams } from 'react-router-dom';
import Palette from "./Components/Palette";
import PaletteList from './Components/PaletteList';
import SingleColorPalette from './Components/SingleColorPalette';
import NewPalette from "./Components/NewPalette";
import seedColors from './seedColors';
import { generatePalette } from "./colorHelpers";

export default function App() {
  const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"))
  const [palettes, setPalettes] = React.useState(savedPalettes || seedColors)
  
  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };

  React.useEffect(() => 
  localStorage.setItem('palettes', JSON.stringify(palettes)))

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette])
  }

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

    return(
      <div className="App">
        <>
          <Routes>
              <Route path="palette/new" element={<NewPalette palettes={palettes} savePalette={savePalette} />} />
              <Route path="/" element={<PaletteList palettes={palettes} /> } />
              <Route path="/palette/:id" element={<PaletteWrapper />} />     
              <Route path="/palette/:id/:colorId" element={<ColorWrapper />}/>
          </Routes>
        </>
      </div>
    )
  }

