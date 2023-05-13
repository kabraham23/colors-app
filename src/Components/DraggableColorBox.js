import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
    root: {
        height:"100px",
        width: "100px"
    }
}

function DraggableColorBox(props) {
    return (
        <div style={{ backgroundColor: props.color }}>
            {props.color}
        </div>
    )
}

export default withStyles(styles)(DraggableColorBox);