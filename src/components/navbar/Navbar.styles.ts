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
    },
    toolbar: {
      backgroundColor: "#4cc9f0",
    },
    navButtons: {
      marginLeft: theme.spacing(2),
    },
  })
);

export const StyledToolbar = styled(Toolbar)`
  background-color: #4cc9f0;
  text-decoration: none;
  display: flex;
`;
