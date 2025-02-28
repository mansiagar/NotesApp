import { useSelector } from "react-redux";
import Login from "./Login";

const Home = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user.email, "in home");

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.displayName}!</h2>
          <p>Email: {user.email}</p>
          <img
            src={user.photoURL}
            alt="Profile"
            style={{ width: "100px", borderRadius: "50%" }}
          />
          <br />
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
