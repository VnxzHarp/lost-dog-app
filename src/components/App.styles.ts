import styled from "styled-components";
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3a0ca3",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f72585",
    },
  },
});

export default theme;

export const Wrapper = styled.div`
  background-color: ;
  z-index: -100;
  color: #ffffff;
`;
