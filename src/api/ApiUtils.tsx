import axios from "axios";

const baseUrl =
  "https://70b488cd-45e1-4f17-b557-b1542c46e13f.mock.pstmn.io/data";

export const getData = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

// export const GetPostList = async () => {
//   const {data} = await axios.get("https://ghibliapi.herokuapp.com/films")
//   return data
// }

// export const UpdateData = async (data)=> {
//   const {data} = await axios.post("https://ghibliapi.herokuapp.com/films",data )
//   return data
// }
