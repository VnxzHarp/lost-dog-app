import React from "react";
//components
import * as Yup from "yup";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import AngryDoge from "../../AngryDoge.png";
import { options } from "../utils/ListOptions";
import {
  TextField,
  Paper,
  Button,
  Checkbox,
  Radio,
  FormControlLabel,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  CardContent,
  Grid,
  Card,
  CardActions,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";
import {
  Formik,
  Form,
  Field,
  FieldArray,
  FieldAttributes,
  useField,
  validateYupSchema,
} from "formik";
import { MyField } from "./MyField";
import { MyFormControl } from "./MyFormControl";
//styles
import { useStyles } from "./MyForm.styles";

// types
interface Values {
  firstName: string;
  lastName: string;
  email: string;
}
type MyRadioProps = { label: string } & FieldAttributes<{}>;
type dogFilterType = {
  name: string;
  label: string;
  num: number;
  value?: string | number;
};
const dogFilters: dogFilterType[] = [
  {
    name: "status",
    label: "Status",
    num: 0,
  },
  { name: "size", label: "Size", num: 1 },
  { name: "color", label: "Color", num: 2 },
  { name: "breed", label: "Breed", num: 3 },
  { name: "location", label: "Location", num: 4 },
];

const MyRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field, meta] = useField<{}>(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const MyTextField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return (
    <TextField placeholder={placeholder} {...field} helperText={errorText} />
  );
};

interface Props {
  onSubmit: (values: Values) => void;
  // handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
}

export const MyForm: React.FC<Props> = ({ onSubmit }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="DogFinderApp"
          height="140"
          src={AngryDoge}
          title="DogFinderApp"
        />
      </CardActionArea>
      <CardContent>
        <Grid item xs={12}>
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
            }}
            validationSchema={Yup.object({
              name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              description: Yup.string()
                .max(50, "Must be 50 characters or less")
                .required("Required"),
              color: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}>
            {({
              values,
              handleSubmit,
              isSubmitting,
              handleReset,
              handleChange,
            }) => (
              <Form onSubmit={handleSubmit}>
                <CardContent>
                  <Grid item xs={12}>
                    <Field component={MyField} label="name" name="name" />
                  </Grid>
                </CardContent>
                <CardContent>
                  <Grid item xs={12}>
                    <Field
                      component={MyField}
                      label="description"
                      name="description"
                    />
                  </Grid>
                </CardContent>
                <CardContent className={classes.content}>
                  <Grid container spacing={3}>
                    <Grid container justify="space-around" alignItems="center">
                      {dogFilters.map(({ name, label, num }) => (
                        <div>
                          <FormControl className={classes.formControl}>
                            <InputLabel>{label}</InputLabel>
                            <Field
                              className={classes.select}
                              as={Select}
                              type="select"
                              name={name}>
                              {options[num].map((elem, index) => {
                                return (
                                  <MenuItem key={index} value={elem}>
                                    {elem}
                                  </MenuItem>
                                );
                              })}
                            </Field>
                          </FormControl>
                        </div>
                      ))}
                    </Grid>
                  </Grid>
                </CardContent>
                <CardContent>
                  <Grid item xs={12}>
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
                  </Grid>
                </CardContent>
                <CardActions className={classes.controls}>
                  <Button
                    onClick={handleReset}
                    variant="contained"
                    color="primary">
                    Reset
                  </Button>
                </CardActions>

                <CardActions className={classes.controls}>
                  <Button
                    className={classes.button}
                    disabled={isSubmitting}
                    variant="contained"
                    color="secondary"
                    type="submit">
                    Add Doggo
                  </Button>
                </CardActions>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </Form>
            )}
          </Formik>
        </Grid>
      </CardContent>
    </Card>
  );
};

// <Paper>
// <Formik
//   initialValues={{
//     firstName: "",
//     lastName: "",
//     email: "",
//     status: false,
//     cookies: [],
//     yogurt: "",
//     pets: [{ type: "cat", name: "jarvis", id: "" + Math.random() }],
//   }}
//   onSubmit={(values, { setSubmitting }) => {
//     setTimeout(() => {
//       alert(JSON.stringify(values, null, 2));
//       setSubmitting(false);
//     }, 400);
//   }}>
//   {({ values, isSubmitting, handleSubmit }) => (
//     <Form onSubmit={handleSubmit}>
//       <div>
//         <Field
//           component={MyField}
//           label="hi"
//           name="firstName"
//           placeholder="first name"
//         />
//       </div>

//       <div>
//         <Field
//           label="you"
//           component={MyField}
//           name="lastName"
//           placeholder="last name"
//         />
//       </div>
//       <div>
//         <Field
//           label="there"
//           component={MyField}
//           name="email"
//           placeholder="email"
//         />
//       </div>
//       <div>
//         <Field
//           label="status"
//           name="status"
//           type="Checkbox"
//           as={Checkbox}
//         />
//       </div>
//       <div>
//         <div>cookies:</div>
//         <Field
//           as={Checkbox}
//           name="cookies"
//           type="Checkbox"
//           value="chocolate chip"
//         />
//         <Field
//           component={Checkbox}
//           name="cookies"
//           type="Checkbox"
//           value="snicker noodle"
//         />
//       </div>

//       <div>
//         <div>yogurt:</div>
//         <Field
//           type="radio"
//           as={MyRadio}
//           name="yogurt"
//           value="chocolate chip"
//         />
//         <Field
//           type="radio"
//           as={MyRadio}
//           name="yogurt"
//           value="peach chip"
//         />
{
  /* <Field as={MyRadio} name="cookies" value="chocolate chip" />
      <MyRadio name="yogurt" type="radio" value="peach" label="peach" /> */
}
{
  /* </div>
      <div>
        <FieldArray name="pets">
          {(arrayHelpers) => (
            <div>
              <Button
                onClick={() =>
                  arrayHelpers.push({
                    type: "frog",
                    name: "",
                    id: "" + Math.random(),
                  })
                }>
                add pet
              </Button>
              {values.pets.map((pet, index) => {
                const name = `pets.${index}.name`;

                return (
                  <div key={pet.id}>
                    <MyTextField placeholder="pet name" name={name} />
                    <Field
                      name={`pets.${index}.type`}
                      type="select"
                      as={Select}>
                      <MenuItem value="cat"> cat</MenuItem>
                      <MenuItem value="dog"> dog</MenuItem>
                      <MenuItem value="wolf"> wolf</MenuItem>
                      <MenuItem value="lion"> lion</MenuItem>
                    </Field>
                    <Button onClick={() => arrayHelpers.remove(index)}>
                      x
                    </Button>
                  </div>
                );
              })}
            </div>
          )}
        </FieldArray>
      </div>
      <Button
        disabled={isSubmitting}
        variant="contained"
        color="secondary"
        type="submit">
        submit
      </Button>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </Form>
  )}
</Formik>
</Paper> */
}
