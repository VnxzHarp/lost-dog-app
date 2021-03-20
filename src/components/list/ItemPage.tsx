import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
//components
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Ghibli from "./../../Ghibli.jpg";
//types
import { DataItemType } from "./ListPage";
type Props = {
  item: DataItemType;
};
type TParams = {
  id?: string | undefined;
  params?: string | undefined;
};
const ItemPage: React.FC<Props> = (
  { item },
  { match }: RouteComponentProps<TParams>
) => {
  return (
    <Grid item xs={12}>
      <div>{match.params.id}</div>
      <Card
        // className={classes.root}
        variant="outlined"
      >
        <CardActionArea>
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
        <CardActions>
          <Button size="small" component={Link} to={`/list`}>
            Back
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ItemPage;
