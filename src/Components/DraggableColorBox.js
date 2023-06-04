import React from "react";
import "./CSS/DraggableColorBox.css";
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from "react-sortable-hoc";

const DraggableColorBox = SortableElement((props) => {
    const { handleClick, name, color } = props;
    return (
        <div className="ColorBox" style={{ backgroundColor: color }}>
            <div className="BoxContent">
                <span>
                    {name}
                </span>
                <DeleteIcon className="DeleteIcon" onClick={handleClick} />
            </div>
        </div>
    )
})

export default DraggableColorBox;