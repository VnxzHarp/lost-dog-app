import * as React from "react";
import { useState } from "react";
import { FieldProps } from "formik";
import { TextField, TextFieldProps, Checkbox } from "@material-ui/core";

// EXAMPLE #1
interface Props extends FieldProps {
  placeholder: string;
  label: string;
}

export const MyFormControl: React.FC<Props> = ({
  label,
  placeholder,
  field,
}) => {
  return <TextField label={label} placeholder={placeholder} {...field} />;
};
