import React, { useState } from "react";
import { useQuery } from "react-query";
//components
import ManageList from "./ManageList";
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
//syles
import { useStyles } from "./ListPage.styles";
//Types
export type DataItemType = {
  id: number | string;
  category: string;
  description: string;
  image: string;
  title: string;
  amount: number;
  name: string;
  url: string;
  results: any[];
  index: number;
  director: string;
  release_date: string;
};

const getData = async (): Promise<DataItemType[]> =>
  await (await fetch("https://ghibliapi.herokuapp.com/films")).json();

const ListPage: React.FC = () => {
  const classes = useStyles();
  const { data, isLoading, error } = useQuery<DataItemType[]>("data", getData);

  // const [movieTitle, setMovieTitle] = React.useState<string[]>([]);
  // const [movieDirector, setMovieDirector] = React.useState<string[]>([]);
  // const [movieRelease, setMovieRelease] = React.useState<string[]>([]);
  // console.log(data?.results);
  // const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
  //   setMovieTitle(event.target.value as string[]);
  //   setMovieDirector(event.target.value as string[]);
  //   setMovieRelease(event.target.value as string[]);
  // };

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong </div>;

  return (
    <>
      <Grid container spacing={3} className={classes.cardContainer}>
        <Grid item xs={12}>
          <Grid container justify="space-between" alignItems="center">
            <ManageList data={data} />
          </Grid>
        </Grid>
        {data?.map((item, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Items item={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ListPage;
