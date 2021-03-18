import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Hidden,
} from "@material-ui/core";
import ColorLensIcon from "@material-ui/icons/ColorLens";

const ListMenu = () => {
  return (
    <div>
      <Hidden smUp>
        <List component="nav">
          <ListItem button>
            <ListItemIcon>
              <ColorLensIcon />
            </ListItemIcon>
            <Divider />
            <ListItemText primary="something" />
          </ListItem>
        </List>
      </Hidden>
    </div>
  );
};

export default ListMenu;
