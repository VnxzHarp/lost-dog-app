import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useQuery } from "react-query";
//components
import lostDoge from "../../lost-doge.jpg";
import { getData } from "../../api/ApiUtils";
//styles
import { useStyles } from "./ItemsDetail.styles";

import {
  LinearProgress,
  CardMedia,
  CardActionArea,
  Typography,
  Button,
  CardContent,
  CardActions,
  Card,
} from "@material-ui/core";
//types

type TParams = { id: string };
type DogsItemType = {
  id: string | number;
  name: string;
  breed: string;
  size: string;
  color: string;
  location: string;
  photo: string;
  status: string;
  description: string;
};

// const getData = async (): Promise<DogsItemType[]> =>
//   await (await fetch(`https://ghibliapi.herokuapp.com/films/`)).json();

const ItemsDetail = ({ match }: RouteComponentProps<TParams>) => {
  const classes = useStyles();
  const tula = parseInt(match.params.id);

  const { data, isLoading, error } = useQuery<DogsItemType[]>("data", getData);
  console.log(data);
  console.log(typeof tula);
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong </div>;
  return (
    <Card className={classes.root}>
      {data
        ?.filter((item) => item.id === tula)
        .map((item, index) => (
          <CardActionArea key={index}>
            <CardMedia
              // className={classes.media}
              component="img"
              src={lostDoge}
              title={"lostDoge"}
            />
            <CardContent>
              <Typography color="textPrimary" variant="h5" component="h2">
                Location: {item.location}
              </Typography>
              <Typography variant="h5" component="h2">
                Breed: {item.breed}
              </Typography>
              <Typography variant="h5" component="h2">
                Size: {item.size}
              </Typography>
              <Typography color="textPrimary" component="p">
                Description: {item.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        ))}
      <CardActions>
        <Button
          size="medium"
          variant="contained"
          color="secondary"
          component={Link}
          to={`/list`}
        >
          Back
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemsDetail;
