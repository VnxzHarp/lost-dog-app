import React from "react";
import * as Yup from "yup";
import axios from "axios";
//components
import { CenteredButton } from "../common/CenteredButton";
import { options } from "../utils/ListOptions";
import { dogFilters } from "../common/DogFilters";
import { Formik, Form, Field } from "formik";
import { sendPostRequest } from "../../api/ApiUtils";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import {
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  CardContent,
  Grid,
  CardActions,
  TextField,
} from "@material-ui/core";
//styles
import { useStyles } from "./MyForm.styles";
//types
export interface Values {
  name: string;
  description: string;
  color: string;
  breed: string;
  size: string;
  status: string;
  location: string;
  photo: string;
  date: string;
}
interface Props {
  onSubmit: (values: Values) => void;
}

export const MyForm: React.FC<Props> = ({}) => {
  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        color: "",
        breed: "",
        size: "",
        status: "",
        location: "",
        photo: "",
        date: "",
      }}
      // validationSchema={Yup.object().shape({
      //   name: Yup.string()
      //     .max(15, "Must be 15 characters or less")
      //     .required("Required"),
      //   description: Yup.string()
      //     .max(50, "Must be 50 characters or less")
      //     .required("Required"),
      // })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
        sendPostRequest(values);
        let time: any = Date.now();
        // let hora: any = new Date(time);
        values.date = time.toString();
      }}>
      {({ values, handleSubmit, isSubmitting, handleReset, handleChange }) => (
        <Form onSubmit={handleSubmit}>
          <CardContent>
            <Grid container spacing={3}>
              {["name", "description"].map((elem, index) => (
                <Grid
                  key={index}
                  container
                  justify="space-around"
                  alignItems="center">
                  <Field
                    as={TextField}
                    multiline
                    rowsMax={4}
                    label={elem}
                    name={elem}
                    color="secondary"
                    className={classes.textField}
                  />
                </Grid>
              ))}
            </Grid>
          </CardContent>
          <Grid container spacing={3}>
            <Grid container justify="space-around" alignItems="center">
              <CardContent className={classes.content}>
                {dogFilters.map(({ name, label, num }, index) => (
                  <FormControl key={index} className={classes.formControl}>
                    <InputLabel>{label}</InputLabel>
                    <Field className={classes.select} as={Select} name={name}>
                      {options[num].map((elem, index) => {
                        return (
                          <MenuItem key={index} value={elem}>
                            {elem}
                          </MenuItem>
                        );
                      })}
                    </Field>
                  </FormControl>
                ))}
              </CardContent>
            </Grid>
          </Grid>

          <CardContent>
            <CardActions className={classes.controls}>
              <input
                accept="image/*"
                id="contained-button-file"
                type="file"
                name="´photo"
                onChange={handleChange("photo")}
                className={classes.inputPhoto}
              />
              <label htmlFor="contained-button-file">
                <Button
                  variant="contained"
                  color="secondary"
                  component="span"
                  startIcon={<AddAPhotoIcon />}>
                  Upload
                </Button>
              </label>

              <Button onClick={handleReset} variant="contained" color="primary">
                Reset
              </Button>
            </CardActions>

            <CenteredButton
              text="Add Doggo"
              disabled={isSubmitting}
              type="submit"
              variant="contained"
            />
          </CardContent>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </Form>
      )}
    </Formik>
  );
};
