import React from "react";
import { Link } from "react-router-dom";
//styles
import { useStyles } from "./MyDrawer.styles";
//components
import { IconButton } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import ListAltIcon from "@material-ui/icons/ListAlt";
import InfoIcon from "@material-ui/icons/Info";
import HomeIcon from "@material-ui/icons/Home";

interface Props {
  to?: string;
  component?: any;
}
type Anchor = "left";

export const TemporaryDrawer: React.FC<Props> = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      <List>
        {["Home", "List", "About"].map((text, index) => (
          <ListItem
            button
            key={text}
            component={Link}
            to={text === "Home" ? "/" : text === "List" ? "/list" : "/about"}>
            <ListItemIcon>
              <IconButton
                className={classes.menuButton}
                color="primary"
                aria-label="menu">
                {text === "Home" ? (
                  <HomeIcon />
                ) : text === "List" ? (
                  <ListAltIcon />
                ) : (
                  <InfoIcon />
                )}
              </IconButton>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Button
          className={classes.menuButton}
          color="primary"
          onClick={toggleDrawer("left", true)}>
          <MenuIcon />
        </Button>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}>
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};
