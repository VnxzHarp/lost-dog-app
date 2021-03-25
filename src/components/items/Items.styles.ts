import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    height: 400,
    maxWidth: "90%",
    margin: "0 auto",
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
    height: 140,
  },
  content: {},
});
