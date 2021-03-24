import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
//styles
import { useStyles } from "./FormPage.styles";
import AngryDoge from "../../AngryDoge.png";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  LinearProgress,
  TextField,
  Paper,
} from "@material-ui/core";

type UseStateType = {
  director: string;
  release_date: string;
  title: string;
};
type DataItemType = {
  id?: string | undefined;
  description: string;
  title: string;
  name?: string;
  director: string;
  release_date: string;
};

const getData = async (): Promise<DataItemType[]> =>
  await (await fetch("https://ghibliapi.herokuapp.com/films")).json();

const initialFilter: UseStateType = {
  director: "",
  title: "",
  release_date: "",
};
const FormPage: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = useState<UseStateType>(initialFilter);
  const { data, isLoading, error } = useQuery<DataItemType[]>("data", getData);
  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  console.log(state);
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong </div>;
  return (
    <>
      <Card className={classes.cardRoot}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="DogFinderApp"
            height="140"
            src={AngryDoge}
            title="AngryDoge"
          />
        </CardActionArea>
      </Card>
      <Paper>
        <form className={classes.formRoot}>
          <Grid
            container
            justify="space-around"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12}>
              <TextField
                id="standard-full-width"
                label="Name"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="filled"
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              className={classes.gridFormControl}
            >
              <FormControl className={classes.formControl}>
                <InputLabel
                  variant="filled"
                  color="secondary"
                  htmlFor="release_date-native-simple"
                >
                  Release Date
                </InputLabel>
                <Select
                  value={state.release_date}
                  onChange={handleChange}
                  inputProps={{
                    name: "release_date",
                    id: "release_date-native-simple",
                  }}
                >
                  {data?.map((elem, index) => (
                    <MenuItem key={index} value={elem.release_date}>
                      {elem.release_date}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              className={classes.gridFormControl}
            >
              <FormControl className={classes.formControl}>
                <InputLabel variant="filled" htmlFor="director-native-simple">
                  Director
                </InputLabel>
                <Select
                  value={state.director}
                  onChange={handleChange}
                  inputProps={{
                    name: "director",
                    id: "director-native-simple",
                  }}
                >
                  {data?.map((elem, index) => (
                    <MenuItem key={index} value={elem.director}>
                      {elem.director}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              className={classes.gridFormControl}
            >
              <FormControl className={classes.formControl}>
                <InputLabel variant="filled" htmlFor="title-mutiple-name-label">
                  Title
                </InputLabel>
                <Select
                  value={state.title}
                  onChange={handleChange}
                  inputProps={{
                    name: "title",
                    id: "title-native-simple",
                  }}
                >
                  {data?.map((elem, index) => (
                    <MenuItem key={index} value={elem.title}>
                      {elem.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              className={classes.gridFormControl}
            >
              <FormControl className={classes.formControl}>
                <InputLabel variant="filled" htmlFor="title-mutiple-name-label">
                  Title
                </InputLabel>
                <Select
                  value={state.title}
                  onChange={handleChange}
                  inputProps={{
                    name: "title",
                    id: "title-native-simple",
                  }}
                >
                  {data?.map((elem, index) => (
                    <MenuItem key={index} value={elem.title}>
                      {elem.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} className={classes.gridButtonSubmit}>
              <Button
                className={classes.formControlButton}
                component={Link}
                to="/form"
                size="large"
                variant="contained"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default FormPage;
