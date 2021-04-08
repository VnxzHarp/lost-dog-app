import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "60%",
    margin: "0 auto",
    borderRadius: 20,
  },
  textField: {
    backgroundColor: "#4cc9f0",
    borderRadius:5,
    margin:5
  },
  select: {
    color: "white",
  },
  inputPhoto:{
      display:"none"
  },
  formControl: {
    minWidth: 120,
    maxWidth: 300,
    background: "#f72585",
    borderRadius: 5,
       margin:5
  },
  content: {
   marginTop:15,
  },
  controls: {
    display: "flex",
    justifyContent: "center",
  },
});
