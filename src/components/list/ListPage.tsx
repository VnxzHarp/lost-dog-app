import React, { useState } from "react";
import { useQuery } from "react-query";
//components
import Items from "./items/Items";
import { LinearProgress, Grid } from "@material-ui/core";
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
};

const getProducts = async (): Promise<CartItemType> =>
  await (await fetch("https://swapi.dev/api/people/")).json();

const ListPage = () => {
  const { data, isLoading, isError, error } = useQuery<CartItemType>(
    "products",
    getProducts
  );
  console.log(data?.results);

  if (isLoading) return <LinearProgress />;
  if (isError) return <div>Error: {error} </div>;

  return (
    <>
      <Grid container spacing={3}>
        {data?.results?.map((item, index) => (
          <Grid item key={index} xs={12} sm={4}>
            <Items item={item} />
          </Grid>
        ))}
        {/* <Grid item xs={12} sm={4}>
          {data?.results?.map((item) =>(
      
          ) )}
          
        </Grid> */}
      </Grid>
    </>
  );
};

export default ListPage;
