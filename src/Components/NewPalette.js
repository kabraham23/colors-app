import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import { styled, useTheme } from '@mui/material/styles';
import NewColorPicker from "./NewColorPicker";
import DraggableColorList from "./DraggableColorList";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button } from "@material-ui/core";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import { arrayMove } from "react-sortable-hoc";
import './CSS/DraggableColorBox.css';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    marginTop: '3%',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
  
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function NewPalette(props) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [colors, setColors] = React.useState([]);
    const [newPaletteName, setNewPaletteName] = React.useState('');

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
      setNewPaletteName(event.target.value)
    }

    const handleSubmit = (newColorObject) => {
      setColors([...colors, newColorObject])
    };

    const handleSave = () => {
      const newPalette = {
        id: newPaletteName.toLowerCase().replace(/ /g, "-"),
        paletteName: newPaletteName,
        colors: colors
      }
      props.savePalette(newPalette)
    };

    const removeColor = (colorName) => {
      console.log('remove')
      setColors(colors.filter(color => color.name !== colorName))
    };

    const onSortEnd = ({oldIndex, newIndex}) => 
      setColors(arrayMove(colors, oldIndex, newIndex)
      );

    const clearColors = () => {
      setColors([])
    }
    

    ValidatorForm.addValidationRule('isPaletteNameUnique', value => 
        props.palettes.every(
            ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
            )
    );

    useEffect(() => {
        console.log(colors)
    }, [colors])

    
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" color="default" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <h3>CREATE A PALETTE</h3>
          <div  className="Nav">
            
          <ValidatorForm className="ValidatorForm" onSubmit={handleSave}>
            <TextValidator 
            label="Palette Name" 
            name="newPaletteName"
            variant="standard" 
            onChange={handleChange}
            value={newPaletteName}
            validators={["required", "isPaletteNameUnique"]}
            errorMessages={["Enter Palette Name", "Name already used"]} />
              <Button variant="contained" color="primary" type="submit">Save Palette</Button>
          </ValidatorForm>
          <Link to="/">
            <Button variant="contained" color="secondary">Go Back</Button>
            </Link>
            </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <NewColorPicker 
          colors={colors} 
          handleSubmit={(colorObject) => handleSubmit(colorObject)}
          clearColors={clearColors}
        />
        <Divider />
      </Drawer>
      <Main open={open}>
                <DraggableColorList 
                axis='xy'
                onSortEnd={onSortEnd}
                colors={colors} 
                removeColor={removeColor} />
      </Main>
    </Box>
  );
}