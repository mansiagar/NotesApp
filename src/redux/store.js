import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createstore,
} from "redux";
import { notesReduer } from "./notesReducer";
import { thunk } from "redux-thunk";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  notes: notesReduer,
});
export const store = createstore(rootReducer, applyMiddleware(thunk));
