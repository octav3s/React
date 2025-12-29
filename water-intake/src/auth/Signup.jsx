import { useState } from "react";
import { getUsers, setUsers } from "../storage";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const users = getUsers();

    if (users.find(u => u.email === email)) {
      alert("Email already exists");
      return;
    }

    users.push({
      username,
      email,
      password,
      intakes: []
    });

    setUsers(users);
    navigate("/login");
  };

  return (
    <div>
      <h2>Signup</h2>

      <input
        placeholder="Username"
        onChange={e => setUsername(e.target.value)}
      />

      <input
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
