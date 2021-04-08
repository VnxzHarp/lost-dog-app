import {  makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>({
    list: {
      width: 250,
      color: "#3a0ca3",
      backgroundColor:"#4cc9f0"
    },
    fullList: {
      width: 'auto',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  }));