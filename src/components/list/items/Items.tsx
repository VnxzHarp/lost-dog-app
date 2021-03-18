import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
//styles
import { useStyles } from "./Items.styles";
//types
import { CartItemType } from "../ListPage";
type Props = {
  item: CartItemType;
};

const Items: React.FC<Props> = ({ item }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="src\DogeCoin.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {item.birth_year}
          </Typography>
          <Typography variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Gender:{item.gender}
          </Typography>
          <Typography variant="body2" component="p">
            Birthday: {item.birth_year}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small">MORE INFO</Button>
      </CardActions>
    </Card>
  );
};

export default Items;
