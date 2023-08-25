import axios from "axios";

export const fetchProducts = async () => {
  return axios.get("https://fakestoreapi.com/products");
};
