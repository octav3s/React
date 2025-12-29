import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Intake from "./pages/Intake";
import List from "./pages/List";
import Diff from "./pages/Diff";

function App() {
  const token = useSelector(state => state.auth.token);

  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/intake" element={token ? <Intake /> : <Navigate to="/login" />} />
      <Route path="/list" element={token ? <List /> : <Navigate to="/login" />} />
      <Route path="/diff" element={token ? <Diff /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
