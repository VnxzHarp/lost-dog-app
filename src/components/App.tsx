import React from "react";
import { Route, Switch } from "react-router-dom";
//components
import Navbar from "./navbar/Navbar";
import ListMenu from "./navbar/ListMenu";
import Contain from "./navbar/Contain";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Fab } from "@material-ui/core";
import ScrollTop from "./utils/ScrollTop";
//Routes
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import FormPage from "./form/FormPage";
import ListPage from "./list/ListPage";
import PageNotFound from "./PageNotFound";
import { Wrapper } from "./App.styles";
//styles
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./App.styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Navbar />
        <ListMenu />
        <Contain />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/list" component={ListPage} />
          <Route path="/form" component={FormPage} />
          <Route component={PageNotFound} />
        </Switch>
        <ScrollTop>
          <Fab color="secondary" size="medium" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
