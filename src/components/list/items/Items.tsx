import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Ghibli from "../../../Ghibli.jpg";
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
          component="img"
          src={Ghibli}
          title={item.title}
        />
        <CardContent className={classes.content}>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {item.director}
          </Typography>
          <Typography variant="h5" component="h2">
            {item.title}
          </Typography>
          <Typography className={classes.descript} color="textSecondary">
            Description:{item.description}
          </Typography>
          <Typography variant="body2" component="p">
            Year: {item.release_date}
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
