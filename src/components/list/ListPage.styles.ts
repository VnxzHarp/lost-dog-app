import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  inputContainer: {
    marginTop: 20,
  },
  paper: {
    height: 140,
    width: 100,
  },
  formControl: {
    minWidth: 120,
    maxWidth: 300,
    background: "#f72585",
    borderRadius: 5,
    color: "#3a0ca3",
  },
  formControlButton: {
    background: "linear-gradient(45deg, #FE6BBB 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 15,
    boxShadow: "0 3px 5px 2px rgba(255,105,135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});
