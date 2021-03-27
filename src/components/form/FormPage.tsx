import React, { useState } from "react";
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
  id?: string | undefined | null | number;
  name?: string;
  breed: string;
  size: string;
  color: string;
  location?: string;
  photo?: string;
  status: string;
  description?: string;
  index?: string | number;
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
];
const initialFilter = {
  color: "",
  breed: "",
  size: "",
  status: "",
  description: "",
  location: "",
  photo: "",
  id: "",
};

const FormPage: React.FC<dogFilterType[]> = () => {
  const classes = useStyles();
  const [state, setState] = useState<UseStateType>(initialFilter);
  console.log(state);
  // const mutation = useMutation(() => {
  //   return fetch("/api", state);
  // });
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
                {dogFilters.map(({ name, label, num }, index) => (
                  <FormControl key={index} className={classes.formControl}>
                    <SelectInput
                      name={name}
                      label={label}
                      num={num}
                      onChange={handleChange}
                      // value={state[name]}
                      // onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
                      //   setState({ ...state, [name]: e.target.value } as string)
                      // }
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

// <CardContent className={classes.content}>
// <Grid container spacing={3}>
//   <Grid container justify="space-around" alignItems="center">
//     {dogFilters.map(
//       ({ name, label, defaultOption, num }, index) => (
//         <FormControl key={index} className={classes.formControl}>
//           <InputLabel
//             variant="filled"
//             htmlFor={`${name}-mutiple-name-label`}
//           >
//             {label}
//           </InputLabel>
//           <Select
//             value={"defaultOption"}
//             onChange={() => null}
//             inputProps={{
//               name: { name },
//               id: `${name}-mutiple-name-label`,
//             }}
//           >
//             {options[num].map((elem, index) => {
//               return (
//                 <MenuItem key={index} value={elem}>
//                   {elem}
//                 </MenuItem>
//               );
//             })}
//           </Select>
//         </FormControl>
//       )
//     )}
//   </Grid>
// </Grid>
// </CardContent>
