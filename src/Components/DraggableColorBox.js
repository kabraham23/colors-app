import React from "react";
import "./CSS/DraggableColorBox.css"

export default function DraggableColorBox(props) {
    return (
        <div className="ColorBox" style={{ backgroundColor: props.color.color }}>
            {props.name}
            
        </div>
    )
}
