import { LOGOUT, SET_USER } from "./authaction";

const intialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};
export const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
};
