import React from "react";
import { useQuery } from "react-query";
//components
import ManageList from "./ManageList";
import { LinearProgress } from "@material-ui/core";
//Types
export type DataItemType = {
  id?: string | undefined;
  description: string;
  title: string;
  name?: string;
  director: string;
  release_date: string;
};

const getData = async (): Promise<DataItemType[]> =>
  await (await fetch("https://ghibliapi.herokuapp.com/films")).json();

const ListPage: React.FC = () => {
  const { data, isLoading, error } = useQuery<DataItemType[]>("data", getData);
  console.log(data);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong </div>;

  return (
    <>
      <ManageList data={data} />
    </>
  );
};

export default ListPage;
