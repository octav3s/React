import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../store/authSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function attemptLogin() {
    axios.post("https://demo-blog.mashupstack.com/api/login", {
      email,
      password
    })
    .then(response => {
      dispatch(loginSuccess({ token: response.data.token, email }));
      navigate("/intake");
    })
    .catch(() => setErrorMessage("Invalid credentials"));
  }

  return (
    <div className="container">
      <h2>Login</h2>

      {errorMessage && <div>{errorMessage}</div>}

      <div>
        <label>Email</label><br />
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div>
        <label>Password</label><br />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={attemptLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
