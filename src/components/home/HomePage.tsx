// import { useQuery } from "react-query";

// import Drawer from "@material-ui/core/Drawer";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import Grid from "@material-ui/core/Grid";
// import Badge from "@material-ui/core/Badge";

import React from "react";
import { Link } from "react-router-dom";
import DogeCoin from "../../DogeCoin.jpg";
//components
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
//styles
import { useStyles } from "./HomePage.styles";

const HomePage = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.cover}
          component="img"
          alt="DogFinderApp"
          height="140"
          src={DogeCoin}
          title="DogFinderApp"
        />
        <CardContent>
          <Typography
            align="center"
            className={classes.titleText}
            gutterBottom
            variant="h4"
            component="h2"
          >
            Help Lost Doggos
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is app was made to help doggos who are far from home, if you
            see a stray doggo, help us uploading his position and taking a photo
            of him. You can post your lost doggos aswell.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.controls}>
        <Button
          className={classes.linkButtons}
          component={Link}
          to="/form"
          size="small"
          color="primary"
          variant="contained"
        >
          Report the Doggo
        </Button>
        <Button
          className={classes.linkButtons}
          component={Link}
          to="/list"
          size="small"
          color="primary"
          variant="contained"
        >
          List of Doggos
        </Button>
      </CardActions>
    </Card>
  );
};

export default HomePage;
