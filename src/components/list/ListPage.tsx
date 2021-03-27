import React from "react";
import { useQuery, useMutation } from "react-query";
//components
import ManageList from "./ManageListPage";
import { LinearProgress } from "@material-ui/core";
import { getData } from "../../api/ApiUtils";
//Types
export type DataItemType = {
  id?: string | undefined;
  description?: string;
  title: string;
  name?: string;
  director: string;
  release_date: string;
};
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
  console.log(data);
  // const [mutate] = useMutation<DogsItemType>((text) =>
  //   axios.post(
  //     "https://70b488cd-45e1-4f17-b557-b1542c46e13f.mock.pstmn.io/data",
  //     { text }
  //   )
  // );
  // mutate({
  //   name: "Chonel",
  //   size: "large",
  //   color: "red",
  //   breed: "pitbull",
  //   photo:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
  //   status: "missing",
  //   location: "Cono Surf",
  // });
  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong </div>;

  return (
    <>
      <ManageList data={data} />
    </>
  );
};

export default ListPage;
