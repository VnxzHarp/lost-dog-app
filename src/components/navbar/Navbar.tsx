import React from "react";
import { Link } from "react-router-dom";
//components
import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
import { Typography, IconButton, Button, Toolbar } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useScrollTrigger, Slide } from "@material-ui/core";

//styles
import { useStyles } from "./Navbar.styles";

interface Props {
  children: React.ReactElement;
}

const HideOnScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <HideOnScroll>
        <AppBar position="sticky">
          <Toolbar className={classes.toolbar} id="back-to-top-anchor">
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
              className={classes.navButtons}
              component={Link}
              to="/list"
              size="medium"
              color="primary"
              variant="contained"
            >
              List
            </Button>
            <Button
              className={classes.navButtons}
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
      </HideOnScroll>
    </>
  );
};
export default Navbar;
