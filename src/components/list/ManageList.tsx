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
import { DataItemType } from "./ListPage";

type Props = {
  data: DataItemType[] | undefined;
};
type UseStateType = {
  director: string;
  release_date: string;
  title: string;
};

const initialFilter: UseStateType = {
  director: "",
  title: "",
  release_date: "",
};

const ManageList: React.FC<Props> = ({ data }) => {
  const classes = useStyles();
  const [state, setState] = useState<UseStateType>(initialFilter);
  console.log(state);

  const filteredData: DataItemType[] | undefined = data?.filter(
    (p) =>
      (p.director === state.director || state.director === "") &&
      (p.title === state.title || state.title === "") &&
      (p.release_date === state.release_date || state.release_date === "")
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
