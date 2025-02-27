import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import app from "../../firebaseConfig";
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInwithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.log("signin with google ", error);
  }
};

export const signOutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.log("signOut with google ", error);
  }
};
