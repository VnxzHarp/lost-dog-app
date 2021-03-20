import React from "react";
import { useQuery } from "react-query";
//components
import Items from "../items/Items";
import { LinearProgress, Grid } from "@material-ui/core";
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

const ListPage = () => {
  const classes = useStyles();
  const { data, isLoading, error } = useQuery<DataItemType[]>("data", getData);
  console.log(data);
  // console.log(data?.results);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong </div>;

  return (
    <>
      <Grid container spacing={3} className={classes.cardContainer}>
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
