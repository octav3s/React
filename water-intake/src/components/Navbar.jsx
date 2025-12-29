import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigate("/login");
  }

  return (
    <div>
      <Link to="/intake">Intake</Link>{" | "}
      <Link to="/list">List</Link>{" | "}
      <Link to="/diff">Diff</Link>{" | "}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Navbar;
