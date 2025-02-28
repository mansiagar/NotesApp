import { loginWithGoogle } from "@/redux/authaction";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Login </h2>
      <Button onClick={() => dispatch(loginWithGoogle())}>
        Login With Google
      </Button>
    </div>
  );
};

export default Login;
