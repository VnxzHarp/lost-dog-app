import React from "react";
import { FieldProps } from "formik";
import { TextField } from "@material-ui/core";

// EXAMPLE #1
interface Props extends FieldProps {
  label?: string;
}

export const DisplayFilters: React.FC<Props> = ({ label, field }) => {
  return <TextField label={label} {...field} />;
};
