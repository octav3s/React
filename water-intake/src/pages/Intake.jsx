import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";

function Intake() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const email = useSelector(state => state.auth.email);

  function addIntake() {
    const data = JSON.parse(localStorage.getItem("water_intakes")) || {};
    const list = data[email] || [];
    const today = new Date().toISOString().split("T")[0];

    if (list.find(i => i.date === today)) {
      setMessage("Only one entry per day allowed");
      return;
    }

    list.push({ date: today, amount: Number(amount) });
    data[email] = list;
    localStorage.setItem("water_intakes", JSON.stringify(data));

    setMessage("Intake added");
    setAmount("");
  }

  return (
    <div>
      <Navbar />
      <h2>Add Intake</h2>
      {message && <div>{message}</div>}

      <div>
        <input
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <span style={{ marginLeft: "6px" }}>ml</span>
      </div>

      <div>
        <button onClick={addIntake}>Add</button>
      </div>
    </div>
  );
}

export default Intake;
