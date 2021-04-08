/*eslint import/namespace: ['error', { allowComputed: true }]*/

import React, { useState } from "react";
//styles
import { useStyles } from "./ListPage.styles";
//components
import Items from "../items/Items";
import SelectInput from "../common/SelectInput";
import { dogFilters } from "../common/DogFilters";
import { DogsItemType } from "./ListPage";
import { Grid, FormControl, Button } from "@material-ui/core";

//types

type Props = {
  data: DogsItemType[] | undefined;
};
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
  date?: string;
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
      <Grid container spacing={3} className={classes.gridContainer}>
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
          <Button
            className={classes.formControlButton}
            onClick={handleReset}
            size="medium"
            variant="contained">
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
