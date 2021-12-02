import {
  TOGGLE_CART_POPUP,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  ADD_ITEM,
  SUBTRACT_ITEM,
} from "../types";

const initialState = {
  isCartOpen: false,
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_POPUP:
      return {
        ...state,
        isCartOpen: !state.isCartOpen,
      };
    case ADD_TO_CART:
      const id = action.payload.cartItem.id;
      const isOld = state.items.map((item) => item.id).includes(id);
      let cartItems = null;
      if (isOld) {
        const items = state.items.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        cartItems = [...items];
      } else {
        cartItems = [...state.items, action.payload.cartItem];
      }
      return {
        ...state,
        items: cartItems,
      };
    case ADD_ITEM:
      const updateItems = state.items.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      return { ...state, items: updateItems };
    case SUBTRACT_ITEM:
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.id && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      return { ...state, items: updatedItems };
    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.payload.cartItemId
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};

export default cartReducer;
