import { useState } from "react";
import { getCurrentUser, getUsers, setUsers } from "../storage";
import Navbar from "../components/Navbar";

export default function Intake() {
  const user = getCurrentUser();
  const [amount, setAmount] = useState("");

  if (!user) return <div>Please login</div>;

  const today = new Date().toISOString().split("T")[0];

  const addIntake = () => {
    const users = getUsers();
    const u = users.find(x => x.email === user.email);

    if (u.intakes.find(i => i.date === today)) {
      alert("Only one entry per day allowed");
      return;
    }

    u.intakes.push({ date: today, amount: Number(amount) });
    setUsers(users);
  };

  return (
    <div>
      <Navbar />
      <h2>Welcome, {user.username}</h2>

      <input
        type="number"
        placeholder="Water in ml"
        onChange={e => setAmount(e.target.value)}
      />

      <button onClick={addIntake}>Add Intake</button>
    </div>
  );
}
