import { useState } from "react";
import { signInwithGoogle, signOutUser } from "./firebase/auth";
import { Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const user = await signInwithGoogle();
      if (user) {
        setUser(user);
        navigate("/note");
      }
    } catch (error) {
      alert("user not present", error);
    }
  };
  const handleLogOut = async () => {
    try {
      await signOutUser();
      setUser(null);
    } catch (error) {
      alert("user not logout", error);
    }
  };
  return (
    <div>
      <Flex direction={"column"} justify={"center"} textAlign={"center"}>
        <Heading m={50} color={"blue"}>
          WELCOME NOTES APP
        </Heading>
        {user ? (
          <div>
            <Button bg={"black"} color={"white"} onClick={handleLogOut}>
              LogOut
            </Button>
          </div>
        ) : (
          <div>
            <Button bg={"blue"} color={"white"} onClick={handleLogin}>
              {" "}
              Login With Google
            </Button>
          </div>
        )}
      </Flex>
    </div>
  );
};

export default App;
