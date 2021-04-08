import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "60%",
    [theme.breakpoints.down("md")]: {
      maxWidth: "70%",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90%",
    },
    margin: "0 auto",
    borderRadius: 20,
  },
}));
