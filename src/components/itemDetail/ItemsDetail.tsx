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
import MediaHeader from "../common/MediaHeader";
//types

type TParams = { id: string };
type DogsItemType = {
  id: number | string;
  name: string;
  breed: string;
  size: string;
  color: string;
  location: string;
  photo: string;
  status: string;
  description: string;
  [key: string]: string | number;
};

const itemsDetailElements: string[] = [
  "location",
  "breed",
  "size",
  "color",
  "name",
];

const ItemsDetail = ({ match }: RouteComponentProps<TParams>) => {
  const classes = useStyles();

  const { data, isLoading, error } = useQuery<DogsItemType[]>("data", getData);
  console.log(data);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong </div>;
  return (
    <Card className={classes.root}>
      {data
        ?.filter((item: any) => item.id === parseInt(match.params.id))
        .map((item, index) => (
          <React.Fragment key={index}>
            <MediaHeader src={lostDoge} title="lostDoge" alt="lostDoge" />

            <CardContent>
              {itemsDetailElements.map((elem: string, index) => {
                return (
                  item[elem] && (
                    <Typography key={index} variant="h5" component="h2">
                      {`${elem[0].toUpperCase() + elem.substring(1)}`}:{" "}
                      {item[elem]}
                    </Typography>
                  )
                );
              })}
              <Typography color="textPrimary" component="p">
                Description: {item.description}
              </Typography>
            </CardContent>
          </React.Fragment>
        ))}
      <CardActions className={classes.cardButtons}>
        <Button
          className={classes.buttons}
          size="medium"
          variant="contained"
          color="secondary"
          component={Link}
          to={`/list`}>
          Back
        </Button>
      </CardActions>
    </Card>
  );
};

export default ItemsDetail;
