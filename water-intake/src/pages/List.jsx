import { useState } from "react";
import { getCurrentUser } from "../storage";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

export default function List() {
  const user = getCurrentUser();
  const [page, setPage] = useState(1);

  if (!user) return <div>Please login</div>;

  const start = (page - 1) * 5;
  const data = user.intakes.slice(start, start + 5);

  return (
    <div>
      <Navbar />
      <h2>Water Intake List</h2>

      <ul>
        {data.map((i, index) => (
          <li key={index}>{i.date} - {i.amount} ml</li>
        ))}
      </ul>

      <Pagination
        page={page}
        setPage={setPage}
        total={user.intakes.length}
      />
    </div>
  );
}
