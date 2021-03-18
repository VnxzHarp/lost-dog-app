import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    maxWidth: "80%",
    margin: "10%",
    borderRadius: 20,
  },
  cover: {
    width: "100%",
  },
  titleText: {},
  controls: {
    display: "flex",
    justifyContent: "space-around",
  },
  linkButtons: {
    background: "linear-gradient(45deg, #FE6BBB 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 15,
    boxShadow: "0 3px 5px 2px rgba(255,105,135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

export const Wrapper = styled.div`
  margin: 10vmin;
  background-color: #4cc9f0;
  text-align: center;
  box-sizing: content-box;
  flex-direction: row;
  display: flex;
  justify-content:space-evenly;
  max-height: 60vmin;
  height: 100vmin;
  color: #f72585;
  border-radius: 5vmin;
  border: 1px solid red;
}
`;

export const StyledButton = styled(Button)`
  &.HomeButton {
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    borderradius: 3;
    border: 0;
    color: white;
    height: 48;
    padding: 0 30px;
    boxshadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  }
`;
