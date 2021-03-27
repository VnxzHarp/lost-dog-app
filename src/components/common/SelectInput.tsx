import React from "react";
//styles
import { useStyles } from "./SelectInput.styles";
//components

import { options } from "../utils/ListOptions";
import { InputLabel, Select, MenuItem } from "@material-ui/core";

type State = {
  id?: string | number | undefined;
  name?: string;
  breed: string;
  size: string;
  color: string;
  location?: string;
  photo?: string;
  status: string;
  description?: string;
  [key: string]: any;
};
type Props = {
  name: string;
  label: string;
  num: number;
  value?: number | string;
  onChange: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
    }>
  ) => void;
  state?: State | undefined;
};

const SelectInput: React.FC<Props> = ({
  name,
  label,
  num,
  state,
  onChange,
}) => {
  return (
    <>
      <InputLabel variant="filled" htmlFor={`${name}-mutiple-name-label`}>
        {label}
      </InputLabel>
      <Select
        required
        value={state![name]}
        onChange={onChange}
        inputProps={{
          name: name,
          id: `${name}-mutiple-name-label`,
        }}
      >
        {options[num].map((elem, index) => {
          return (
            <MenuItem key={index} value={elem}>
              {elem}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};

export default SelectInput;
