import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login"> Login</Link>
    </div>
  );
};

export default Navbar;
