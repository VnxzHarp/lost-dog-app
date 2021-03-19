import React, { useState } from "react";
import { useQuery } from "react-query";
//components
import Items from "./items/Items";
import { LinearProgress, Grid } from "@material-ui/core";
//syles
import { useStyles } from "./ListPage.styles";

//Types
export type CartItemType = {
  id: number | string;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  name: string;
  url: string;
  order: number;
  birth_year: string;
  Items: any;
  results: any[];
  index: number;
  gender: string;
  hair_color: string;
  sprites: { front_default: string };
  director: string;
  release_date: string;
};
const getData = async (): Promise<CartItemType[]> =>
  await (await fetch("https://ghibliapi.herokuapp.com/films")).json();

// const getProducts = async (): Promise<CartItemType> =>
//   await (await fetch("https://swapi.dev/api/people/")).json();

// const ListPage = () => {
//   const classes = useStyles();
//   const { data, isLoading, isError, error } = useQuery<CartItemType>(
//     "products",  // key of the query
//     getProducts
//   );

const ListPage = () => {
  const classes = useStyles();
  const { data, isLoading, isError, error } = useQuery<CartItemType[]>(
    "data",
    getData
  );
  console.log(data);
  // console.log(data?.results);

  if (isLoading) return <LinearProgress />;
  if (isError) return <div>Error: {error} </div>;

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
