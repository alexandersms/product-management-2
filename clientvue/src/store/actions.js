import axios from "axios";

export const getProducts = ({ commit }) => {
  axios
    .get("http://localhost:8080/api/v1/products")
    .then(res => {
      console.log("*** SUCCESS ***");
      commit("SET_PRODUCTS", res.data);
    })
    .catch(error => {
      console.log("**** ERROR ****");
      console.log(error);
    });
};

export const getProduct = ({ commit }, productId) => {
  axios
    .get(`http://localhost:8080/api/v1/products/${productId}`)
    .then(res => {
      console.log("*** SUCCESS ***");
      commit("SET_PRODUCT", res.data);
    })
    .catch(error => {
      console.log("**** ERROR ****");
      console.log(error);
    });
};
