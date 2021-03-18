import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";
import { lightBlue, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
  },
});

export default theme;

export const Wrapper = styled.div`
  background-color: ;
  z-index: -100;
  color: #ffffff;
`;
