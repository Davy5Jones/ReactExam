import { combineReducers, createStore } from "redux";
import { historyReducer } from "./HistoryState";

//Multiple catsReducer
const reducers = combineReducers({ historyReducer: historyReducer });
const store = createStore(reducers);

export default store;
