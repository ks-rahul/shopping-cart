import {
  // LOGIN_REQUEST,
  LOGIN_SUCCESS,
  // LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from "../types";

export const signIn = (userData) => (dispatch) => {
  localStorage.setItem("user", JSON.stringify(userData));
  dispatch({ type: LOGIN_SUCCESS, payload: userData });
};

export const signOut = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: LOGOUT_SUCCESS });
};

export default { signIn, signOut };
