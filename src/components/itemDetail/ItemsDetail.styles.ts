import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "60%",
    margin: "0 auto",
    borderRadius: 20,
  },

  title: {
    fontSize: 14,
  },
  descript: {
    marginBottom: 12,
    maxHeight: 100,
    maxWidth: 300,
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
  },
  media: {
    maxHeight: 360,
  },
  content: {
    overFlow: "scroll",
  },
  cardButtons: {
    display: "flex",
    justifyContent: "space-around",
  },
  buttons: {
    border: 0,
    borderRadius: 15,
    height: 48,
    padding: "0 30px",
  },
});
