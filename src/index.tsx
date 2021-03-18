import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router } from "react-router-dom";

const client = new QueryClient();

ReactDOM.render(
  <Router>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </Router>,
  document.getElementById("root")
);
