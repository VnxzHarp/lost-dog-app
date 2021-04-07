import axios from "axios";
import { Values } from "../components/form/MyForm";

const baseUrl =
  "https://70b488cd-45e1-4f17-b557-b1542c46e13f.mock.pstmn.io/data";

export const getData = async () => {
  const { data } = await axios.get(baseUrl);
  return data;
};

export const postData = async () => {
  const { data } = await axios.post(baseUrl, {
    headers: {
      authorization: "Bearer YOUR_JWT_TOKEN_HERE",
    },
  });
  return data;
};
export const sendPostRequest = async (newPost: Values) => {
  try {
    const { data } = await axios.post(
      "https://e160a083-2c3b-4407-84f2-faf3625b2cd9.mock.pstmn.io/dogodatabase/2/dogList",
      newPost
    );
    console.log(data);
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};
