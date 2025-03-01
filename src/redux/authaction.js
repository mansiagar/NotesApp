import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

//action constants
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS";

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

//signIn Action Creators
export const signin = (email, password, navigate) => async (dispatch) => {
  try {
    const userCredentials = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    dispatch({ type: SIGNIN_SUCCESS, payload: userCredentials.user });
    navigate("/");
  } catch (error) {
    console.error("Signin error", error);
  }
};

//action creators
export const signup = (email, password, navigate) => async (dispatch) => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredentials.user;
    dispatch({ type: SIGNUP_SUCCESS, payload: user });
    navigate("/noteForm");
  } catch (err) {
    console.error("SIGNUP ERROR", err);
  }
};

//sign out action
export const signout = () => async (dispatch) => {
  try {
    await signOut(auth);
    dispatch({ type: SIGNOUT_SUCCESS });
  } catch (err) {
    console.error("SIGNOUT ERROR", err);
  }
};
