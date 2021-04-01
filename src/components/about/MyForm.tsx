import React from "react";
//components

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
const optionSelectNum = [0, 1, 2, 3, 4];
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
  return (
    <>
      <Paper>
        <Formik
          initialValues={{
            name: "",
            description: "",
            color: "",
            breed: "",
            size: "",
            status: "",
            location: "",
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}>
          {({ values, handleSubmit, isSubmitting, handleReset }) => (
            <Form onSubmit={handleSubmit}>
              <div>
                <Field component={MyField} label="name" name="name" />
              </div>
              <div>
                <Field
                  component={MyField}
                  label="description"
                  name="description"
                />
              </div>
              <div>
                {dogFilters.map(({ name, label, num }) => (
                  <Field
                    placeholder={label}
                    name={name}
                    type="select"
                    as={Select}>
                    {options[num].map((elem, index) => {
                      return (
                        <MenuItem key={index} value={elem}>
                          {elem}
                        </MenuItem>
                      );
                    })}
                  </Field>
                ))}
              </div>
              <Button
                disabled={isSubmitting}
                variant="contained"
                color="secondary"
                type="submit">
                Add Doggo
              </Button>
              <Button onClick={handleReset}>Reset</Button>
              <pre>{JSON.stringify(values, null, 2)}</pre>
            </Form>
          )}
        </Formik>
      </Paper>
    </>
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
