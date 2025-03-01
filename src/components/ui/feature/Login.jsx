//import { signin } from "@/redux/action/authActions";
import { signin } from "@/redux/authaction";
import { Button, Flex, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogin = () => {
    dispatch(signin(email, password, navigate));
  };
  return (
    <div>
      <Flex h="90vh" justify={"center"} align={"center"}>
        <VStack
          w={"50%"}
          gap={"4"}
          border={"1px solid grey"}
          borderRadius={"md"}
        >
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
          <Button m={5} colorPalette={"blue"} onClick={handleLogin}>
            LOGIN
          </Button>
        </VStack>
      </Flex>
    </div>
  );
};

export default Login;
