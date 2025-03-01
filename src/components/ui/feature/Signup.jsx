import { signup } from "@/redux/authaction";
import { Button, Flex, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//import { useDispatch } from "react-redux";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSignup = () => {
    dispatch(signup(email, password, navigate));
  };

  return (
    <Flex h="90vh" justify={"center"} align={"center"}>
      <VStack w={"50%"} gap={"4"} border={"1px solid grey"} borderRadius={"md"}>
        <Input
          w={"80%"}
          m={5}
          type="text"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          w={"80%"}
          m={5}
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button m={5} colorPalette={"blue"} onClick={handleSignup}>
          SIGN UP
        </Button>
      </VStack>
    </Flex>
  );
};

export default Signup;
