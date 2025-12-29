export default function Pagination({ page, setPage, total }) {
  return (
    <div>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {page}
      </span>

      <button
        disabled={page * 5 >= total}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
}
