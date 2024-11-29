import axios from "axios";

export const fetchItems = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

export const addItem = async (newItem: any) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    newItem
  );
  return response.data;
};