import { addNotes, fetchNotes } from "@/redux/action";
import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotesList from "./NotesList";

const NoteForm = () => {
  const [newNotes, setNotes] = useState("");
  const notes = useSelector((state) => state.notes);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNotes());
  }, []);
  console.log(newNotes);
  const handleAdd = () => {
    if (newNotes.trim) {
      const newnotes = {
        text: newNotes,
        id: Date.now(),
      };
      dispatch(addNotes(newnotes));
      setNotes("");
    }
  };
  return (
    <div>
      <Heading>Collaborative Notes</Heading>
      <Box>
        <Flex gap={5}>
          <Input
            width={"50%"}
            placeholder="Enter new notes"
            value={newNotes}
            onChange={(e) => setNotes(e.target.value)}
          ></Input>
          <Button bg={"green.500"} color={"white"} onClick={handleAdd}>
            ADD NOTES
          </Button>
        </Flex>
        {notes &&
          notes.map((note) => {
            return (
              <div key={note.id}>
                <Flex justify={"center"} textAlign={"center"} direction={"row"}>
                  <Box p={10} bg={"grey"} m={5} borderRadius={10} width={300}>
                    <Text>{note.text}</Text>
                    <Button bg={"red"}>Delete</Button>
                  </Box>
                </Flex>
              </div>
            );
          })}
      </Box>
    </div>
  );
};

export default NoteForm;
