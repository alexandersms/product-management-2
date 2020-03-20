import axios from "axios";

const baseUrl = "http://localhost:8080/api/v1/products";

export default {
  getProduct() {
    return axios.get(`${baseUrl}`);
  }
};
