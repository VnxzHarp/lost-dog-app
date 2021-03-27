import React from "react";
import { Link } from "react-router-dom";
//components
import Button from "@material-ui/core/Button";

const AboutPage = () => (
  <div>
    <h2>Something about Dogs</h2>
    <h3>CHANCHO</h3>
    <h2>asdasd</h2>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/"
      size="large"
    >
      To Somewhere
    </Button>
  </div>
);

export default AboutPage;
