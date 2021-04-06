import * as React from "react";
import { useState } from "react";
import { FieldProps } from "formik";
import {
  TextField,
  TextFieldProps,
  Checkbox,
  FormControl,
  Select,
} from "@material-ui/core";

// EXAMPLE #1
interface Props extends FieldProps {
  label?: string;
}

export const MyTextField: React.FC<Props> = ({ label, field }) => {
  return <TextField label={label} {...field} />;
};

export const MySelectField: React.FC<Props> = ({ label, field }) => {
  return <Select label={label} {...field} />;
};

// export const option: React.FC<Props> = ({ label, placeholder, field }) => {
//   return <TextField label={label} placeholder={placeholder} {...field} />;
// };
// export const MyBox: React.FC<Props> = ({ label, placeholder, field }) => {
//     const [checked, setChecked] = (true);
//   return <TextField label={label} placeholder={placeholder} {...field} />;
// };

//EXAMPLE #2
// export const MyField: React.FC<FieldProps & TextFieldProps> = ({
//   label,
//   placeholder,
//   field,
// }) => {
//   return <TextField label={label} placeholder={placeholder} {...field} />;
// };
