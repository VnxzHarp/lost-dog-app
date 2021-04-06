import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "60%",
    margin: "0 auto",
    borderRadius: 20,
  },
  cover: {
    width: "100%",
  },
  cardButtons: {
    display: "flex",
    justifyContent: "space-around",
  },
  buttons: {
    background: "linear-gradient(45deg, #FE6BBB 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 15,
    boxShadow: "0 3px 5px 2px rgba(255,105,135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

