import counterReducer from "./counterIsLogged/counter";
import loggedReducer from "./counterIsLogged/islLogged";
import userReducer from "./users/userReducers";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  userData: userReducer,
});

export default allReducers;
