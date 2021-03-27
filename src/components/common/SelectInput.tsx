import React from "react";
//styles
import { useStyles } from "./SelectInput.styles";
//components

import { options } from "../utils/ListOptions";
import { InputLabel, Select, MenuItem } from "@material-ui/core";

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
};

const SelectInput: React.FC<Props> = ({
  name,
  label,
  num,
  value,
  onChange,
}) => {
  return (
    <>
      <InputLabel variant="filled" htmlFor={`${name}-mutiple-name-label`}>
        {label}
      </InputLabel>
      <Select
        required
        value={value || ""}
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
