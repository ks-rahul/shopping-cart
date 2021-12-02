import axios from "axios";

import { GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "../types";
import API from "../../api.config";

export const getProducts = () => (dispatch) => {
  dispatch({ type: GET_PRODUCTS_REQUEST });
  axios
    .get(API.URL)
    .then((response) => {
      dispatch({
        type: GET_PRODUCTS_SUCCESS,
        payload: {
          products: response.data,
        },
      });
    })
    .catch((error) => {
      console.error(error);
      dispatch({ type: GET_PRODUCTS_FAILURE });
    });
};

export default { getProducts };
