import { loginWithGoogle } from "@/redux/authaction";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => dispatch(loginWithGoogle(navigate))}>
        Login With Google
      </Button>
    </div>
  );
};

export default Login;
