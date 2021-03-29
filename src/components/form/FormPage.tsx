import React, { useState } from "react";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
//components
import SelectInput from "../common/SelectInput";
import AngryDoge from "../../AngryDoge.png";
import {
  Grid,
  FormControl,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  TextField,
  CardContent,
  CardActions,
} from "@material-ui/core";
//styles
import { useStyles } from "./FormPage.styles";

type UseStateType = {
  id?: string | number;
  name?: string;
  breed: string;
  size: string;
  color: string;
  location?: string;
  photo?: string;
  status: string;
  description?: string;
};
type dogFilterType = {
  name: string;
  label: string;
  num: number;
  value?: string | number;
};

const dogFilters: dogFilterType[] = [
  {
    name: "status",
    label: "Status",
    num: 0,
  },
  { name: "size", label: "Size", num: 1 },
  { name: "color", label: "Color", num: 2 },
  { name: "breed", label: "Breed", num: 3 },
  { name: "location", label: "Location", num: 4 },
];
const initialFilter = {
  name: "",
  color: "",
  breed: "",
  size: "",
  status: "",
  description: "",
  location: "",
  photo: "",
  id: "",
};

const FormPage: React.FC = () => {
  const classes = useStyles();
  const [state, setState] = useState<UseStateType>(initialFilter);
  console.log(state);
  // const mutation = useMutation<any>((props: any): any => {
  //   axios.post("/api", props);
  // });
  // const { data, isLoading, error } = useQuery<DataItemType[]>("data", getData);
  const handleChange = (
    event: React.ChangeEvent<{
      name?: string;
      value: unknown | HTMLInputElement;
    }>
  ) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const sendPostRequest = async (newPost: UseStateType) => {
    try {
      const { data } = await axios.post(
        "https://e160a083-2c3b-4407-84f2-faf3625b2cd9.mock.pstmn.io/dogodatabase/2/dogList",
        newPost
      );
      console.log(data);
    } catch (err) {
      // Handle Error Here
      console.error(err);
    }
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
                name="name"
                placeholder="Optional"
                onChange={handleChange}
                value={state["name"]}
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
                name="description"
                placeholder="Optional"
                onChange={handleChange}
                value={state["description"]}
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
                {dogFilters.map(({ name, label, num }, index) => (
                  <FormControl key={index} className={classes.formControl}>
                    <SelectInput
                      name={name}
                      label={label}
                      num={num}
                      onChange={handleChange}
                      state={state}
                    />
                  </FormControl>
                ))}
              </Grid>
            </Grid>
          </CardContent>
          <CardActions className={classes.controls}>
            <Button
              type="submit"
              className={classes.button}
              size="large"
              variant="contained"
              onClick={
                () => sendPostRequest(state)
                // mutation.mutate({ state });
              }
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
