import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";

function List() {
  const email = useSelector(state => state.auth.email);
  const [intakes, setIntakes] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 5;

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("water_intakes")) || {};
    setIntakes(data[email] || []);
  }, [email]);

  const start = (page - 1) * perPage;
  const pageData = intakes.slice(start, start + perPage);

  return (
    <div>
      <Navbar />
      <h2>Intake List</h2>

      <table>
        <tbody>
          {pageData.map((i, idx) => (
            <tr key={idx}>
              <td>{i.date}</td>
              <td>{i.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination page={page} setPage={setPage} total={intakes.length} perPage={perPage} />
    </div>
  );
}

export default List;
