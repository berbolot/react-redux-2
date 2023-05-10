import { createStore } from "redux";
import InputNumReducer from "./reducers/reducer";

export const store = createStore(InputNumReducer);