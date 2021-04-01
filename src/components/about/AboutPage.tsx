import React from "react";
import { Link } from "react-router-dom";
//components
import Button from "@material-ui/core/Button";
import { MyForm } from "./MyForm";

const AboutPage = () => (
  <div>
    <div style={{ textAlign: "center" }}>
      <MyForm onSubmit={({ email, firstName, lastName }) => {}} />
    </div>

    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/"
      size="large">
      To Somewhere
    </Button>
  </div>
);

export default AboutPage;
