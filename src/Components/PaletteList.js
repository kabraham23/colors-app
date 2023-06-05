import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

const styles = {
  root: {
    backgroundColor: "#f2c9a2",
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll"
  },
  container: {
    width: "80%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: "50px",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "charcoal"
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridGap: "5%",
  }
}

class PaletteList extends Component {
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>Color Me React</h1>
            <Link to='/palette/new'>
              <Button variant='contained' color='default'>Create New Palette</Button>
            </Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map((palette, index) => (
              <Link to={`/palette/${palette.id}`} key={index}>
                <MiniPalette {...palette}   />
              </Link>
              
             
          ))}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(PaletteList);