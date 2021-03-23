/*eslint import/namespace: ['error', { allowComputed: true }]*/

import React, { useState } from "react";
import { useQuery } from "react-query";
//styles
import { useStyles } from "./ListPage.styles";
//components
import Items from "../items/Items";
import {
  LinearProgress,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  Input,
  MenuItem,
} from "@material-ui/core";
//types
import { DataItemType } from "./ListPage";
type Props = {
  director: string;
  release_date: string;
  title: string;
  index: number;
};
type Preps = {
  data: Props[] | undefined;
};
type UseStateType = {
  director: string;
  release_date: string;
  title: string;
};

const initialFilter = { director: "", title: "", release_date: "" };
const itemFilters = [
  { name: "director", label: "director", defaultOption: "Filter by director" },
  { name: "title", label: "title", defaultOption: "Filter by title" },
  {
    name: "release_date",
    label: "release_date",
    defaultOption: "Filter by release_date",
  },
];

const ManageList: React.FC<Preps> = ({ data }) => {
  const [state, setState] = React.useState<UseStateType>({
    director: "",
    release_date: "",
    title: "",
  });
  console.log(state);
  const classes = useStyles();
  const handleChange = (
    event: React.ChangeEvent<{ name?: string; value: unknown }>
  ) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel
          variant="filled"
          color="secondary"
          htmlFor="release_date-native-simple"
        >
          Release Date
        </InputLabel>
        <Select
          value={state.release_date}
          onChange={handleChange}
          inputProps={{
            name: "release_date",
            id: "release_date-native-simple",
          }}
        >
          {data?.map((elem, index) => (
            <MenuItem key={index} value={elem.release_date}>
              {elem.release_date}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="director-native-simple">Director</InputLabel>
        <Select
          value={state.director}
          onChange={handleChange}
          inputProps={{
            name: "director",
            id: "director-native-simple",
          }}
        >
          {data?.map((elem, index) => (
            <MenuItem key={index} value={elem.director}>
              {elem.director}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="title-mutiple-name-label">Title</InputLabel>
        <Select
          value={state.title}
          onChange={handleChange}
          inputProps={{
            name: "title",
            id: "title-native-simple",
          }}
        >
          {data?.map((elem, index) => (
            <MenuItem key={index} value={elem.title}>
              {elem.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

//   const [filter, setFilter] = useState(initialFilter);

//   const filteredList = data.filter(
//     (p) =>
//       (p.director === filter.director || filter.director === "") &&
//       (p.title === filter.title || filter.title === "") &&
//       (p.release_date === filter.release_date || filter.release_date === "")
//   );

//   const handleReset = () => {
//     setFilter(initialFilter);
//   };
//   return (
//     <>
//       <FormControl>
//         <InputLabel id="demo-mutiple-name-label">Director</InputLabel>
//         <Select
//           labelId="demo-mutiple-name-label"
//           id="demo-mutiple-name"
//           value={movieDirector}
//           onChange={handleChange}
//           input={<Input />}
//         >
//           {data?.map((name, index) => (
//             <MenuItem key={index} value={name.director}>
//               {name.director}
//             </MenuItem>
//           ))}
//         </Select>
//       </FormControl>
//     </>
//   );
// };

export default ManageList;
