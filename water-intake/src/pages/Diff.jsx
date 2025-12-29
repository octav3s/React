import { useState } from "react";
import { getCurrentUser } from "../storage";
import Navbar from "../components/Navbar";

export default function Diff() {
  const user = getCurrentUser();
  const [d1, setD1] = useState("");
  const [d2, setD2] = useState("");

  if (!user) return <div>Please login</div>;

  const getAmount = date =>
    user.intakes.find(i => i.date === date)?.amount || 0;

  return (
    <div>
      <Navbar />
      <h2>Water Intake Difference</h2>

      <input type="date" onChange={e => setD1(e.target.value)} />
      <input type="date" onChange={e => setD2(e.target.value)} />

      <p>
        Difference: {Math.abs(getAmount(d1) - getAmount(d2))} ml
      </p>
    </div>
  );
}
