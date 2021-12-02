import { combineReducers } from "redux";

import cartReducer from "./cart.reducer";
import authReducer from "./auth.reducer";
import productReducer from "./product.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
});

export default rootReducer;
