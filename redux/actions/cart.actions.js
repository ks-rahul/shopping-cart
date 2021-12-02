import {
  TOGGLE_CART_POPUP,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  ADD_ITEM,
  SUBTRACT_ITEM,
} from "../types";

export const toggleCartPopup = () => (dispatch) =>
  dispatch({ type: TOGGLE_CART_POPUP });

export const addToCart = (cartItem) => (dispatch) =>
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItem },
  });

export const removeFromCart = (cartItemId) => (dispatch) =>
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItemId },
  });

export const addInExisting = (id) => (dispatch) =>
  dispatch({ type: ADD_ITEM, payload: { id } });

export const removeFromExisting = (id) => (dispatch) =>
  dispatch({ type: SUBTRACT_ITEM, payload: { id } });

export const clearCart = () => (dispatch) => dispatch({ type: CLEAR_CART });

export default {
  toggleCartPopup,
  addToCart,
  removeFromCart,
  clearCart,
  addInExisting,
};
