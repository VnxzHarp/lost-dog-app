import React from "react";
//components
import MediaHeader from "../common/MediaHeader";
import AngryDoge from "../../AngryDoge.png";
import { MyForm } from "./MyForm";
import { CardContent, Grid, Card } from "@material-ui/core";
//styles
import { useStyles } from "./MyForm.styles";

const AboutPage = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <MediaHeader
        src={AngryDoge}
        alt="DogFinderApp"
        title="DogFinderApp"
        height="140"
      />

      <CardContent>
        <MyForm onSubmit={({}) => {}} />
      </CardContent>
    </Card>
  );
};

export default AboutPage;
