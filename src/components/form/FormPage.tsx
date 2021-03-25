import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import { Link } from "react-router-dom";
//styles
import { useStyles } from "./FormPage.styles";
import AngryDoge from "../../AngryDoge.png";
import { options } from "../utils/ListOptions";

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
  color: string;
  breed: string;
  size: string;
  status: string;
  name?: string;
  description?: string;
  options?: string | number;
  num: number | null;
};
type DataItemType = {
  id?: string | undefined;
  title: string;
  name?: string;
  director: string;
  release_date: string;
  status?: string;
  breed: string;
  size: string;
  color: string;
  location?: string;
  photo?: string;
  description?: string;
  option?: string[];
};
// const getData = async (): Promise<DataItemType[]> =>
//   await (await fetch("https://ghibliapi.herokuapp.com/films")).json();

// const addData = async (newData): Promise<DataItemType> =>
//   await (await fetch("https://ghibliapi.herokuapp.com/films", newData))
const dogFilters = [
  {
    name: "status",
    label: "Status",
    defaultOption: "Filter by Status",
    num: 0,
  },
  { name: "size", label: "Size", defaultOption: "Filter by Size", num: 1 },
  { name: "color", label: "Color", defaultOption: "Filter by Color", num: 2 },
  { name: "breed", label: "Breed", defaultOption: "Filter by Breed", num: 3 },
];
const initialFilter = { color: "", breed: "", size: "", status: "", num: null };

const FormPage: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = useState<UseStateType>(initialFilter);
  // const mutation = useMutation(() => {
  //   return fetch("/api", state);
  // });
  console.log(options[1]);
  // const { data, isLoading, error } = useQuery<DataItemType[]>("data", getData);
  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  // if (isLoading) return <LinearProgress />;
  // if (error) return <div>Something went wrong </div>;
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
          <CardContent>
            <Grid item xs={12}>
              <TextField
                className={classes.textField}
                id="standard-full-width"
                label="Description"
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
                {dogFilters.map(
                  ({ name, label, defaultOption, num }, index) => (
                    <FormControl key={index} className={classes.formControl}>
                      <InputLabel
                        variant="filled"
                        htmlFor={`${name}-mutiple-name-label`}
                      >
                        {label}
                      </InputLabel>
                      <Select
                        value={"defaultOption"}
                        onChange={() => null}
                        inputProps={{
                          name: { name },
                          id: `${name}-mutiple-name-label`,
                        }}
                      >
                        {options[num].map((elem, index) => {
                          return (
                            <option key={index} value={elem}>
                              {elem}
                            </option>
                          );
                        })}
                      </Select>
                    </FormControl>
                  )
                )}
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

// {options[index].map((elem, index) => {
//   return (
//     <option key={index} value={elem}>
//       {elem}
//     </option>
//   );
// })}
