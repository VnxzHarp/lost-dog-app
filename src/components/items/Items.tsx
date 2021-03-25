import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
//components
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import DogeCircle from "../../DogeCircle.jpg";
//styles
import { useStyles } from "./Items.styles";
//types
import { DogsItemType } from "../list/ListPage";
type Props = {
  item: DogsItemType;
  // handleClickMoreInfo: (clickedItem: DataItemType) => void;
};
type TParams = { id: string; url: string | undefined };
const Items: React.FC<Props> = (
  { item },
  { match }: RouteComponentProps<TParams>
) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardMedia
        className={classes.media}
        component="img"
        src={DogeCircle}
        title={"dogeCircle"}
      />
      <CardContent className={classes.content}>
        <Typography color="textPrimary" variant="h5" component="h2">
          Location: {item.location}
        </Typography>
        <Typography variant="h5" component="h2">
          Breed: {item.breed}
        </Typography>
        <Typography variant="h5" component="h2">
          Size: {item.size}
        </Typography>
        <Typography
          className={classes.descript}
          color="textPrimary"
          component="p"
        >
          Description: {item.description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="medium"
          variant="contained"
          color="secondary"
          component={Link}
          to={`/list/${item.id}`}
        >
          MORE INFO
        </Button>
      </CardActions>
    </Card>
  );
};

export default Items;
