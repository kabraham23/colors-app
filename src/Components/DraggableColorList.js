import React from "react";
import DraggableColorBox from "./DraggableColorBox";
import {SortableContainer} from "react-sortable-hoc";

const DraggableColorList = SortableContainer((props) => {
    const {removeColor, colors} = props;
    return (
       <div className="container">
        {colors.map((color, i) => (
                <DraggableColorBox 
                index={i}
                key={i} 
                color={color.color} 
                name={color.name} 
                handleClick={() => removeColor(color.name)}
                />
            ))}
       </div> 
    )
})

export default DraggableColorList;