import { ADD_NOTES, DELETE_NOTES, FETCH_NOTES } from "./action";

const initialState = {
  notes: [],
  loading: false,
  error: null,
};

export const notesReduer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return { ...state, notes: action.payload };
    case ADD_NOTES:
      return { ...state, notes: [...state.notes, action.payload] };
    case DELETE_NOTES:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};
