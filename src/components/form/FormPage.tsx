import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { Link } from "react-router-dom";
//styles
import { useStyles } from "./FormPage.styles";
import AngryDoge from "../../AngryDoge.png";
import {
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  LinearProgress,
  TextField,
  Paper,
  CardContent,
  CardActions,
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

// const addData = async (newData): Promise<DataItemType> =>
//   await (await fetch("https://ghibliapi.herokuapp.com/films", newData))

const initialFilter: UseStateType = {
  director: "",
  title: "",
  release_date: "",
};
const FormPage: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = useState<UseStateType>(initialFilter);

  // const mutation = useMutation(() => {
  //   return fetch("/api", state);
  // });

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
  console.log(data);
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong </div>;
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.cover}
            component="img"
            alt="DogFinderApp"
            height="140"
            src={AngryDoge}
            title="DogFinderApp"
          />
        </CardActionArea>
        <form>
          <CardContent>
            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                id="standard-full-width"
                label="Name"
                fullWidth
                margin="normal"
                InputLabelProps={{
                  shrink: true,
                }}
                color="secondary"
                variant="filled"
              />
            </Grid>
          </CardContent>
          <CardContent className={classes.content}>
            <Grid container spacing={3}>
              <Grid container justify="space-around" alignItems="center">
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

                <FormControl className={classes.formControl}>
                  <InputLabel
                    variant="filled"
                    htmlFor="title-mutiple-name-label"
                  >
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

                <FormControl className={classes.formControl}>
                  <InputLabel
                    variant="filled"
                    htmlFor="title-mutiple-name-label"
                  >
                    Title
                  </InputLabel>
                  <Select
                    value={state.title}
                    onChange={() => null}
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
            </Grid>
          </CardContent>
          <CardActions className={classes.controls}>
            <Button
              type="submit"
              className={classes.button}
              size="large"
              variant="contained"
              // onClick={() => {
              //   mutation.mutate({});
              // }}
            >
              Add Doggo
            </Button>
          </CardActions>
        </form>
      </Card>
    </>
  );
};

export default FormPage;
