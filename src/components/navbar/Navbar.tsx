import React from "react";
import { Link } from "react-router-dom";
//components
import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import {
  Typography,
  IconButton,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
//styles
import { StyledToolbar, useStyles } from "./Navbar.styles";

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <IconButton color="primary" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography
          component={Link}
          to="/"
          className={classes.title}
          variant="h4"
          color="initial"
        >
          DogFinder
        </Typography>
        {/* <Button
          className={classes.title}
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          size="large"
        >
          Home
        </Button> */}
        {/* <Button
          className={classes.navButton}
          color="primary"
          variant="contained"
          size="large"
          component={Link}
          to="/about"
        >
          About
        </Button> */}
        <Button
          className={classes.navButton}
          color="primary"
          variant="contained"
          size="large"
        >
          login
        </Button>
      </StyledToolbar>
    </AppBar>
  );
};
export default Navbar;
