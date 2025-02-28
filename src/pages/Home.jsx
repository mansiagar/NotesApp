import { useSelector } from "react-redux";
import Login from "./Login";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user.email, "in home");

  return (
    <div>
      {user ? (
        <div>
          <button>Logout</button>
        </div>
      ) : (
        <div>
          <Login />
        </div>
      )}
    </div>
  );
};

export default Home;
