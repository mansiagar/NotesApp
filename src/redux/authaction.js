import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

//Action
export const SET_USER = "SET_USER";
export const LOGOUT = "LOGOUT";

//action creators
export const loginWithGoogle = (navigate) => async (dispatch) => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);

  localStorage.setItem("user", JSON.stringify(result.user));

  dispatch({ type: SET_USER, payload: result.user });
  navigate("/noteForm");
};

export const logout = () => async (dispatch) => {
  await signOut(auth);
  localStorage.removeItem("user");
  dispatch({ type: LOGOUT });
};
