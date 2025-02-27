import { fetchNotes } from "@/redux/action";
import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const NoteForm = () => {
  const notes = useSelector((state) => state.notes);
  console.log(notes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotes());
  }, []);
  return (
    <div>
      <Heading>Collaborative Notes</Heading>
    </div>
  );
};

export default NoteForm;
