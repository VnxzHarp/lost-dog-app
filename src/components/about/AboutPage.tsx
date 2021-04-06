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
import { useStyles } from "./AboutPage.styles";

const AboutPage = () => {
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
          <Typography align="center" gutterBottom variant="h4" component="h2">
            About Page
          </Typography>
          <Typography
            align="justify"
            variant="body2"
            color="textSecondary"
            component="p">
            body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardButtons}>
        <Button
          className={classes.buttons}
          component={Link}
          to="/"
          size="large"
          color="primary"
          variant="contained">
          Donate
        </Button>
      </CardActions>
    </Card>
  );
};

export default AboutPage;
