import React from "react";
import { useQuery } from "react-query";
//components
import ManageList from "./ManageListPage";
import { LinearProgress } from "@material-ui/core";
import { getData } from "../../api/ApiUtils";
//Types
export type DogsItemType = {
  id: string;
  name: string;
  breed: string;
  size: string;
  color: string;
  location: string;
  photo: string;
  status: string;
  description: string;
};

const ListPage: React.FC = () => {
  const { data, isLoading, error } = useQuery<DogsItemType[]>("data", getData);
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong </div>;

  return (
    <>
      <ManageList data={data} />
    </>
  );
};

export default ListPage;
