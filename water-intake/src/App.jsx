import { Routes, Route } from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Intake from "./pages/Intake";
import List from "./pages/List";
import Diff from "./pages/Diff";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/intake" element={<Intake />} />
      <Route path="/list" element={<List />} />
      <Route path="/diff" element={<Diff />} />
    </Routes>
  );
}
