import {
  LOGOUT,
  SET_USER,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
} from "./authaction";

const intialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
};
export const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, user: action.payload };
    case SIGNOUT_SUCCESS:
      localStorage.removeItem("user");
      return { ...state, user: null };

    default:
      return state;
  }
};
