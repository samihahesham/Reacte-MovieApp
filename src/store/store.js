import reducers from "./reducers/combineReducers";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(reducers , composeWithDevTools(applyMiddleware(thunk)));
export default store;
