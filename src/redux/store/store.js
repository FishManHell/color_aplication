import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {colorsReducer} from "../reducer/work_with_color";

export const store = createStore(colorsReducer, composeWithDevTools(applyMiddleware(thunk)))
