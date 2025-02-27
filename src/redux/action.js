import axios from "axios";

//action constant
export const FETCH_NOTES = "FETCH_NOTES";
export const ADD_NOTES = "ADD_NOTES";
export const DELETE_NOTES = "DELETE_NOTES";

const URL = `https://notesapp-634d1-default-rtdb.firebaseio.com/notes.json`;
// action creators
export const fetchNotes = () => async (dispatch) => {
  try {
    const response = await axios.get(URL);
    const data = response.data;
    console.log(data);
    // const notes = data?
    // dispatch({ type: FETCH_NOTES, payload: data });
  } catch (error) {
    console.log("fetching notes error", error);
  }
};
