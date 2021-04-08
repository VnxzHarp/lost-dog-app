import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textDecoration: "none",
    },
    toolbar: {
      backgroundColor: "#4cc9f0",
    },
    navButton: {
      minWidth: 95,
    maxWidth: 150,
      marginLeft: theme.spacing(2),
      [theme.breakpoints.down("xs")]: {
            display:"none"
      },
    },
  })
);

export const StyledToolbar = styled(Toolbar)`
  background-color: #4cc9f0;
  text-decoration: none;
  display: flex;
`;
