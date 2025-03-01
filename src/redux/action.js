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

    const notes = data
      ? Object.entries(data).map(([id, val]) => ({ id, ...val }))
      : [];
    console.log(notes);
    dispatch({ type: FETCH_NOTES, payload: notes });
  } catch (error) {
    console.log("fetching notes error", error);
  }
};

// add notes
export const addNotes = (newNotes) => async (dispatch) => {
  try {
    const response = await axios.post(URL, {
      ...newNotes,
    });
    dispatch({
      type: ADD_NOTES,
      payload: { id: (await response).data.name, ...newNotes },
    });
  } catch (error) {
    console.log("add notes error", error);
  }
};

//delete notes
export const deleteNote = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://notesapp-634d1-default-rtdb.firebaseio.com/notes/${id}.json
`);
    dispatch({ type: DELETE_NOTES, payload: id });
  } catch (error) {
    console.error("Error deleting note", error);
  }
};
