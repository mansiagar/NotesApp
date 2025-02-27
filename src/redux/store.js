import { applyMiddleware, legacy_createStore as createstore } from "redux";
import { notesReduer } from "./notesReducer";
import { thunk } from "redux-thunk";

export const store = createstore(notesReduer, applyMiddleware(thunk));
