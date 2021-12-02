import { HYDRATE } from "next-redux-wrapper";

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from "../types";

const initialState = {
  isLoggedIn: false,
  user: null,
  isLoggingIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };

    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoggingIn: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        isLoggingIn: false,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        isLoggingIn: false,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        ...initialState,
      };
      
    default:
      return state;
  }
};

export default authReducer;
