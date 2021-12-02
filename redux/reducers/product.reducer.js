import { HYDRATE } from "next-redux-wrapper";

import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE,
} from "../types";

const initialState = {
  products: [],
  isLoading: false,
  isLoaded: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isLoaded: false,
      };

    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        products: action.payload.products,
      };

    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        products: [],
        isLoading: false,
        isLoaded: false,
      };
      
    default:
      return state;
  }
};

export default productReducer;
