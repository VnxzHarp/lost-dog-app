import { Route, Switch } from "react-router-dom";

//components
import Navbar from "./navbar/Navbar";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { Fab, Toolbar } from "@material-ui/core";
import ScrollTop from "./utils/ScrollTop";
//Routes
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import FormPage from "./form/FormPage";
import ListPage from "./list/ListPage";
import PageNotFound from "./PageNotFound";
import ItemsDetail from "./itemDetail/ItemsDetail";
//styles
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./App.styles";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Toolbar id="back-to-top-anchor" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/list" component={ListPage} />
        <Route path="/form" component={FormPage} />
        <Route path="/list/:id" component={ItemsDetail} />
        <Route component={PageNotFound} />
      </Switch>
      <ScrollTop>
        <Fab color="secondary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </ThemeProvider>
  );
};

export default App;
