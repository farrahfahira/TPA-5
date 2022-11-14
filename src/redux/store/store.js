import { combineReducers, createStore } from "redux";
import Reducer from "../reducer/Reducer";

const allReducer = combineReducers({
  add: Reducer,
});

const store = createStore(allReducer);

export default store;
