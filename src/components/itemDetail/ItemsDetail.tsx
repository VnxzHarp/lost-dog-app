import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { useQuery } from "react-query";
//components
import Ghibli from "../../Ghibli.jpg";
import {
  LinearProgress,
  Grid,
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
type DataItemType = {
  id: number | string;
  category: string;
  description: string;
  image: string;
  title: string;
  amount: number;
  name: string;
  url: string;
  results: any[];
  index: number;
  director: string;
  release_date: string;
  tula: string;
};

const getData = async (): Promise<DataItemType[]> =>
  await (await fetch(`https://ghibliapi.herokuapp.com/films/`)).json();

const ItemsDetail = ({ match }: RouteComponentProps<TParams>) => {
  const tula = match.params.id;

  const { data, isLoading, error } = useQuery<DataItemType[]>("data", getData);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong </div>;
  return (
    <Grid item xs={12}>
      <Card
        // className={classes.root}
        variant="outlined"
      >
        {data
          ?.filter((item) => item.id === tula)
          .map((item, index) => (
            <CardActionArea key={index}>
              <CardMedia
                // className={classes.media}
                component="img"
                src={Ghibli}
                title={item.title}
              />
              <CardContent
              //  className={classes.content}
              >
                <Typography
                  // className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {item.director}
                </Typography>
                <Typography variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography
                  //  className={classes.descript}
                  color="textSecondary"
                >
                  {item.description}
                </Typography>
                <Typography variant="body2" component="p">
                  Year: {item.release_date}
                </Typography>
              </CardContent>
            </CardActionArea>
          ))}
        <CardActions>
          <Button size="small" component={Link} to={`/list`}>
            Back
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ItemsDetail;
