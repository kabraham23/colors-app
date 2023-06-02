import React from "react";
import "./CSS/DraggableColorBox.css";
import DeleteIcon from '@material-ui/icons/Delete';

export default function DraggableColorBox(props) {
    return (
        <div className="ColorBox" style={{ backgroundColor: props.color }}>
            <div className="BoxContent">
                <span>
                    {props.name}
                </span>
                <DeleteIcon className="DeleteIcon" />
            </div>
        </div>
    )
}
