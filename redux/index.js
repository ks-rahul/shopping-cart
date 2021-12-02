import { createStore, compose, applyMiddleware } from "redux";
import { createWrapper } from "next-redux-wrapper";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const middleware = [thunk];

export const store = () =>
  createStore(rootReducer, compose(applyMiddleware(...middleware)));

export const wrapper = createWrapper(store, { debug: true });
