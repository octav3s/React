import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logout } from "../storage";

export default function Navbar() {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) return null; 

  return (
    <div>
      <Link to="/intake">Intake</Link>{" | "}
      <Link to="/list">List</Link>{" | "}
      <Link to="/diff">Diff</Link>{" | "}
      <span>{user.username}</span>{" "}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
