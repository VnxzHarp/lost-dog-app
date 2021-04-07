import React from "react";
import { Link } from "react-router-dom";
//components
import { NavButton } from "../common/NavButton";
import {
  Typography,
  AppBar,
  IconButton,
  Button,
  Toolbar,
} from "@material-ui/core";
import { useScrollTrigger, Slide } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
//styles
import { useStyles } from "./Navbar.styles";
//types
type Props = {
  children: React.ReactElement;
};

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
        <AppBar>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="primary"
              aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography
              component={Link}
              to="/"
              variant="h4"
              className={classes.title}
              color="primary">
              DogFinder
            </Typography>
            <NavButton component={Link} to="/about" text="About" />
            <NavButton component={Link} to="/list" text="List" />
            <NavButton component={Link} to="/" text="Home" />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </>
  );
};
export default Navbar;
