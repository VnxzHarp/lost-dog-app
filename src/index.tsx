import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>,
  document.getElementById("root")
);
