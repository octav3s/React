import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

function Diff() {
  const email = useSelector(state => state.auth.email);
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");
  const [diff, setDiff] = useState(null);

  function calculate() {
    const data = JSON.parse(localStorage.getItem("water_intakes")) || {};
    const list = data[email] || [];

    const a1 = list.find(i => i.date === d1)?.amount || 0;
    const a2 = list.find(i => i.date === d2)?.amount || 0;

    setDiff(Math.abs(a1 - a2));
  }

  return (
    <div>
      <Navbar />
      <h2>Difference</h2>
      <input type="date" onChange={e => setD1(e.target.value)} />
      <input type="date" onChange={e => setD2(e.target.value)} />
      <button onClick={calculate}>Calculate</button>
      {diff !== null && <div>Difference: {diff} ml</div>}
    </div>
  );
}

export default Diff;
