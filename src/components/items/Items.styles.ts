import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 400,
  },

  title: {
    fontSize: 14,
  },
  descript: {
    marginBottom: 12,
    height: 100,
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
  content: {
    // maxHeight: 100,
    overFlow: "scroll",
  },
});
