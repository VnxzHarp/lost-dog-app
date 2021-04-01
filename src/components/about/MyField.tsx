import * as React from "react";
import { FieldProps } from "formik";
import { TextField, TextFieldProps } from "@material-ui/core";

// EXAMPLE #1
interface Props extends FieldProps {
  placeholder: string;
  label: string;
}

export const MyField: React.FC<Props> = ({ label, placeholder, field }) => {
  return <TextField label={label} placeholder={placeholder} {...field} />;
};

//EXAMPLE #2
// export const MyField: React.FC<FieldProps & TextFieldProps> = ({
//   label,
//   placeholder,
//   field,
// }) => {
//   return <TextField label={label} placeholder={placeholder} {...field} />;
// };
