/*eslint import/namespace: ['error', { allowComputed: true }]*/

import React, { useState } from "react";
//styles
import { useStyles } from "./ListPage.styles";
//components
import Items from "../items/Items";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@material-ui/core";
//types
import { DogsItemType } from "./ListPage";

type Props = {
  data: DogsItemType[] | undefined;
};
type UseStateType = {
  id?: string;
  name?: string;
  breed: string;
  size: string;
  color: string;
  location?: string;
  photo?: string;
  status: string;
  description?: string;
};

const initialFilter: UseStateType = {
  breed: "",
  size: "",
  color: "",
  status: "",
};

const ManageList: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  const [state, setState] = useState<UseStateType>(initialFilter);

  const filteredData: DogsItemType[] | undefined = data?.filter(
    (p) =>
      (p.status === state.status || state.status === "") &&
      (p.breed === state.breed || state.breed === "") &&
      (p.size === state.size || state.size === "") &&
      (p.color === state.color || state.color === "")
  );

  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const handleReset = () => {
    setState(initialFilter);
  };
  return (
    <>
      {/* {itemFilters.map(({ dataName, label }, index) => (
        <FormControl key={index} className={classes.formControl}>
          <InputLabel variant="filled" color="secondary" htmlFor={label}>
            {" "}
            {dataName}{" "}
          </InputLabel>
          <Select
            value={state.director}
            onChange={handleChange}
            inputProps={{
              name: { dataName },
              label: { label },
            }}
          >
            {data?.map((elem, index) => (
              <MenuItem key={index} value={elem.director}>
                {elem.director}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))} */}
      <Grid container spacing={3}>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className={classes.inputContainer}
        >
          <FormControl className={classes.formControl}>
            <InputLabel
              variant="filled"
              color="secondary"
              htmlFor="color-native-simple"
            >
              Color
            </InputLabel>
            <Select
              value={state.color}
              onChange={handleChange}
              inputProps={{
                name: "color",
                id: "color-native-simple",
              }}
            >
              {data?.map((elem, index) => (
                <MenuItem key={index} value={elem.color}>
                  {elem.color}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel variant="filled" htmlFor="breed-native-simple">
              Breed
            </InputLabel>
            <Select
              value={state.breed}
              onChange={handleChange}
              inputProps={{
                name: "breed",
                id: "breed-native-simple",
              }}
            >
              {data?.map((elem, index) => (
                <MenuItem key={index} value={elem.breed}>
                  {elem.breed}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel variant="filled" htmlFor="size-native-simple">
              Size
            </InputLabel>
            <Select
              value={state.size}
              onChange={handleChange}
              inputProps={{
                name: "size",
                id: "size-native-simple",
              }}
            >
              {data?.map((elem, index) => (
                <MenuItem key={index} value={elem.size}>
                  {elem.size}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel variant="filled" htmlFor="status-native-simple">
              Status
            </InputLabel>
            <Select
              value={state.status}
              onChange={handleChange}
              inputProps={{
                name: "status",
                id: "status-native-simple",
              }}
            >
              {data?.map((elem, index) => (
                <MenuItem key={index} value={elem.status}>
                  {elem.status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            className={classes.formControlButton}
            onClick={handleReset}
            size="medium"
            variant="contained"
          >
            Reset
          </Button>
        </Grid>
        {filteredData?.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Items item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default ManageList;
