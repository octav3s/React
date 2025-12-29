import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  function registerUser() {
    axios.post("https://demo-blog.mashupstack.com/api/register", {
      name,
      email,
      password,
      password_confirmation: passwordConf
    })
    .then(() => navigate("/login"))
    .catch(error => {
      if (error.response?.data?.errors) {
        setErrorMessage(Object.values(error.response.data.errors).join(" "));
      } else {
        setErrorMessage("Registration failed");
      }
    });
  }

  return (
    <div className="container">
      <h2>Signup</h2>

      {errorMessage && <div>{errorMessage}</div>}

      <div>
        <label>Name</label><br />
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div>
        <label>Email</label><br />
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
      </div>

      <div>
        <label>Password</label><br />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>

      <div>
        <label>Confirm Password</label><br />
        <input
          type="password"
          value={passwordConf}
          onChange={e => setPasswordConf(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={registerUser}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;
