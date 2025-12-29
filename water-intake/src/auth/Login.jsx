import { useState } from "react";
import { getUsers, setCurrentUser } from "../storage";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = getUsers().find(
      u => u.email === email && u.password === password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    setCurrentUser(user);
    navigate("/dashboard");
  };

  return (
    <div>
      <h2>Login</h2>

      <div>
        <input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>

      <div>
        <input
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}
