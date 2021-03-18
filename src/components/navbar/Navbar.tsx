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
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
//styles
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar: {
      backgroundColor: "#4cc9f0",
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="primary"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title} color="primary">
          DogFinder
        </Typography>
        <Button
          component={Link}
          to="/"
          size="medium"
          variant="contained"
          color="primary"
        >
          Home
        </Button>
      </Toolbar>
    </AppBar>
    // <AppBar position="sticky">
    //   <StyledToolbar>
    //     <IconButton color="primary" aria-label="menu">
    //       <MenuIcon />
    //     </IconButton>
    //     <Typography
    //       component={Link}
    //       to="/"
    //       className={classes.title}
    //       variant="h4"
    //       color="initial"
    //     >
    //       DogFinder
    //     </Typography>

    //     <Button
    //       className={classes.navButton}
    //       color="primary"
    //       variant="contained"
    //       size="large"
    //     >
    //       login
    //     </Button>
    //   </StyledToolbar>
    // </AppBar>
  );
};
export default Navbar;
